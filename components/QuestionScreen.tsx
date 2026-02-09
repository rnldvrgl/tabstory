"use client";

import { Button } from "@/components/ui/button";
import { COPY, ANIMALS } from "@/lib/constants";

interface QuestionScreenProps {
	onAnswer: () => void;
}

export default function QuestionScreen({ onAnswer }: QuestionScreenProps) {
	return (
		<div className="viewport-container page-background">
			{/* Floating decorations - more prominent for THE question */}
			<div className="fixed inset-0 pointer-events-none overflow-hidden">
				<div className="absolute top-[10%] left-[8%] text-5xl opacity-30 animate-float">
					💕
				</div>
				<div className="absolute top-[15%] right-[10%] text-4xl opacity-35 animate-float animation-delay-200">
					💖
				</div>
				<div className="absolute bottom-[15%] left-[12%] text-5xl opacity-30 animate-float animation-delay-400">
					💗
				</div>
				<div className="absolute bottom-[20%] right-[8%] text-4xl opacity-35 animate-float animation-delay-300">
					💝
				</div>
				<div className="absolute top-[50%] left-[5%] text-4xl opacity-25 animate-float animation-delay-500">
					🌹
				</div>
				<div className="absolute top-[40%] right-[5%] text-4xl opacity-25 animate-float animation-delay-600">
					✨
				</div>

				{/* Larger glow blobs for dramatic effect */}
				<div
					className="absolute size-125 rounded-full blur-3xl opacity-20 animate-float"
					style={{
						background:
							"radial-gradient(circle, rgba(236, 72, 153, 0.5) 0%, transparent 70%)",
						top: "15%",
						left: "15%",
					}}
				/>
				<div
					className="absolute size-112.5 rounded-full blur-3xl opacity-20 animate-float animation-delay-400"
					style={{
						background:
							"radial-gradient(circle, rgba(249, 168, 212, 0.6) 0%, transparent 70%)",
						bottom: "20%",
						right: "20%",
					}}
				/>
			</div>

			{/* Book Page Container - Special styling for THE question */}
			<div className="w-full max-w-5xl mx-auto z-10">
				<div className="book-page animate-page-flip soft-glow">
					<div className="book-content">
						{/* Floating corner hearts */}
						<div className="absolute -top-6 -left-6 md:-top-8 md:-left-8 text-5xl md:text-6xl opacity-0 animate-fade-in-up animation-delay-300">
							<span className="emoji-enhanced animate-float">
								💕
							</span>
						</div>
						<div className="absolute -top-6 -right-6 md:-top-8 md:-right-8 text-5xl md:text-6xl opacity-0 animate-fade-in-up animation-delay-400">
							<span className="emoji-enhanced animate-float animation-delay-200">
								💖
							</span>
						</div>
						<div className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 text-5xl md:text-6xl opacity-0 animate-fade-in-up animation-delay-500">
							<span className="emoji-enhanced animate-float animation-delay-400">
								💗
							</span>
						</div>
						<div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 text-5xl md:text-6xl opacity-0 animate-fade-in-up animation-delay-600">
							<span className="emoji-enhanced animate-float animation-delay-600">
								💝
							</span>
						</div>

						{/* Chapter Title */}
						<div className="text-center mb-8 md:mb-10 opacity-0 animate-fade-in-up animation-delay-300">
							<p className="chapter-heading text-4xl md:text-5xl lg:text-6xl text-pink-400 text-glow">
								{COPY.question.chapter}
							</p>
						</div>

						{/* Romantic Hearts Display */}
						<div className="flex justify-center gap-4 md:gap-6 mb-10 md:mb-12 opacity-0 animate-fade-in-up animation-delay-500">
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

						{/* THE QUESTION */}
						<div className="text-center space-y-6 md:space-y-8 mb-12 md:mb-14 px-4">
							{/* Main Title */}
							<div className="opacity-0 animate-fade-in-up animation-delay-600">
								<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pink-100 leading-tight mx-auto">
									{COPY.question.title}
								</h1>
							</div>

							{/* The Actual Question */}
							<div className="opacity-0 animate-fade-in-up animation-delay-700">
								<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pink-300 chapter-heading text-glow leading-tight  mx-auto">
									{COPY.question.question}
								</h2>
							</div>

							{/* Subtitle */}
							<div className="opacity-0 animate-fade-in-up animation-delay-800">
								<p className="text-xl md:text-2xl lg:text-3xl text-pink-200 italic mt-6 text-content mx-auto">
									{COPY.question.subtitle}
								</p>
							</div>
						</div>

						{/* Answer Choices */}
						<div className="flex flex-col gap-5 md:gap-6 mx-auto mb-10">
							{COPY.question.choices.map((choice, index) => (
								<div
									key={choice.id}
									className="opacity-0 animate-fade-in-up"
									style={{
										animationDelay: `${900 + index * 100}ms`,
									}}
								>
									<Button
										onClick={onAnswer}
										variant="modern"
										className="w-full text-xl md:text-2xl lg:text-3xl min-h-22.5 md:min-h-25"
									>
										{choice.label}
									</Button>
								</div>
							))}
						</div>

						{/* Bottom Sparkles */}
						<div className="flex justify-center gap-3 md:gap-4 mt-10 opacity-0 animate-fade-in-up animation-delay-700">
							<span className="text-4xl md:text-5xl emoji-enhanced animate-glow">
								{ANIMALS.sparkles}
							</span>
							<span className="text-5xl md:text-6xl emoji-enhanced animate-heartbeat">
								{ANIMALS.bigHeart}
							</span>
							<span className="text-4xl md:text-5xl emoji-enhanced animate-glow animation-delay-300">
								{ANIMALS.sparkles}
							</span>
							<span className="text-4xl md:text-5xl emoji-enhanced animate-float">
								{ANIMALS.cupid}
							</span>
							<span className="text-4xl md:text-5xl emoji-enhanced animate-glow animation-delay-500">
								{ANIMALS.sparkles}
							</span>
						</div>

						{/* Page Label */}
						<div className="text-center mt-10 md:mt-12 text-pink-400 italic text-xl md:text-2xl font-semibold text-glow opacity-0 animate-fade-in-up animation-delay-800">
							~ The Most Important Page ~
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
