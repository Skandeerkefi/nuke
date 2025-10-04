import { create } from "zustand";
import axios from "axios";

interface ChickenPlayer {
	userId: string;
	username: string;
	xp: number;
	totalWager?: number;
	totalDeposits?: number;
	totalEarnings?: number;
}

interface ChickenStore {
	leaderboard: ChickenPlayer[];
	loading: boolean;
	error: string | null;
	fetchLeaderboard: (minTime?: number, maxTime?: number) => Promise<void>;
}

export const useChickenStore = create<ChickenStore>((set) => ({
	leaderboard: [],
	loading: false,
	error: null,

	fetchLeaderboard: async (minTime?: number, maxTime?: number) => {
		try {
			set({ loading: true, error: null });

			// Build query parameters
			let url = "http://localhost:3000/api/chk";
			const params: Record<string, any> = {};
			if (minTime) params.minTime = minTime;
			if (maxTime) params.maxTime = maxTime;

			const { data } = await axios.get(url, { params });

			// XP-based sorting just in case
			const sortedData = data.sort(
				(a: ChickenPlayer, b: ChickenPlayer) => b.xp - a.xp
			);

			set({ leaderboard: sortedData, loading: false });
		} catch (err: any) {
			set({
				error: err.response?.data?.error || "Failed to fetch leaderboard",
				loading: false,
			});
		}
	},
}));
