import React, { useEffect, useState } from "react";
import { useChickenStore } from "../store/ChickenStore";
import GraphicalBackground from "@/components/GraphicalBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const ChickenPage: React.FC = () => {
	const { leaderboard, loading, error, fetchLeaderboard } = useChickenStore();
	const [period, setPeriod] = useState<"lifetime" | "weekly" | "monthly">(
		"lifetime"
	);

	// Compute minTime / maxTime based on period
	const getTimeRange = () => {
		const now = new Date();
		let minTime: number | undefined;
		let maxTime: number | undefined = now.getTime();

		if (period === "weekly") {
			const lastWeek = new Date();
			lastWeek.setDate(now.getDate() - 7);
			minTime = lastWeek.getTime();
		} else if (period === "monthly") {
			const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
			minTime = firstDay.getTime();
		}

		return { minTime, maxTime };
	};

	// Fetch leaderboard on period change
	useEffect(() => {
		const { minTime, maxTime } = getTimeRange();
		fetchLeaderboard(minTime, maxTime);
	}, [period, fetchLeaderboard]);

	return (
		<div className='relative flex flex-col min-h-screen'>
			<GraphicalBackground />
			<Navbar />

			<main className='relative z-10 flex-grow w-full max-w-6xl px-6 py-10 mx-auto'>
				<h1 className='mb-4 text-4xl font-extrabold text-center text-[#fefefe] drop-shadow-lg'>
					🐔 Chicken.gg Leaderboard
				</h1>

				{/* Period Selector */}
				<div className='flex justify-center mb-8'>
					{["lifetime", "weekly", "monthly"].map((p) => (
						<button
							key={p}
							className={`mx-2 px-4 py-2 rounded-full font-semibold transition ${
								period === p
									? "bg-[#e10600] text-white shadow-lg"
									: "bg-[#030303]/70 text-[#fefefe] hover:bg-[#e10600]/80"
							}`}
							onClick={() => setPeriod(p as any)}
						>
							{p.charAt(0).toUpperCase() + p.slice(1)}
						</button>
					))}
				</div>

				{loading && (
					<p className='text-center text-[#fefefe]'>Loading leaderboard...</p>
				)}
				{error && <p className='text-center text-[#e10600]'>{error}</p>}

				{leaderboard.length > 0 ? (
					<>
						{/* Top 3 Cards */}
						<div className='grid grid-cols-1 gap-6 mb-10 md:grid-cols-3'>
							{leaderboard.slice(0, 3).map((player, index) => (
								<div
									key={player.userId}
									className='relative p-6 rounded-3xl shadow-2xl border-4 border-[#e10600] flex flex-col items-center justify-center
                  bg-gradient-to-br from-[#e10600] to-[#030303] hover:scale-105 transform transition-all duration-300'
								>
									<div className='absolute -top-4 right-4 w-12 h-12 flex items-center justify-center rounded-full bg-[#fefefe] text-[#e10600] font-bold text-lg shadow-lg'>
										#{index + 1}
									</div>

									<p className='text-2xl md:text-3xl font-extrabold text-[#fefefe] mb-2 drop-shadow-lg'>
										{player.username || "Anonymous"}
									</p>

									<p className='text-md md:text-lg font-semibold text-[#fefefe]'>
										⚡ XP:{" "}
										<span className='text-[#e10600]'>
											{player.xp.toLocaleString()}
										</span>
									</p>

									{player.totalEarnings !== undefined && (
										<p className='mt-2 text-sm md:text-base text-[#fefefe]'>
											💰 Earnings: ${player.totalEarnings.toFixed(2)}
										</p>
									)}
								</div>
							))}
						</div>

						{/* Table for remaining players */}
						{leaderboard.length > 3 && (
							<div className='overflow-x-auto p-6 shadow-lg bg-[#030303]/80 backdrop-blur-md rounded-2xl'>
								<table className='w-full text-left border-collapse'>
									<thead className='text-sm tracking-wide text-[#fefefe] uppercase bg-[#e10600]'>
										<tr>
											<th className='p-3'>Rank</th>
											<th className='p-3'>Username</th>
											<th className='p-3'>XP</th>
											<th className='p-3'>Earnings</th>
										</tr>
									</thead>
									<tbody>
										{leaderboard.slice(3).map((player, index) => (
											<tr
												key={player.userId}
												className='transition hover:bg-[#e10600]/80 bg-[#030303]/50 text-[#fefefe]'
											>
												<td className='p-3 font-bold'>{index + 4}</td>
												<td className='p-3 font-semibold'>
													{player.username || "Anonymous"}
												</td>
												<td className='p-3'>{player.xp.toLocaleString()}</td>
												<td className='p-3'>
													$
													{player.totalEarnings
														? player.totalEarnings.toFixed(2)
														: "0.00"}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						)}
					</>
				) : (
					!loading && (
						<p className='text-center text-[#fefefe]'>
							No referrals found yet 💤
						</p>
					)
				)}
			</main>

			<Footer />
		</div>
	);
};

export default ChickenPage;
