import { create } from "zustand";

export interface LeaderboardUser {
  username: string;
  wager: number;
  rank: number;
  avatar?: string;
}

interface CSGOLeadState {
  leaderboard: LeaderboardUser[];
  loading: boolean;
  error: string | null;
  fetchLeaderboard: () => Promise<void>;
}

export const useCSGOLeadStore = create<CSGOLeadState>((set) => ({
  leaderboard: [],
  loading: false,
  error: null,

  fetchLeaderboard: async () => {
    set({ loading: true, error: null });

    try {
      const res = await fetch(
        "https://nukedata-production.up.railway.app/api/csgo/leaderboard"
      );

      if (!res.ok) throw new Error("Failed to fetch leaderboard");

      const data = await res.json();

      // API returns { success, count, data: [...] }
      const users = Array.isArray(data?.data) ? data.data : [];

      const leaderboard: LeaderboardUser[] = users.map(
  (user: any, index: number) => ({
    username: user.name || `User #${user.id}`, // use API's 'name'
    wager: Number(user.wagered ?? 0),          // use API's 'wagered'
    rank: index + 1,
    avatar: user.avatar || null,
  })
);


      set({ leaderboard, loading: false });
    } catch (error: any) {
      set({ error: error.message, loading: false });
    }
  },
}));

