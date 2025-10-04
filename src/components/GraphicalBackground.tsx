import { useEffect, useRef } from "react";

export function GraphicalBackground() {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		const resizeCanvas = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		};
		resizeCanvas();
		window.addEventListener("resize", resizeCanvas);

		// Load T-shirt images
		const tshirtImages: HTMLImageElement[] = [];
		const urls = [
			"https://i.ibb.co/mCZHRLzX/Capture-d-cran-2025-10-04-171008-removebg-preview.png",
			"https://i.ibb.co/LDxz9MzH/Capture-d-cran-2025-10-04-170801-removebg-preview.png",
		];
		urls.forEach((url) => {
			const img = new Image();
			img.src = url;
			tshirtImages.push(img);
		});

		// Particles (glowing dots)
		interface Particle {
			x: number;
			y: number;
			size: number;
			speedX: number;
			speedY: number;
			color: string;
			pulse: number;
		}

		const particles: Particle[] = [];
		const colors = ["#fc0c2b", "#0c0b30", "#ffffff", "#fff66d"];
		for (let i = 0; i < 80; i++) {
			const color = colors[Math.floor(Math.random() * colors.length)];
			particles.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				size: Math.random() * 3 + 2,
				speedX: (Math.random() - 0.5) * 0.2,
				speedY: (Math.random() - 0.5) * 0.2,
				color,
				pulse: Math.random() * Math.PI * 2,
			});
		}

		// Floating T-shirts with smooth sine/cos motion
		interface FloatingItem {
			x: number;
			y: number;
			baseX: number;
			baseY: number;
			size: number;
			speedX: number;
			speedY: number;
			rotation: number;
			rotationSpeed: number;
			layer: number;
			opacity: number;
			img: HTMLImageElement;
			offsetX: number;
			offsetY: number;
		}

		const shirts: FloatingItem[] = [];
		for (let i = 0; i < 20; i++) {
			const layer = Math.floor(Math.random() * 3);
			const baseSize = [60, 100, 140][layer];
			const img = tshirtImages[Math.floor(Math.random() * tshirtImages.length)];
			const baseX = Math.random() * canvas.width;
			const baseY = Math.random() * canvas.height;
			shirts.push({
				x: baseX,
				y: baseY,
				baseX,
				baseY,
				size: baseSize + Math.random() * 50,
				speedX: (Math.random() - 0.5) * 0.05,
				speedY: (Math.random() - 0.5) * 0.05,
				rotation: Math.random() * Math.PI * 2,
				rotationSpeed: (Math.random() - 0.5) * 0.002,
				layer,
				opacity: 0.5 + layer * 0.3,
				img,
				offsetX: Math.random() * 50,
				offsetY: Math.random() * 30,
			});
		}

		// Lightning strikes
		interface Lightning {
			segments: { x: number; y: number }[];
			alpha: number;
			life: number;
		}
		const lightnings: Lightning[] = [];

		const generateLightning = () => {
			const strikes = 1 + Math.floor(Math.random() * 3);
			for (let s = 0; s < strikes; s++) {
				const startX = Math.random() * canvas.width;
				const segments = [];
				const segmentCount = 10 + Math.floor(Math.random() * 5);
				let x = startX;
				let y = 0;
				for (let i = 0; i < segmentCount; i++) {
					x += (Math.random() - 0.5) * 50;
					y += canvas.height / segmentCount;
					segments.push({ x, y });
				}
				lightnings.push({ segments, alpha: 1, life: 5 + Math.random() * 5 });
			}
			setTimeout(generateLightning, 1000 + Math.random() * 2000);
		};
		generateLightning();

		let time = 0;
		let animationFrameId: number;

		const render = () => {
			time += 0.02;

			// Dark radial background
			const gradient = ctx.createRadialGradient(
				canvas.width / 2,
				canvas.height / 2,
				0,
				canvas.width / 2,
				canvas.height / 2,
				canvas.width
			);
			gradient.addColorStop(0, "#0c0b30");
			gradient.addColorStop(1, "#000000");
			ctx.fillStyle = gradient;
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			// Glowing particles
			particles.forEach((p) => {
				p.pulse += 0.05;
				const glow = Math.sin(p.pulse) * 0.5 + 0.5;
				p.x += p.speedX;
				p.y += p.speedY;
				if (p.x > canvas.width) p.x = 0;
				if (p.x < 0) p.x = canvas.width;
				if (p.y > canvas.height) p.y = 0;
				if (p.y < 0) p.y = canvas.height;

				ctx.beginPath();
				ctx.arc(p.x, p.y, p.size + glow, 0, Math.PI * 2);
				ctx.fillStyle = p.color;
				ctx.shadowBlur = 15 * glow;
				ctx.shadowColor = p.color;
				ctx.fill();
			});

			// Floating T-shirts with smooth drift
			shirts.forEach((shirt, idx) => {
				shirt.x = shirt.baseX + Math.sin(time + idx) * shirt.offsetX;
				shirt.y = shirt.baseY + Math.cos(time + idx) * shirt.offsetY;
				shirt.rotation += shirt.rotationSpeed;

				ctx.save();
				const nearLightning = lightnings.some((l) =>
					l.segments.some(
						(seg) =>
							Math.abs(seg.x - shirt.x) < 100 && Math.abs(seg.y - shirt.y) < 100
					)
				);
				ctx.shadowColor = nearLightning ? "#fc0c2b" : "#fff66d";
				ctx.shadowBlur = nearLightning ? 30 : 20;
				ctx.globalAlpha = shirt.opacity;
				ctx.translate(shirt.x + shirt.size / 2, shirt.y + shirt.size / 2);
				ctx.rotate(shirt.rotation);
				ctx.drawImage(
					shirt.img,
					-shirt.size / 2,
					-shirt.size / 2,
					shirt.size,
					shirt.size
				);
				ctx.restore();
			});

			// Draw lightning
			lightnings.forEach((l, idx) => {
				ctx.strokeStyle = `rgba(252,12,43,${l.alpha})`;
				ctx.lineWidth = 2;
				ctx.shadowBlur = 20;
				ctx.shadowColor = "#fc0c2b";
				ctx.beginPath();
				ctx.moveTo(l.segments[0].x, l.segments[0].y);
				for (let i = 1; i < l.segments.length; i++) {
					ctx.lineTo(l.segments[i].x, l.segments[i].y);
				}
				ctx.stroke();
				l.life--;
				l.alpha -= 0.1;
				if (l.life <= 0) lightnings.splice(idx, 1);
			});

			animationFrameId = requestAnimationFrame(render);
		};

		Promise.all(
			tshirtImages.map((img) => new Promise((res) => (img.onload = res)))
		).then(() => {
			render();
		});

		return () => {
			window.removeEventListener("resize", resizeCanvas);
			cancelAnimationFrame(animationFrameId);
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className='fixed top-0 left-0 w-full h-full pointer-events-none -z-10'
		/>
	);
}

export default GraphicalBackground;
