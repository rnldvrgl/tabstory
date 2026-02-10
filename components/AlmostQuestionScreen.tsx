"use client";

import { Button } from "@/components/ui/button";
import { ChapterWithText } from "@/lib/constants";

interface AlmostQuestionScreenProps {
	onContinue: () => void;
	chapterData: ChapterWithText;
}

export default function AlmostQuestionScreen({
	onContinue,
	chapterData,
}: AlmostQuestionScreenProps) {
	return (
		<div className="viewport-container page-background">
			{/* Floating decorations */}
			<div className="fixed inset-0 pointer-events-none overflow-hidden">
				<div className="absolute top-[15%] left-[10%] text-3xl opacity-20 animate-float">
					💕
				</div>
				<div className="absolute top-[25%] right-[15%] text-2xl opacity-25 animate-float animation-delay-200">
					💖
				</div>
				<div className="absolute bottom-[20%] left-[15%] text-3xl opacity-20 animate-float animation-delay-400">
					✨
				</div>
				<div className="absolute bottom-[30%] right-[10%] text-2xl opacity-25 animate-float animation-delay-300">
					🌸
				</div>
			</div>

			{/* Book Page Container */}
			<div className="w-full max-w-5xl mx-auto z-10">
				<div className="book-page animate-page-flip">
					<div className="book-content">
						{/* Chapter Header */}
						<div className="text-center mb-8 md:mb-10 opacity-0 animate-fade-in-up animation-delay-300">
							<p className="chapter-heading text-2xl md:text-3xl text-pink-400 mb-3 text-glow">
								{chapterData.chapter}
							</p>
							<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pink-200 leading-tight px-4">
								{chapterData.title}
							</h2>

							{/* Decorative hearts */}
							<div className="flex justify-center gap-4 my-4!">
								<span className="text-3xl emoji-enhanced animate-float">
									💕
								</span>
								<span className="text-4xl emoji-enhanced animate-heartbeat">
									💖
								</span>
								<span className="text-3xl emoji-enhanced animate-float animation-delay-200">
									💕
								</span>
							</div>
						</div>

						{/* Text Content */}
						<div className="space-y-2 md:space-y-3! mb-10 md:mb-12">
							{chapterData.text.map((paragraph, index) => (
								<div
									key={index}
									className="opacity-0 animate-fade-in-up"
									style={{
										animationDelay: `${400 + index * 150}ms`,
									}}
								>
									<p className="text-xl md:text-2xl text-pink-100 text-center font-light leading-relaxed text-content px-4 md:px-8 mx-auto">
										{paragraph}
									</p>
								</div>
							))}
						</div>

						{/* Decorative elements */}
						<div
							className="flex justify-center gap-4 md:gap-6 my-6! opacity-0 animate-fade-in-up"
							style={{
								animationDelay: `${
									500 + chapterData.text.length * 150
								}ms`,
							}}
						>
							<span className="text-4xl md:text-5xl emoji-enhanced animate-float">
								❤️
							</span>
							<span className="text-4xl md:text-5xl emoji-enhanced animate-glow">
								✨
							</span>
							<span className="text-4xl md:text-5xl emoji-enhanced animate-float animation-delay-300">
								💗
							</span>
						</div>

						{/* Continue Button */}
						<div
							className="flex justify-center pt-4 opacity-0 animate-fade-in-up"
							style={{
								animationDelay: `${
									600 + chapterData.text.length * 150
								}ms`,
							}}
						>
							<Button
								onClick={onContinue}
								variant="modern"
								size="modern"
							>
								Continue
								<span className="emoji-enhanced">→</span>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
