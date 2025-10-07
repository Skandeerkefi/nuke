import { create } from "zustand";

export interface Referral {
	userId: string;
	displayName: string;
	xp: number;
	updatedAt: string;
}

interface ReferralStore {
	referrals: Referral[];
	loading: boolean;
	error: string | null;
	fetchReferrals: () => Promise<void>;
}

export const useReferralStore = create<ReferralStore>((set) => ({
	referrals: [],
	loading: false,
	error: null,

	fetchReferrals: async () => {
		set({ loading: true, error: null });
		try {
			const res = await fetch(
				"https://nukedata-production.up.railway.app/api/chicken/leaderboard"
			);
			if (!res.ok) throw new Error("Failed to fetch referrals");
			const data: Referral[] = await res.json();
			set({ referrals: data, loading: false });
		} catch (err: any) {
			set({ error: err.message || "Unknown error", loading: false });
		}
	},
}));
