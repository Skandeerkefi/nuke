import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { FaKickstarterK } from "react-icons/fa"; // Kick icon approximation
import { FaInstagram, FaDiscord, FaXTwitter, FaYoutube } from "react-icons/fa6"; // Socials

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='bg-[#090926] border-t border-[#1a1a1d] text-[#ffffff]'>
			<div className='container px-6 py-12 mx-auto'>
				<div className='grid grid-cols-1 gap-10 md:grid-cols-3'>
					{/* About */}
					<div>
						<h3 className='mb-3 text-lg font-bold text-[#ffffff]'>Nuke</h3>
						<p className='text-sm text-[#ffffff]/70'>
							Join Nuke&apos;s community for exciting gambling streams,
							giveaways, and more. Use affiliate code{" "}
							<span className='font-semibold text-[#fc0c2b]'>DegenBomber</span>{" "}
							on Chicken.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h3 className='mb-3 text-lg font-bold text-[#ffffff]'>Links</h3>
						<div className='grid grid-cols-2 gap-2'>
							{[
								{ to: "/", label: "Home" },
								{ to: "/chicken", label: "Leaderboard" },
								{ to: "/", label: "Terms & Conditions" },
								{ to: "/", label: "Privacy Policy" },
							].map(({ to, label }) => (
								<Link
									key={label}
									to={to}
									className='text-sm text-[#ffffff]/70 hover:text-[#fc0c2b] transition-colors'
								>
									{label}
								</Link>
							))}
						</div>
					</div>

					{/* Social */}
					<div>
						<h3 className='mb-3 text-lg font-bold text-[#ffffff]'>Connect</h3>
						<div className='flex gap-3'>
							{[
								{
									href: "https://kick.com/bomber58",
									icon: <FaKickstarterK className='w-5 h-5' />,
								},
								{
									href: "https://x.com/degenbomber?s=11&t=qhOpEt37APnwuOhn6QDuXQ",
									icon: <FaXTwitter className='w-5 h-5' />,
								},
								{
									href: "https://discord.gg/kkU5Hewxqm",
									icon: <FaDiscord className='w-5 h-5' />,
								},
								{
									href: "https://www.instagram.com/degen_bomber?igsh=YWNkMmNwcHlmdmw5&utm_source=qr",
									icon: <FaInstagram className='w-5 h-5' />,
								},
								{
									href: "https://www.youtube.com/@DegenBomber",
									icon: <FaYoutube className='w-5 h-5' />,
								},
							].map(({ href, icon }, i) => (
								<a
									key={i}
									href={href}
									target='_blank'
									rel='noreferrer'
									className='flex items-center justify-center w-9 h-9 rounded-full bg-[#111] text-[#ffffff] transition-all hover:bg-[#fc0c2b] hover:scale-110'
								>
									{icon}
								</a>
							))}
						</div>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className='pt-6 mt-12 border-t border-[#1a1a1d] text-center text-sm text-[#ffffff]/60'>
					<p className='flex flex-wrap items-center justify-center gap-1'>
						© {currentYear} Bomber. Made with
						<Heart className='w-3 h-3 mx-1 text-[#fc0c2b]' />
						for the community by{" "}
						<a
							href='https://www.linkedin.com/in/skander-kefi/'
							target='_blank'
							rel='noreferrer'
							className='font-medium text-[#ffffff] hover:text-[#fc0c2b] transition-colors'
						>
							Skander
						</a>
					</p>
				</div>
			</div>
		</footer>
	);
}
