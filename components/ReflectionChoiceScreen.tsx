"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChapterWithChoices } from "@/lib/constants";

interface ReflectionChoiceScreenProps {
	onContinue: () => void;
	chapterData: ChapterWithChoices;
	pageNumber: number;
}

export default function ReflectionChoiceScreen({
	onContinue,
	chapterData,
	pageNumber,
}: ReflectionChoiceScreenProps) {
	const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
	const [showResponse, setShowResponse] = useState(false);

	const handleChoice = (choiceId: string) => {
		setSelectedChoice(choiceId);
		setShowResponse(true);
	};

	const selectedData = chapterData.choices.find(
		(c) => c.id === selectedChoice,
	);

	return (
		<div className="viewport-container page-background">
			{/* Floating decorations */}
			<div className="fixed inset-0 pointer-events-none overflow-hidden">
				<div className="absolute top-[15%] left-[10%] text-3xl opacity-20 animate-float">
					💘
				</div>
				<div className="absolute top-[25%] right-[15%] text-2xl opacity-25 animate-float animation-delay-200">
					💕
				</div>
				<div className="absolute bottom-[20%] left-[15%] text-3xl opacity-20 animate-float animation-delay-400">
					🌸
				</div>
				<div className="absolute bottom-[30%] right-[10%] text-2xl opacity-25 animate-float animation-delay-300">
					✨
				</div>
			</div>

			{/* Book Page Container */}
			<div className="w-full max-w-5xl mx-auto z-10">
				<div className="book-page animate-page-flip">
					<div className="book-content">
						{/* Chapter Header */}
						<div className="text-center mb-6 md:mb-8 opacity-0 animate-fade-in-up animation-delay-300">
							<p className="chapter-heading text-2xl md:text-3xl text-pink-400 mb-3 text-glow">
								{chapterData.chapter}
							</p>
							<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-pink-200 leading-tight px-4">
								{chapterData.title}
							</h2>

							{/* Decorative elements */}
							<div className="flex justify-center gap-4 mt-4">
								<span className="text-3xl emoji-enhanced animate-float">
									🌸
								</span>
								<span className="text-4xl emoji-enhanced animate-heartbeat">
									❤️
								</span>
								<span className="text-3xl emoji-enhanced animate-float animation-delay-200">
									💘
								</span>
							</div>
						</div>

						{!showResponse ? (
							<>
								{/* Prompt */}
								<div className="text-spacing opacity-0 animate-fade-in-up animation-delay-400">
									<p className="text-xl md:text-2xl text-pink-100 text-center font-light leading-relaxed px-4 max-w-3xl mx-auto">
										{chapterData.prompt}
									</p>
								</div>

								{/* Choices Grid - 3 columns on desktop */}
								<div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 mt-8 opacity-0 animate-fade-in-up animation-delay-500">
									{chapterData.choices.map(
										(choice, index) => (
											<div
												key={choice.id}
												className="opacity-0 animate-fade-in-up"
												style={{
													animationDelay: `${600 + index * 100}ms`,
												}}
											>
												<Card
													onClick={() =>
														handleChoice(choice.id)
													}
													className="p-6 md:p-8 cursor-pointer bg-linear-to-br from-pink-950/50 to-purple-950/50 hover:from-pink-900/60 hover:to-purple-900/60 border-2 border-pink-500/50 hover:border-pink-400 smooth-transition hover:scale-105 hover:-translate-y-2 active:scale-95 shadow-md hover:shadow-xl min-h-[200px] md:min-h-[220px] flex flex-col items-center justify-center gap-4 rounded-xl"
												>
													<div className="text-5xl md:text-6xl emoji-enhanced animate-float">
														{choice.emoji}
													</div>
													<p className="text-lg md:text-xl text-pink-100 font-semibold text-center leading-snug">
														{choice.label}
													</p>
												</Card>
											</div>
										),
									)}
								</div>

								{/* Bottom decorative elements */}
								<div className="flex justify-center gap-4 mt-8 opacity-0 animate-fade-in-up animation-delay-800">
									<span className="text-3xl emoji-enhanced animate-float">
										😍
									</span>
									<span className="text-3xl emoji-enhanced animate-glow">
										✨
									</span>
									<span className="text-3xl emoji-enhanced animate-float animation-delay-300">
										💕
									</span>
								</div>
							</>
						) : (
							<>
								{/* Response Section */}
								<div className="text-center space-y-6 md:space-y-8">
									{/* Emoji Icon */}
									<div className="flex justify-center opacity-0 animate-fade-in-up animation-delay-200">
										<span className="text-6xl md:text-7xl emoji-enhanced animate-heartbeat">
											{selectedData?.emoji}
										</span>
									</div>

									{/* Response Text */}
									<div className="text-spacing opacity-0 animate-fade-in-up animation-delay-400">
										<p className="text-lg md:text-xl text-pink-200 italic font-light leading-relaxed px-6 max-w-2xl mx-auto">
											&ldquo;{selectedData?.response}
											&rdquo;
										</p>
									</div>

									{/* Meme Display */}
									{selectedData?.meme && (
										<div className="opacity-0 animate-fade-in-up animation-delay-600">
											<div className="meme-container">
												<Image
													src={selectedData.meme}
													alt="Reaction meme"
													width={500}
													height={500}
													className="w-full h-auto rounded-lg"
													unoptimized
												/>
											</div>
										</div>
									)}

									{/* Decorative emojis */}
									<div className="flex justify-center gap-4 md:gap-6 opacity-0 animate-fade-in-up animation-delay-700">
										<span className="text-3xl md:text-4xl emoji-enhanced animate-float">
											😘
										</span>
										<span className="text-4xl md:text-5xl emoji-enhanced animate-heartbeat">
											❤️
										</span>
										<span className="text-3xl md:text-4xl emoji-enhanced animate-float animation-delay-300">
											😍
										</span>
									</div>

									{/* Continue Button */}
									<div className="pt-6 opacity-0 animate-fade-in-up animation-delay-800">
										<Button
											onClick={onContinue}
											variant="modern"
										>
											Continue
											<span className="emoji-enhanced">
												→
											</span>
										</Button>
									</div>
								</div>
							</>
						)}

						{/* Page Number */}
						<div className="text-center mt-8 text-pink-400 italic text-base md:text-lg opacity-0 animate-fade-in-up animation-delay-800">
							~ Page {pageNumber} ~
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
