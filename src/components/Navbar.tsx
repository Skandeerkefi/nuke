import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Dices, Crown, Gift, Users, LogIn, User, LogOut } from "lucide-react";
import useMediaQuery from "@/hooks/use-media-query";
import { useAuthStore } from "@/store/useAuthStore";

export function Navbar() {
	const location = useLocation();
	const isMobile = useMediaQuery("(max-width: 768px)");
	const [isOpen, setIsOpen] = useState(false);
	const [isLive, setIsLive] = useState(false);
	const [viewerCount, setViewerCount] = useState<number | null>(null);
	const { user, logout } = useAuthStore();

	useEffect(() => {
		setIsOpen(false);
	}, [location, isMobile]);

	useEffect(() => {
		const fetchLiveStatus = async () => {
			try {
				const res = await fetch("https://kick.com/api/v2/channels/bomber58");
				const data = await res.json();
				if (data.livestream) {
					setIsLive(true);
					setViewerCount(data.livestream.viewer_count);
				} else {
					setIsLive(false);
					setViewerCount(null);
				}
			} catch (err) {
				console.error("Error fetching live status", err);
			}
		};
		fetchLiveStatus();
		const interval = setInterval(fetchLiveStatus, 60000);
		return () => clearInterval(interval);
	}, []);

	const menuItems = [
		{ path: "/", name: "Home", icon: <Dices className='w-5 h-5' /> },
		{
			path: "/chicken",
			name: "Leaderboard",
			icon: <Crown className='w-5 h-5' />,
		},
		{
			path: "/slot-calls",
			name: "Slot Calls",
			icon: <Users className='w-5 h-5' />,
		},
		{
			path: "/giveaways",
			name: "Giveaways",
			icon: <Gift className='w-5 h-5' />,
		},
	];

	return (
		<>
			{/* Fixed Navbar */}
			<nav className='fixed top-0 w-full z-50 backdrop-blur-md bg-[#0c0b30]/90 border-b border-[#fc0c2b]/50 shadow-xl h-20'>
				<div className='container relative flex items-center justify-between h-full px-6 py-4 mx-auto'>
					{/* Logo */}
					<Link to='/' className='flex items-center space-x-3 select-none'>
						<img
							src='https://i.ibb.co/LDxz9MzH/Capture-d-cran-2025-10-04-170801-removebg-preview.png'
							alt='Bomber Logo'
							className='w-12 h-12 rounded-full border-2 border-[#fc0c2b] shadow-[0_0_15px_rgba(252,12,43,0.7)] object-cover'
						/>
						<span className='text-3xl font-bold italic tracBomber-wider text-[#fc0c2b] [text-shadow:0_0_12px_rgba(252,12,43,0.7)]'>
							Degen<span className='text-[#ffffff]'>Bomber</span>
						</span>
					</Link>

					{/* Desktop Menu */}
					{!isMobile && (
						<ul className='flex space-x-12 font-semibold text-[#ffffff] items-center'>
							{menuItems.map((item) => (
								<li key={item.path} className='relative group'>
									<Link
										to={item.path}
										className={`flex items-center space-x-2 px-2 py-1 transition-all duration-300 ${
											location.pathname === item.path
												? "text-[#fc0c2b]"
												: "hover:text-[#fff66d]"
										}`}
									>
										{item.icon}
										<span>{item.name}</span>
										<span
											className={`absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#fc0c2b] to-[#fff66d] rounded transition-all duration-300 ${
												location.pathname === item.path
													? "scale-x-100"
													: "scale-x-0 group-hover:scale-x-100"
											}`}
										/>
									</Link>
								</li>
							))}
						</ul>
					)}

					{/* Right side controls */}
					<div className='flex items-center space-x-4'>
						{/* Live Status */}
						<div
							className={`px-4 py-1 rounded-full text-sm font-bold select-none flex items-center gap-1 ${
								isLive
									? "bg-[#fc0c2b]/90 text-[#ffffff] shadow-[0_0_15px_rgba(252,12,43,0.6)] animate-pulse"
									: "bg-[#fff66d]/20 text-[#ffffff]/80"
							}`}
							title={isLive ? "Currently Live" : "Offline"}
						>
							{isLive ? (
								<>
									<span role='img' aria-label='Live'>
										🔴
									</span>
									LIVE {viewerCount !== null ? `(${viewerCount})` : ""}
								</>
							) : (
								"Offline"
							)}
						</div>

						{/* Desktop User controls */}
						{!isMobile && (
							<>
								{user ? (
									<div className='relative group'>
										<button className='flex items-center space-x-2 bg-[#fc0c2b]/80 hover:bg-[#d40a24] px-4 py-1.5 rounded-lg text-[#ffffff] font-semibold transition shadow-[0_0_8px_rgba(252,12,43,0.7)]'>
											<User className='w-5 h-5' />
											<span>{user.username}</span>
										</button>
										<div className='absolute right-0 mt-2 w-44 bg-[#0c0b30]/90 backdrop-blur-md rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity duration-300'>
											<button
												onClick={logout}
												className='w-full text-left px-4 py-2 hover:bg-[#fc0c2b] hover:text-[#ffffff] transition flex items-center gap-2 rounded-md'
											>
												<LogOut className='w-5 h-5' /> Logout
											</button>
										</div>
									</div>
								) : (
									<>
										<Link
											to='/login'
											className='flex items-center space-x-2 border border-[#fc0c2b] text-[#fc0c2b] hover:bg-[#fc0c2b] hover:text-[#ffffff] px-4 py-1.5 rounded-lg font-semibold transition shadow-[0_0_8px_rgba(252,12,43,0.6)]'
										>
											<LogIn className='w-5 h-5' /> Login
										</Link>
										<Link
											to='/signup'
											className='text-[#ffffff] font-semibold hover:text-[#fff66d] transition'
										>
											Sign Up
										</Link>
									</>
								)}
							</>
						)}
					</div>
				</div>
			</nav>

			{/* Mobile Menu */}
			{isMobile && (
				<div
					className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-md flex flex-col items-center justify-start pt-24 space-y-8 text-lg font-semibold text-[#fefffe] transform transition-transform duration-300 ${
						isOpen ? "translate-x-0" : "-translate-x-full"
					}`}
				>
					{menuItems.map((item) => (
						<Link
							key={item.path}
							to={item.path}
							className={`flex items-center space-x-3 ${
								location.pathname === item.path
									? "text-[#ff0012]"
									: "hover:text-[#ffd01f]"
							}`}
						>
							{item.icon}
							<span>{item.name}</span>
						</Link>
					))}

					{/* User controls on mobile */}
					{user ? (
						<button
							onClick={logout}
							className='flex items-center space-x-2 bg-[#ff0012] px-4 py-2 rounded-lg text-white'
						>
							<LogOut className='w-5 h-5' /> <span>Logout</span>
						</button>
					) : (
						<>
							<Link
								to='/login'
								className='flex items-center space-x-2 border border-[#ff0012] text-[#ff0012] hover:bg-[#ff0012] hover:text-white px-4 py-2 rounded-lg'
							>
								<LogIn className='w-5 h-5' /> Login
							</Link>
							<Link to='/signup' className='text-white hover:text-[#ffd01f]'>
								Sign Up
							</Link>
						</>
					)}
				</div>
			)}

			{/* Spacer */}
			<div className='h-20'></div>
		</>
	);
}
