"use client";

import { motion } from "framer-motion";

// Particle types for variety
const PARTICLES = [
	{ emoji: "💕", size: 20, color: "#ec4899" },
	{ emoji: "💗", size: 18, color: "#f472b6" },
	{ emoji: "✨", size: 16, color: "#fbbf24" },
	{ emoji: "🌸", size: 22, color: "#f9a8d4" },
	{ emoji: "💖", size: 19, color: "#db2777" },
	{ emoji: "⭐", size: 15, color: "#fcd34d" },
];

// Generate random particles with unique positions
const generateParticles = (count: number) => {
	return Array.from({ length: count }, (_, i) => {
		const particle = PARTICLES[i % PARTICLES.length];
		return {
			id: i,
			emoji: particle.emoji,
			size: particle.size,
			x: Math.random() * 100,
			delay: Math.random() * 5,
			duration: 8 + Math.random() * 4,
		};
	});
};

interface FloatingBackgroundProps {
	particleCount?: number;
	showGlowBlobs?: boolean;
}

export default function FloatingBackground({
	particleCount = 20,
	showGlowBlobs = true,
}: FloatingBackgroundProps) {
	const particles = generateParticles(particleCount);

	return (
		<div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
			{/* Animated glow blobs */}
			{showGlowBlobs && (
				<>
					<motion.div
						className="absolute w-96 h-96 rounded-full blur-3xl opacity-30"
						style={{
							background:
								"radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%)",
							top: "10%",
							left: "10%",
						}}
						animate={{
							x: [0, 50, 0],
							y: [0, 30, 0],
							scale: [1, 1.2, 1],
						}}
						transition={{
							duration: 20,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					/>
					<motion.div
						className="absolute w-80 h-80 rounded-full blur-3xl opacity-25"
						style={{
							background:
								"radial-gradient(circle, rgba(249, 168, 212, 0.5) 0%, transparent 70%)",
							top: "60%",
							right: "15%",
						}}
						animate={{
							x: [0, -40, 0],
							y: [0, -50, 0],
							scale: [1, 1.3, 1],
						}}
						transition={{
							duration: 25,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					/>
					<motion.div
						className="absolute w-72 h-72 rounded-full blur-3xl opacity-20"
						style={{
							background:
								"radial-gradient(circle, rgba(244, 114, 182, 0.4) 0%, transparent 70%)",
							bottom: "20%",
							left: "50%",
						}}
						animate={{
							x: [0, 60, 0],
							y: [0, -40, 0],
							scale: [1, 1.15, 1],
						}}
						transition={{
							duration: 22,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					/>
				</>
			)}

			{/* Floating particles */}
			<div className="absolute inset-0">
				{particles.map((particle) => (
					<motion.div
						key={particle.id}
						initial={{ y: "110vh", opacity: 0 }}
						animate={{
							y: "-10vh",
							opacity: [0, 1, 1, 0],
							rotate: [0, 360],
							x: [0, 20, -20, 0],
						}}
						transition={{
							duration: particle.duration,
							delay: particle.delay,
							repeat: Infinity,
							ease: "linear",
						}}
						style={{
							position: "absolute",
							left: `${particle.x}%`,
							fontSize: `${particle.size}px`,
							filter: "drop-shadow(0 2px 4px rgba(236, 72, 153, 0.3))",
						}}
					>
						{particle.emoji}
					</motion.div>
				))}
			</div>

			{/* Decorative SVG hearts */}
			<svg
				className="absolute inset-0 w-full h-full opacity-5"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<pattern
						id="hearts"
						x="0"
						y="0"
						width="200"
						height="200"
						patternUnits="userSpaceOnUse"
					>
						<path
							d="M100,30 C90,10 70,10 60,25 C50,10 30,10 20,30 C10,50 20,70 60,100 C100,70 110,50 100,30"
							fill="rgba(236, 72, 153, 0.1)"
						/>
					</pattern>
				</defs>
				<rect width="100%" height="100%" fill="url(#hearts)" />
			</svg>

			{/* Corner decorations */}
			<div className="absolute top-4 left-4 md:top-8 md:left-8">
				<motion.svg
					width="60"
					height="60"
					viewBox="0 0 60 60"
					animate={{ rotate: 360 }}
					transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
				>
					<circle
						cx="30"
						cy="30"
						r="25"
						fill="none"
						stroke="#f9a8d4"
						strokeWidth="2"
						strokeDasharray="4 4"
						opacity="0.4"
					/>
					<circle cx="30" cy="30" r="15" fill="#ec4899" opacity="0.3" />
				</motion.svg>
			</div>
			<div className="absolute top-4 right-4 md:top-8 md:right-8">
				<motion.svg
					width="60"
					height="60"
					viewBox="0 0 60 60"
					animate={{ rotate: -360 }}
					transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
				>
					<path
						d="M30,10 L35,20 L45,22 L37,30 L40,40 L30,35 L20,40 L23,30 L15,22 L25,20 Z"
						fill="#fbbf24"
						opacity="0.4"
					/>
				</motion.svg>
			</div>
		</div>
	);
}
