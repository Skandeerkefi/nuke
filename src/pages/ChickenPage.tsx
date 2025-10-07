import React, { useEffect } from "react";
import { useReferralStore } from "../store/referralStore";
import GraphicalBackground from "@/components/GraphicalBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const ChickenPage: React.FC = () => {
	const { referrals, loading, error, fetchReferrals, prizeMap } =
		useReferralStore();

	useEffect(() => {
		fetchReferrals();
	}, []);

	// Sort referrals by XP descending
	const sortedReferrals = [...referrals].sort((a, b) => b.xp - a.xp);

	return (
		<div className='relative flex flex-col min-h-screen'>
			<GraphicalBackground />
			<Navbar />

			<main className='flex-grow max-w-5xl p-6 mx-auto'>
				<h1 className='mb-8 text-3xl font-bold text-center text-yellow-400'>
					Biweekly Chicken Leaderboard
				</h1>

				{loading && (
					<p className='text-center text-white'>Loading leaderboard...</p>
				)}
				{error && <p className='text-center text-red-500'>Error: {error}</p>}

				{!loading && !error && (
					<div className='space-y-4'>
						{sortedReferrals.map((referral, index) => (
							<div
								key={referral.userId}
								className={`flex justify-between items-center p-4 rounded-xl shadow-lg transition-transform transform hover:scale-105 ${
									index % 2 === 0 ? "bg-red-500" : "bg-red-400"
								}`}
							>
								<div className='flex items-center space-x-4'>
									<span className='text-lg font-bold text-white'>
										{index + 1}
									</span>
									
									<span className='font-medium text-white'>
										{referral.displayName}
									</span>
								</div>

								<div className='flex items-center space-x-6'>
									<span className='font-semibold text-white'>
										{referral.xp} XP
									</span>
									<span className='px-3 py-1 text-sm font-bold text-yellow-800 bg-yellow-200 rounded-full'>
										{index < prizeMap.length ? prizeMap[index] : "-"}c
									</span>
								</div>
							</div>
						))}
					</div>
				)}
			</main>

			<Footer />
		</div>
	);
};

export default ChickenPage;
