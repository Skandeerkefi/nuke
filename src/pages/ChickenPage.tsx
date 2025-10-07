import React, { useEffect } from "react";
import { useReferralStore } from "../store/referralStore";
import GraphicalBackground from "@/components/GraphicalBackground";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const prizeMap = [100, 50, 25, 15, 10]; // Top 5 prizes

const ChickenPage: React.FC = () => {
	const { referrals, loading, error, fetchReferrals } = useReferralStore();

	useEffect(() => {
		fetchReferrals();
	}, []);

	// Sort referrals by XP descending
	const sortedReferrals = [...referrals].sort((a, b) => b.xp - a.xp);

	return (
		<div className='relative min-h-screen'>
			<GraphicalBackground />
			<Navbar />

			<main className='max-w-5xl p-4 mx-auto'>
				<h1 className='mb-6 text-3xl font-bold'>
					Biweekly Chicken Leaderboard
				</h1>

				{loading && <p>Loading leaderboard...</p>}
				{error && <p className='text-red-500'>Error: {error}</p>}

				{!loading && !error && (
					<table className='w-full overflow-hidden bg-white border-collapse rounded-lg shadow-md'>
						<thead className='bg-gray-200'>
							<tr>
								<th className='px-4 py-2 text-left'>Rank</th>
								<th className='px-4 py-2 text-left'>Player</th>
								<th className='px-4 py-2 text-left'>XP</th>
								<th className='px-4 py-2 text-left'>Prize</th>
							</tr>
						</thead>
						<tbody>
							{sortedReferrals.map((referral, index) => (
								<tr
									key={referral.userId}
									className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
								>
									<td className='px-4 py-2'>{index + 1}</td>
									<td className='flex items-center gap-2 px-4 py-2'>
										<img
											src={`https://static.chicken.gg/avatars-default/004.jpg`} // Replace with referral.imageUrl if you store it
											alt={referral.displayName}
											className='w-6 h-6 rounded-full'
										/>
										{referral.displayName}
									</td>
									<td className='px-4 py-2'>{referral.xp}</td>
									<td className='px-4 py-2'>
										{index < prizeMap.length ? prizeMap[index] : "-"}
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
};

export default ChickenPage;
