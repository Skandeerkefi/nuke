import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import GraphicalBackground from "@/components/GraphicalBackground";
import { Footer } from "@/components/Footer";
import { useCSGOLeadStore } from "@/store/csgoleadStore";

export default function CSGOPage() {
  const { leaderboard, loading, error, fetchLeaderboard } = useCSGOLeadStore();

  // Prize mapping
  const prizeMap: Record<number, number> = {
    1: 250,
    2: 125,
    3: 75,
    4: 30,
    5: 15,
    6: 5,
  };

  // Total prize calculation
  const totalPrize = Object.values(prizeMap).reduce((sum, val) => sum + val, 0);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen text-white">
      <GraphicalBackground />
      <Navbar />

      <main className="flex-1 p-6 space-y-6">
        {/* Centered title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">CSGO Weekly Leaderboard</h1>
          <p className="text-lg text-gray-300 mt-2">
            Total Prizes: {totalPrize} 🪙
          </p>
        </div>

        {loading && <p className="text-gray-300 text-lg text-center">Loading leaderboard...</p>}

        {error && <p className="text-red-500 text-lg text-center">Error: {error}</p>}

        {!loading && !error && leaderboard.length === 0 && (
          <p className="text-gray-300 text-center">No leaderboard data available.</p>
        )}

        {!loading && !error && leaderboard.length > 0 && (
          <table className="w-full max-w-3xl mx-auto bg-gray-900/80 rounded-lg overflow-hidden shadow-md text-white text-sm">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-4 py-2 text-left w-16">Rank</th>
                <th className="px-4 py-2 text-left">User</th>
                <th className="px-4 py-2 text-right w-24">Wager</th>
                <th className="px-4 py-2 text-right w-24">Prize</th>
              </tr>
            </thead>

            <tbody>
              {leaderboard.map((user, idx) => (
                <tr
                  key={user.rank}
                  className={`transition hover:bg-gray-700/50 ${
                    idx % 2 === 0 ? "bg-gray-900/50" : "bg-gray-900/30"
                  }`}
                >
                  {/* Rank with badges */}
                  <td className="px-4 py-2 font-semibold text-center">
                    {user.rank === 1 && <span className="bg-yellow-400 text-gray-900 px-2 py-1 rounded-full">🥇</span>}
                    {user.rank === 2 && <span className="bg-gray-400 text-gray-900 px-2 py-1 rounded-full">🥈</span>}
                    {user.rank === 3 && <span className="bg-orange-500 text-gray-900 px-2 py-1 rounded-full">🥉</span>}
                    {user.rank > 3 && user.rank}
                  </td>

                  {/* User column */}
                  <td className="px-4 py-2 flex items-center gap-3">
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user.username}
                        className="w-8 h-8 rounded-full border-2 border-gray-600"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-gray-500" />
                    )}
                    <span className="truncate">{user.username}</span>
                  </td>

                  {/* Wager column */}
                  <td className="px-4 py-2 text-right font-mono text-green-400">
                    {Number(user.wager).toLocaleString(undefined, { maximumFractionDigits: 2 })}
                  </td>

                  {/* Prize column */}
                  <td className="px-4 py-2 text-right font-mono text-yellow-300">
                    {prizeMap[user.rank] ? `${prizeMap[user.rank]} 🪙` : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </main>

      <Footer />
    </div>
  );
}
