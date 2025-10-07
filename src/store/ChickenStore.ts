// store/referralStore.js
import { create } from "zustand";
import axios from "axios";

export const useReferralStore = create((set) => ({
	referrals: [], // array of { username, xp }
	loading: false,
	error: null,

	fetchReferrals: async () => {
		set({ loading: true, error: null });
		try {
			const { data } = await axios.get(
				"https://nukedata-production.up.railway.app/api/referrals"
			); // your backend endpoint
			// Map only username and xp
			const mapped = data.map((ref) => ({
				username: ref.username,
				xp: ref.xp,
			}));
			set({ referrals: mapped, loading: false });
		} catch (err) {
			set({ error: err.message, loading: false });
			console.error("❌ Error fetching referrals from store:", err.message);
		}
	},
}));
