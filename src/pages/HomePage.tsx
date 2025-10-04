import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Dices, Gift, Users } from "lucide-react";
import GraphicalBackground from "@/components/GraphicalBackground";

function HomePage() {
	return (
		<div className='relative flex flex-col min-h-screen text-[#ffffff]'>
			<GraphicalBackground />
			<Navbar />

			<main className='relative z-10 flex-grow'>
				{/* Hero Section */}
				<section className='flex flex-col-reverse items-center justify-between max-w-6xl gap-16 px-6 py-32 mx-auto sm:flex-row sm:gap-24'>
					{/* Text Content */}
					<div className='max-w-xl text-center sm:text-left'>
						<h1 className='text-5xl sm:text-6xl font-extrabold leading-tight tracBomber-tight bg-gradient-to-r from-[#fc0c2b] via-[#8c7fa8] to-[#fc0c2b] bg-clip-text text-transparent drop-shadow-xl'>
							DegenBomber&apos;s <br /> Official Stream
						</h1>
						<div className='w-28 h-1 mt-6 rounded-full bg-[#fc0c2b] animate-pulse' />
						<p className='mt-6 text-lg sm:text-xl font-medium tracBomber-wide text-[#ffffff]/80'>
							Watch DegenBomber live on Kick — thrilling gambling streams,
							giveaways, and more.
						</p>
						<a
							href='https://kick.com/bomber58'
							target='_blank'
							rel='noopener noreferrer'
						>
							<button className='mt-8 px-6 py-3 bg-[#fc0c2b] text-black font-bold rounded-lg shadow-lg hover:scale-105 transition-transform'>
								Watch Now
							</button>
						</a>
					</div>

					{/* Video */}
					<div className='w-full max-w-xl aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-[#fff66d] hover:scale-105 transition-transform'>
						<iframe
							src='https://player.kick.com/bomber58'
							frameBorder='0'
							allowFullScreen
							title='DegenBomber Live Stream'
							className='w-full h-full'
						></iframe>
					</div>
				</section>

				{/* Promo Banner Section */}
				<section className='relative max-w-6xl px-6 py-16 mx-auto'>
					<div className='relative rounded-3xl overflow-hidden shadow-lg border-4 border-[#fc0c2b]'>
						<div className='absolute inset-0 bg-gradient-to-br from-[#0c0b30]/80 via-[#1a0011]/70 to-[#0c0b30]/80' />
						<div className='relative z-10 flex flex-col items-center justify-between gap-6 p-8 md:flex-row'>
							{/* Text */}
							<div className='text-center md:text-left'>
								<h2 className='text-4xl md:text-5xl font-extrabold text-[#fc0c2b]'>
									5 FREE CASES
								</h2>
								<p className='mt-2 text-lg md:text-xl font-semibold text-[#fff66d]'>
									Worth up to <span className='text-[#fc0c2b]'>10,000</span>
								</p>
								<p className='mt-4 text-sm text-[#ffffff]/80'>
									18+ T&C&apos;s Apply
								</p>
								<p className='mt-4 font-bold text-[#ffffff]'>
									Use code: <span className='text-[#fc0c2b]'>DEGENBOMBER</span>
								</p>
							</div>

							{/* Image */}
							<div className='w-full max-w-md md:max-w-lg'>
								<img
									src='https://static-cdn.jtvnw.net/jtv_user_pictures/e3f85f5e-1002-473d-bce4-2f354edb48d8-profile_banner-480.png'
									alt='5 Free Cases Promo'
									className='w-full h-auto shadow-xl rounded-2xl'
								/>
							</div>
						</div>
					</div>
				</section>

				{/* Features Section */}
				<section className='max-w-6xl px-6 py-16 mx-auto'>
					<h2 className='mb-12 text-4xl font-bold text-center text-[#ffffff]'>
						What We Offer
					</h2>
					<div className='grid grid-cols-1 gap-10 sm:grid-cols-3'>
						{[
							{
								icon: (
									<Dices className='w-12 h-12 text-[#fc0c2b] animate-pulse' />
								),
								title: "Exciting Gambling Streams",
								description:
									"Thrilling slots, casino games, and big wins live with DegenBomber .",
							},
							{
								icon: (
									<Users className='w-12 h-12 text-[#fff66d] animate-pulse' />
								),
								title: "Slot Call System",
								description:
									"Suggest slots for DegenBomber  to play and see your choices live.",
							},
							{
								icon: (
									<Gift className='w-12 h-12 text-[#fc0c2b] animate-pulse' />
								),
								title: "Regular Giveaways",
								description:
									"Win cash, gaming gear, and more through frequent giveaways.",
							},
						].map(({ icon, title, description }) => (
							<div
								key={title}
								className='flex flex-col items-center bg-[#0c0b30]/60 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-[#fff66d] hover:scale-[1.05] transition-transform cursor-default'
							>
								<div className='flex items-center justify-center w-20 h-20 rounded-full bg-[#0c0b30]/50 border-2 border-[#fc0c2b] mb-6'>
									{icon}
								</div>
								<h3 className='text-xl font-semibold mb-3 relative after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-14 after:h-[2px] after:bg-gradient-to-r after:from-[#fc0c2b] after:to-[#fff66d]'>
									{title}
								</h3>
								<p className='text-center text-[#ffffff]/80'>{description}</p>
							</div>
						))}
					</div>
				</section>

				{/* Schedule Section */}
				<section className='max-w-5xl px-6 py-16 mx-auto'>
					<h2 className='mb-8 text-4xl font-bold text-center text-[#ffffff]'>
						📅 Stream Schedule
					</h2>
					<p className='max-w-xl mx-auto mb-10 text-center text-[#ffffff]/70'>
						DegenBomber goes live <strong>every day</strong> — join anytime!
					</p>

					{/* Timeline Desktop */}
					<div className='relative items-center justify-between hidden max-w-full gap-8 px-4 mx-auto select-none sm:flex'>
						<div className='absolute top-1/2 left-8 right-8 h-1 bg-[#fff66d]/30 rounded-full -z-10'></div>
						{["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
							<div
								key={day}
								className='flex flex-col items-center cursor-default group'
							>
								<div className='w-14 h-14 rounded-full border-4 border-[#fc0c2b] bg-[#0c0b30] shadow-[0_0_12px_#fc0c2b] group-hover:scale-110 transition-transform flex items-center justify-center text-[#ffffff] font-semibold text-lg select-text'>
									{day}
								</div>
								<p className='mt-3 text-sm text-[#ffffff]/70 select-text'>
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
								className='bg-[#0c0b30]/60 rounded-xl border border-[#fff66d] p-4 shadow-md flex justify-between items-center'
							>
								<span className='font-semibold text-[#fc0c2b]'>{day}</span>
								<span className='text-[#ffffff]/80'>7:30pm EST</span>
							</div>
						))}
					</div>

					<div className='flex justify-center mt-12'>
						<Button
							size='lg'
							className='bg-[#fc0c2b] hover:bg-[#a8000f] text-[#ffffff] shadow-lg transition'
							asChild
						>
							<a
								href='https://kick.com/bomber58'
								target='_blank'
								rel='noreferrer'
							>
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
