// src/store/referralStore.ts
import { create } from "zustand";

export interface Referral {
	userId: string;
	displayName: string;
	imageUrl: string;
	xp: number;
}

interface ReferralStore {
	referrals: Referral[];
	loading: boolean;
	error: string | null;
	fetchReferrals: () => Promise<void>;
	prizeMap: number[];
}

export const useReferralStore = create<ReferralStore>((set) => ({
	referrals: [],
	loading: false,
	error: null,
	prizeMap: [100, 50, 25, 15, 10], // top 5 prizes for biweekly leaderboard

	fetchReferrals: async () => {
		set({ loading: true, error: null });
		try {
			const response = await fetch(
				"https://nukedata-production.up.railway.app/api/chicken/leaderboard"
			);

			if (!response.ok) {
				throw new Error(`Failed to fetch: ${response.statusText}`);
			}

			const data: Referral[] = await response.json();

			// Sort by xpEarned descending
			const sorted = data.sort((a, b) => b.xpEarned - a.xpEarned);

			set({ referrals: sorted, loading: false });
		} catch (err: any) {
			set({ error: err.message || "Unknown error", loading: false });
		}
	},
}));
