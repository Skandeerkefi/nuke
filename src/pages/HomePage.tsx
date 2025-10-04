import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dices, Gift, Users } from "lucide-react";
import GraphicalBackground from "@/components/GraphicalBackground";

function HomePage() {
	return (
		<div className='relative flex flex-col min-h-screen text-[#fefffe]'>
			<GraphicalBackground />
			<Navbar />

			<main className='relative z-10 flex-grow'>
				{/* Hero Section */}
				<section className='flex flex-col-reverse items-center justify-center max-w-6xl gap-16 px-6 mx-auto py-28 sm:flex-row sm:items-center'>
					<div className='max-w-xl text-center sm:text-left'>
						<h1 className='text-5xl font-extrabold leading-tight tracBomber-tight bg-gradient-to-r from-[#ff0012] via-[#ffd01f] to-[#ff0012] bg-clip-text text-transparent drop-shadow-lg'>
							Bomber&apos;s <br /> Official Stream
						</h1>
						<div className='w-24 h-1 mt-6 rounded-full bg-[#ff0012] animate-pulse' />
						<p className='mt-6 text-lg font-medium tracBomber-wide text-[#fefffe]/80'>
							Watch Bomber live on Kick — thrilling gambling streams, giveaways,
							and more.
						</p>
					</div>

					<div className='w-full max-w-xl aspect-video rounded-3xl overflow-hidden shadow-lg border-4 border-[#ffd01f]'>
						<iframe
							src='https://player.kick.com/Bomber'
							frameBorder='0'
							allowFullScreen
							title='Bomber Live Stream'
							className='w-full h-full'
						></iframe>
					</div>
				</section>

				{/* Features Section */}
				<section className='max-w-6xl px-6 py-16 mx-auto'>
					<h2 className='mb-12 text-4xl font-bold text-center text-[#fefffe]'>
						What We Offer
					</h2>
					<div className='grid grid-cols-1 gap-10 sm:grid-cols-3'>
						{[
							{
								icon: (
									<Dices className='w-12 h-12 text-[#ff0012] animate-pulse' />
								),
								title: "Exciting Gambling Streams",
								description:
									"Thrilling slots, casino games, and big wins live with Bomber.",
							},
							{
								icon: (
									<Users className='w-12 h-12 text-[#ffd01f] animate-pulse' />
								),
								title: "Slot Call System",
								description:
									"Suggest slots for Bomber to play and see your choices live.",
							},
							{
								icon: (
									<Gift className='w-12 h-12 text-[#ff0012] animate-pulse' />
								),
								title: "Regular Giveaways",
								description:
									"Win cash, gaming gear, and more through frequent giveaways.",
							},
						].map(({ icon, title, description }) => (
							<div
								key={title}
								className='flex flex-col items-center bg-[#000101]/60 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-[#ffd01f] hover:scale-[1.05] transition-transform cursor-default'
							>
								<div className='flex items-center justify-center w-20 h-20 rounded-full bg-[#000101]/50 border-2 border-[#ff0012] mb-6'>
									{icon}
								</div>
								<h3 className='text-xl font-semibold mb-3 relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-14 after:h-[2px] after:bg-gradient-to-r after:from-[#ff0012] after:to-[#ffd01f]'>
									{title}
								</h3>
								<p className='text-center text-[#fefffe]/80'>{description}</p>
							</div>
						))}
					</div>
				</section>

				{/* Schedule Section */}
				<section className='max-w-5xl px-6 py-16 mx-auto'>
					<h2 className='mb-8 text-4xl font-bold text-center text-[#fefffe]'>
						📅 Stream Schedule
					</h2>
					<p className='max-w-xl mx-auto mb-10 text-center text-[#fefffe]/70'>
						Bomber goes live <strong>every day</strong> — join anytime!
					</p>

					{/* Timeline Desktop */}
					<div className='relative items-center justify-between hidden max-w-full gap-8 px-4 mx-auto select-none sm:flex'>
						<div className='absolute top-1/2 left-8 right-8 h-1 bg-[#ffd01f]/30 rounded-full -z-10'></div>
						{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
							<div
								key={day}
								className='flex flex-col items-center cursor-default group'
							>
								<div className='w-14 h-14 rounded-full border-4 border-[#ff0012] bg-[#000101] shadow-[0_0_12px_#ff0012] group-hover:scale-110 transition-transform flex items-center justify-center text-[#fefffe] font-semibold text-lg select-text'>
									{day}
								</div>
								<p className='mt-3 text-sm text-[#fefffe]/70 select-text'>
									6:00pm EST
								</p>
							</div>
						))}
					</div>

					{/* Timeline Mobile */}
					<div className='flex flex-col gap-4 sm:hidden'>
						{[
							"Monday",
							"Tuesday",
							"Wednesday",
							"Thursday",
							"Friday",
							"Saturday",
							"Sunday",
						].map((day) => (
							<div
								key={day}
								className='bg-[#000101]/60 rounded-xl border border-[#ffd01f] p-4 shadow-md flex justify-between items-center'
							>
								<span className='font-semibold text-[#ff0012]'>{day}</span>
								<span className='text-[#fefffe]/80'>7:30pm EST</span>
							</div>
						))}
					</div>

					<div className='flex justify-center mt-12'>
						<Button
							size='lg'
							className='bg-[#ff0012] hover:bg-[#a8000f] text-[#fefffe] shadow-lg transition'
							asChild
						>
							<a href='https://kick.com/Bomber' target='_blank' rel='noreferrer'>
								Watch Live on Kick
							</a>
						</Button>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}

export default HomePage;
