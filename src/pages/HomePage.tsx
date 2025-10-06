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

				{/* Promo Banners Section */}
				<section className='relative max-w-6xl px-6 py-12 mx-auto'>
					{/* Top 2 Promos Side by Side */}
					<div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
						{/* Promo 1 - Chicken.gg */}
						<div className='relative rounded-2xl overflow-hidden shadow-lg border-2 border-[#fc0c2b]'>
							<div className='absolute inset-0 bg-gradient-to-br from-[#0c0b30]/80 via-[#1a0011]/70 to-[#0c0b30]/80' />
							<div className='relative z-10 flex flex-col items-center justify-between gap-4 p-6 md:flex-row'>
								<div className='text-center md:text-left'>
									<h2 className='text-2xl md:text-3xl font-extrabold text-[#fc0c2b]'>
										5 FREE CASES
									</h2>
									<p className='mt-1 text-base font-semibold text-[#fff66d]'>
										Worth up to <span className='text-[#fc0c2b]'>10,000</span>
									</p>
									<p className='mt-2 text-xs text-[#ffffff]/80'>
										18+ T&C&apos;s Apply
									</p>
									<p className='mt-1 text-base font-semibold text-[#fff66d]'>
										lb <span className='text-[#fc0c2b]'>200c</span>
									</p>
									<p className='mt-2 font-bold text-[#ffffff]'>
										Use code:{" "}
										<span className='text-[#fc0c2b]'>DEGENBOMBER</span>
									</p>
									<a
										href='https://chicken.gg/r/DegenBomber'
										target='_blank'
										rel='noopener noreferrer'
										className='inline-block mt-4 px-5 py-2 bg-[#fc0c2b] text-black font-bold rounded-xl shadow-md hover:scale-105 hover:bg-[#ff2e4d] transition-transform text-sm'
									>
										Play Now
									</a>
								</div>
								<div className='w-[160px] md:w-[200px]'>
									<img
										src='https://static-cdn.jtvnw.net/jtv_user_pictures/e3f85f5e-1002-473d-bce4-2f354edb48d8-profile_banner-480.png'
										alt='Chicken Promo'
										className='object-cover w-full h-auto shadow-md rounded-xl'
									/>
								</div>
							</div>
						</div>

						{/* Promo 2 - Gamba */}
						<div className='relative rounded-2xl overflow-hidden shadow-lg border-2 border-[#00ffc6]'>
							<div className='absolute inset-0 bg-gradient-to-br from-[#0c0b30]/90 via-[#0d0033]/70 to-[#001a1a]/90' />
							<div className='relative z-10 flex flex-col items-center justify-between gap-4 p-6 md:flex-row'>
								<div className='text-center md:text-left'>
									<h2 className='text-2xl font-extrabold text-white md:text-3xl'>
										USE CODE <span className='text-[#00ffc6]'>bomber58</span>
									</h2>
									<div className='mt-2 space-y-1 text-sm text-white/90'>
										<p>
											🎯{" "}
											<span className='font-bold text-[#ffffff]'>1000 XP</span>
										</p>
										<p>
											💰{" "}
											<span className='font-bold text-[#ffffff]'>
												1% Rakeback Boost
											</span>
										</p>
										<p>
											🔥{" "}
											<span className='font-bold text-[#00ffc6]'>
												75% Commission Share
											</span>
										</p>
									</div>
									<a
										href='https://gamba.com/?c=Bomber58'
										target='_blank'
										rel='noopener noreferrer'
										className='inline-block mt-4 px-5 py-2 bg-[#00ffc6] text-black font-bold rounded-xl shadow-md hover:scale-105 hover:bg-[#00d9a8] transition-transform text-sm'
									>
										Sign Up
									</a>
								</div>
								<div className='w-[160px] md:w-[200px]'>
									<img
										src='https://static.casino.guru/pict/820559/7365_500x500_dark.svg?timestamp=1715744877000&imageDataId=871262'
										alt='Gamba Promo Banner'
										className='object-cover w-full h-auto shadow-md rounded-xl'
									/>
								</div>
							</div>
						</div>
					</div>

					{/* BlockBet Promo - Full Width & Big */}
					<div className='relative mt-10 rounded-3xl overflow-hidden shadow-2xl border-2 border-[#7cffb2]'>
						<div className='absolute inset-0 bg-gradient-to-br from-[#001a1a]/90 via-[#002b2b]/70 to-[#000000]/90' />
						<div className='relative z-10 flex flex-col-reverse items-center justify-between gap-10 p-8 md:flex-row md:gap-16'>
							{/* Text Section */}
							<div className='max-w-xl text-center md:text-left'>
								<h2 className='text-4xl md:text-5xl font-extrabold text-[#7cffb2] leading-tight'>
									BlockBet Exclusive Offer
								</h2>
								<p className='mt-4 text-lg text-[#fff66d] font-semibold'>
									Join the future of decentralized betting and claim{" "}
									<span className='text-[#7cffb2]'>exclusive rewards</span>!
								</p>
								<p className='mt-3 text-base text-[#ffffff]/80'>
									Use referral:{" "}
									<span className='font-bold text-[#7cffb2]'>DegenBomber</span>
								</p>

								<a
									href='https://www.blockbet.gg/share/v6/DegenBomber'
									target='_blank'
									rel='noopener noreferrer'
									className='inline-block mt-6 px-8 py-3 bg-[#7cffb2] text-black font-bold rounded-xl shadow-lg hover:scale-105 hover:bg-[#6af0a2] transition-transform text-lg'
								>
									Join Now
								</a>
							</div>

							{/* Video & Image Side */}
							<div className='w-full max-w-lg'>
								<div className='rounded-2xl overflow-hidden shadow-lg border border-[#7cffb2]/50 mb-4'>
									<iframe
										src='https://streamable.com/e/owx3ni?autoplay=1&muted=1'
										allow='autoplay; fullscreen'
										className='w-full aspect-video rounded-2xl'
										title='BlockBet Promo Video'
									></iframe>
								</div>
								<img
									src='https://i.ibb.co/jkXpdF2Q/Capture-d-cran-2025-10-06-193113.png'
									alt='BlockBet Promo'
									className='w-full h-auto rounded-2xl shadow-md border border-[#7cffb2]/50'
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
						{["Mon", "Tue", "Sun"].map((day) => (
							<div
								key={day}
								className='flex flex-col items-center cursor-default group'
							>
								<div className='w-14 h-14 rounded-full border-4 border-[#fc0c2b] bg-[#0c0b30] shadow-[0_0_12px_#fc0c2b] group-hover:scale-110 transition-transform flex items-center justify-center text-[#ffffff] font-semibold text-lg select-text'>
									{day}
								</div>
								<p className='mt-3 text-sm text-[#ffffff]/70 select-text'>
									8:30pm EST
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
