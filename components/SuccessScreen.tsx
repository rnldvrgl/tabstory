"use client";

import { COPY, ANIMALS } from "@/lib/constants";

// Floating emojis configuration
const FLOATING_EMOJIS = [
	{ id: 0, emoji: "💝", left: "10%", delay: "0ms", duration: "4s" },
	{ id: 1, emoji: "❤️", left: "90%", delay: "200ms", duration: "3.5s" },
	{ id: 2, emoji: "💕", left: "25%", delay: "400ms", duration: "4.2s" },
	{ id: 3, emoji: "💖", left: "75%", delay: "600ms", duration: "3.8s" },
	{ id: 4, emoji: "🌹", left: "50%", delay: "100ms", duration: "4.5s" },
	{ id: 5, emoji: "✨", left: "15%", delay: "300ms", duration: "3.6s" },
	{ id: 6, emoji: "💗", left: "85%", delay: "500ms", duration: "4.1s" },
	{ id: 7, emoji: "💘", left: "40%", delay: "700ms", duration: "3.9s" },
	{ id: 8, emoji: "🎀", left: "65%", delay: "800ms", duration: "4.3s" },
	{ id: 9, emoji: "✨", left: "30%", delay: "200ms", duration: "3.7s" },
	{ id: 10, emoji: "💌", left: "80%", delay: "400ms", duration: "4s" },
	{ id: 11, emoji: "🌹", left: "20%", delay: "600ms", duration: "4.4s" },
	{ id: 12, emoji: "❤️", left: "55%", delay: "100ms", duration: "4.6s" },
	{ id: 13, emoji: "💕", left: "70%", delay: "300ms", duration: "3.8s" },
	{ id: 14, emoji: "💝", left: "35%", delay: "500ms", duration: "4.2s" },
];

export default function SuccessScreen() {
	return (
		<div className="viewport-container page-background">
			{/* Floating Celebration Emojis */}
			<div className="fixed inset-0 pointer-events-none overflow-hidden">
				{FLOATING_EMOJIS.map((item) => (
					<div
						key={item.id}
						className="absolute animate-float opacity-0"
						style={{
							left: item.left,
							animationDelay: item.delay,
							animationDuration: item.duration,
							animationIterationCount: "infinite",
							top: "110%",
							animation: `floatUp ${item.duration} linear ${item.delay} infinite`,
						}}
					>
						<span className="text-4xl emoji-enhanced">
							{item.emoji}
						</span>
					</div>
				))}

				{/* Large glow blobs for celebration */}
				<div
					className="absolute w-[600px] h-[600px] rounded-full blur-3xl opacity-20 animate-float"
					style={{
						background:
							"radial-gradient(circle, rgba(236, 72, 153, 0.6) 0%, transparent 70%)",
						top: "20%",
						left: "20%",
					}}
				/>
				<div
					className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20 animate-float animation-delay-400"
					style={{
						background:
							"radial-gradient(circle, rgba(249, 168, 212, 0.7) 0%, transparent 70%)",
						bottom: "15%",
						right: "25%",
					}}
				/>
			</div>

			{/* Success Book Page */}
			<div className="w-full max-w-4xl mx-auto z-10">
				<div className="book-page animate-page-flip soft-glow">
					<div className="book-content">
						{/* Chapter Title */}
						<div className="text-center mb-8 md:mb-10 opacity-0 animate-fade-in-up animation-delay-500">
							<p className="chapter-heading text-4xl md:text-5xl lg:text-6xl text-pink-400 text-glow">
								{COPY.success.title}
							</p>
						</div>

						{/* Main Heart Celebration */}
						<div className="flex justify-center gap-4 md:gap-6 mb-10 md:mb-12 opacity-0 animate-fade-in-up animation-delay-600">
							<span className="text-6xl md:text-7xl lg:text-8xl emoji-enhanced animate-float">
								{ANIMALS.roses}
							</span>
							<span className="text-7xl md:text-8xl lg:text-9xl emoji-enhanced animate-heartbeat">
								{ANIMALS.bigHeart}
							</span>
							<span className="text-6xl md:text-7xl lg:text-8xl emoji-enhanced animate-float animation-delay-300">
								{ANIMALS.roses}
							</span>
						</div>

						{/* Success Messages */}
						<div className="text-center space-y-6 md:space-y-8 mb-10 md:mb-12 px-4">
							{/* Main Success Title */}
							<div className="opacity-0 animate-fade-in-up animation-delay-700">
								<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pink-100 leading-tight max-w-4xl mx-auto">
									{COPY.success.subtitle}
								</h2>
							</div>

							{/* Success Message */}
							<div className="opacity-0 animate-fade-in-up animation-delay-800">
								<p className="text-xl md:text-2xl lg:text-3xl text-pink-200 italic font-light text-content max-w-3xl mx-auto">
									{COPY.success.message}
								</p>
							</div>

							{/* Footer Message */}
							<div className="opacity-0 animate-fade-in-up animation-delay-800">
								<p className="text-lg md:text-xl text-pink-300 text-content max-w-3xl mx-auto">
									{COPY.success.footer}
								</p>
							</div>
						</div>

						{/* Celebration Meme */}
						{COPY.success.finalMeme && (
							<div className="opacity-0 animate-fade-in-up animation-delay-800">
								<div className="meme-container max-w-md mx-auto">
									<img
										src={COPY.success.finalMeme}
										alt="Celebration!"
										className="w-full h-auto rounded-xl"
									/>
								</div>
							</div>
						)}

						{/* Central Floating Heart */}
						<div className="flex justify-center mb-10 md:mb-12 opacity-0 animate-fade-in-up animation-delay-800">
							<span className="text-7xl md:text-8xl emoji-enhanced animate-float">
								{ANIMALS.heart}
							</span>
						</div>

						{/* Final Celebration Message */}
						<div className="text-center mb-10 opacity-0 animate-fade-in-up animation-delay-800">
							<p className="text-3xl md:text-4xl lg:text-5xl font-bold text-pink-300 chapter-heading text-glow animate-heartbeat">
								{COPY.success.celebration}
							</p>
						</div>

						{/* Bottom Heart Party */}
						<div className="flex justify-center gap-3 md:gap-4 text-4xl md:text-5xl flex-wrap opacity-0 animate-fade-in-up animation-delay-800">
							<span className="emoji-enhanced animate-float">
								{ANIMALS.heartEyes}
							</span>
							<span className="emoji-enhanced animate-glow">
								{ANIMALS.sparkles}
							</span>
							<span className="emoji-enhanced animate-float animation-delay-200">
								{ANIMALS.kissingHeart}
							</span>
							<span className="emoji-enhanced animate-glow animation-delay-300">
								{ANIMALS.sparkles}
							</span>
							<span className="emoji-enhanced animate-heartbeat">
								{ANIMALS.cupid}
							</span>
							<span className="emoji-enhanced animate-glow animation-delay-400">
								{ANIMALS.fire}
							</span>
						</div>

						{/* Final Page Marker */}
						<div className="text-center mt-12 text-pink-400 italic text-xl md:text-2xl font-bold chapter-heading opacity-0 animate-fade-in-up animation-delay-800">
							~ The End... and The Beginning ~
						</div>
					</div>
				</div>
			</div>

			{/* CSS for floating up animation */}
			<style jsx>{`
				@keyframes floatUp {
					0% {
						transform: translateY(0) rotate(0deg);
						opacity: 0;
					}
					10% {
						opacity: 1;
					}
					90% {
						opacity: 1;
					}
					100% {
						transform: translateY(-220vh) rotate(360deg);
						opacity: 0;
					}
				}
			`}</style>
		</div>
	);
}
