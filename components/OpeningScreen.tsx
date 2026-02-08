"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { COPY, ANIMALS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface OpeningScreenProps {
	onContinue: () => void;
}

export default function OpeningScreen({ onContinue }: OpeningScreenProps) {
	const [pigIntro, setPigIntro] = useState(true);
	const [pigStage, setPigStage] = useState<
		"initial" | "entering" | "staying" | "leaving"
	>("initial");
	const [bookOpened, setBookOpened] = useState(false);

	useEffect(() => {
		const initialTimer = setTimeout(() => {
			setPigStage("entering");
		}, 50);

		const enterTimer = setTimeout(() => {
			setPigStage("staying");
		}, 1550);

		const stayTimer = setTimeout(() => {
			setPigStage("leaving");
		}, 4550);

		const leaveTimer = setTimeout(() => {
			setPigIntro(false);
			setBookOpened(true);
		}, 8050);

		return () => {
			clearTimeout(initialTimer);
			clearTimeout(enterTimer);
			clearTimeout(stayTimer);
			clearTimeout(leaveTimer);
		};
	}, []);

	return (
		<div className="viewport-container page-background">
			{/* Pig Meme Intro Animation */}
			{pigIntro && (
				<div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none overflow-hidden">
					<div
						className={cn(
							"transition-all",
							pigStage === "initial" &&
								"translate-y-[200vh] scale-[0.2] opacity-0",
							pigStage === "entering" &&
								"translate-y-0 scale-100 opacity-100",
							pigStage === "staying" &&
								"translate-y-0 scale-100 opacity-100",
							pigStage === "leaving" &&
								"opacity-0 scale-[1.8] -translate-y-[200vh]",
						)}
						style={{
							transitionDuration:
								pigStage === "initial"
									? "0ms"
									: pigStage === "entering"
										? "1500ms"
										: pigStage === "staying"
											? "0ms"
											: pigStage === "leaving"
												? "3500ms"
												: "0ms",
							transitionTimingFunction:
								pigStage === "entering"
									? "cubic-bezier(0.34, 1.56, 0.64, 1)"
									: pigStage === "leaving"
										? "cubic-bezier(0.4, 0, 0.6, 1)"
										: "ease-out",
						}}
					>
						<div
							className={cn(
								"text-[120px] md:text-[180px] lg:text-[240px]",
								pigStage === "staying" && "animate-heartbeat",
							)}
						>
							🐷
						</div>
					</div>
				</div>
			)}

			{/* Floating background decorations */}
			<div className="fixed inset-0 pointer-events-none overflow-hidden">
				{/* Floating hearts */}
				<div className="absolute top-[10%] left-[15%] text-4xl opacity-30 animate-float">
					💕
				</div>
				<div className="absolute top-[20%] right-[20%] text-3xl opacity-25 animate-float animation-delay-200">
					💗
				</div>
				<div className="absolute bottom-[30%] left-[10%] text-5xl opacity-20 animate-float animation-delay-400">
					💖
				</div>
				<div className="absolute bottom-[15%] right-[15%] text-4xl opacity-30 animate-float animation-delay-600">
					✨
				</div>
				<div className="absolute top-[50%] left-[5%] text-3xl opacity-25 animate-float animation-delay-300">
					🌸
				</div>
				<div className="absolute top-[60%] right-[10%] text-4xl opacity-20 animate-float animation-delay-500">
					💘
				</div>

				{/* Glow blobs */}
				<div
					className="absolute w-96 h-96 rounded-full blur-3xl opacity-20 animate-float"
					style={{
						background:
							"radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%)",
						top: "10%",
						left: "10%",
					}}
				/>
				<div
					className="absolute w-80 h-80 rounded-full blur-3xl opacity-15 animate-float animation-delay-400"
					style={{
						background:
							"radial-gradient(circle, rgba(249, 168, 212, 0.5) 0%, transparent 70%)",
						top: "60%",
						right: "15%",
					}}
				/>
			</div>

			{!pigIntro && (
				<div className="book-container relative w-full max-w-4xl mx-auto z-10">
					<div
						className={cn(
							"relative w-full transition-all duration-1200 ease-out",
							bookOpened
								? "animate-book-open"
								: "opacity-0 scale-90",
						)}
					>
						{/* Main Book Cover */}
						<div className="relative bg-linear-to-br from-pink-950 via-rose-950 to-purple-950 rounded-3xl shadow-2xl border-4 border-pink-500/40 overflow-hidden">
							{/* Book cover decorative shine effect */}
							<div className="absolute inset-0 bg-linear-to-br from-pink-500/10 via-transparent to-transparent pointer-events-none" />

							{/* Content Container */}
							<div className="relative content-spacing">
								{/* Corner Decorations */}
								<div className="absolute top-4 left-4 md:top-6 md:left-6 text-3xl md:text-4xl opacity-0 animate-fade-in-up animation-delay-600">
									<span className="emoji-enhanced">
										{ANIMALS.loveLetter}
									</span>
								</div>
								<div className="absolute top-4 right-4 md:top-6 md:right-6 text-3xl md:text-4xl opacity-0 animate-fade-in-up animation-delay-700">
									<span className="emoji-enhanced animate-heartbeat">
										{ANIMALS.bigHeart}
									</span>
								</div>
								<div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-3xl md:text-4xl opacity-0 animate-fade-in-up animation-delay-600">
									<span className="emoji-enhanced">
										{ANIMALS.roses}
									</span>
								</div>
								<div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-3xl md:text-4xl opacity-0 animate-fade-in-up animation-delay-700">
									<span className="emoji-enhanced">
										{ANIMALS.cupid}
									</span>
								</div>

								{/* Main Content */}
								<div className="text-center element-gap flex flex-col items-center justify-center min-h-125 md:min-h-150">
									{/* Book Title */}
									<div className="space-y-4 md:space-y-6 opacity-0 animate-fade-in-up animation-delay-400">
										<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pink-200 chapter-heading text-glow leading-tight px-4">
											{COPY.opening.bookTitle}
										</h1>
										<p className="text-base md:text-lg lg:text-xl text-pink-300 italic font-light px-6 max-w-2xl mx-auto">
											{COPY.opening.bookSubtitle}
										</p>
									</div>

									{/* Heart Parade */}
									<div className="flex justify-center items-center gap-4 md:gap-6 my-8 md:my-10 opacity-0 animate-fade-in-up animation-delay-500">
										<span className="text-4xl md:text-5xl emoji-enhanced animate-float">
											{ANIMALS.roses}
										</span>
										<span className="text-5xl md:text-6xl emoji-enhanced animate-heartbeat">
											{ANIMALS.bigHeart}
										</span>
										<span className="text-4xl md:text-5xl emoji-enhanced animate-float animation-delay-200">
											{ANIMALS.cupid}
										</span>
									</div>

									{/* Main Message */}
									<div className="space-y-4 md:space-y-6 px-6 max-w-3xl mx-auto opacity-0 animate-fade-in-up animation-delay-600">
										<p className="text-xl md:text-2xl lg:text-3xl text-pink-100 font-light leading-relaxed text-content">
											{COPY.opening.title}
										</p>
										<p className="text-lg md:text-xl lg:text-2xl text-pink-300 italic leading-relaxed text-content">
											{COPY.opening.subtitle}
										</p>
									</div>

									{/* Animated Hearts */}
									<div className="flex justify-center gap-3 md:gap-4 my-6 md:my-8 opacity-0 animate-fade-in-up animation-delay-700">
										<span className="text-5xl md:text-6xl emoji-enhanced animate-float">
											{ANIMALS.heart}
										</span>
										<span className="text-5xl md:text-6xl emoji-enhanced animate-glow">
											{ANIMALS.sparkles}
										</span>
										<span className="text-5xl md:text-6xl emoji-enhanced animate-float animation-delay-300">
											{ANIMALS.pinkHeart}
										</span>
									</div>

									{/* Continue Button */}
									<div className="mt-6 md:mt-8 opacity-0 animate-fade-in-up animation-delay-800">
										<Button
											onClick={onContinue}
											className="modern-button bg-linear-to-r from-pink-600 via-rose-600 to-pink-600 hover:from-pink-500 hover:via-rose-500 hover:to-pink-500 text-white font-bold border-2 border-pink-400/50 hover:border-pink-300 shadow-xl hover:shadow-2xl transition-all duration-300"
										>
											<span className="relative z-10 flex items-center gap-2 text-lg md:text-xl">
												{COPY.opening.button}
												<span className="emoji-enhanced">
													{ANIMALS.book}
												</span>
											</span>
										</Button>
									</div>
								</div>
							</div>

							{/* Decorative bottom border */}
							<div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-pink-500/50 to-transparent" />
						</div>

						{/* Book shadow/spine effect */}
						<div className="absolute -bottom-2 left-4 right-4 h-2 bg-black/50 blur-sm rounded-full" />
					</div>
				</div>
			)}
		</div>
	);
}
