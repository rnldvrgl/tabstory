"use client";

import { COPY, ANIMALS } from "@/lib/constants";
import Image from "next/image";

// Different ending types based on user journey
type EndingType = "romantic" | "friendship" | "adventure" | "soulmate";

interface UserChoices {
	chapter1?: string;
	chapter2?: string;
	chapter3?: string;
	chapter4?: string;
}

interface SuccessScreenProps {
	endingType?: EndingType;
	userChoices?: UserChoices;
}

// Ending messages for each path
const ENDINGS = {
	romantic: {
		title: "Chapter ∞: From Grade 7 to Forever",
		subtitle: "13 years of love, chaos, and building our family...",
		message:
			"From that Messenger confession in Grade 7 to becoming teenage parents at 17. From fights and struggles to WFH life and future plans. We built this together, Tabs. Our love, our son Prince, our dreams. Honda Civic, better bodies, more coffee dates - lahat yan, kasama mo.",
		footer: "You were the tomboy who confessed and blocked me. I was the campus crush who chose you despite the hate. 13 years later? Best decision of my life. You, me, and Prince - our forever.",
		celebration:
			"Happy Valentine's Day, Tabs. To us - Ronald, Rosa, and Prince. Mahal na mahal kita!",
	},
	friendship: {
		title: "Chapter ∞: Team Ronald & Tabs",
		subtitle: "Partners in life, parents to Prince, team sa lahat...",
		message:
			"We're not just lovers, we're a team. From surviving teenage pregnancy to raising Prince to working from home together. Every challenge, we faced it side by side. Different companies, same bahay. Different schedules, same goals. That's us - always finding a way.",
		footer: "Coffee, Modern Family, judging people together - these simple moments with you are everything. Waiting for your 1AM clock out? I'd do it every night. Kasi ikaw eh. Kasi tayo.",
		celebration:
			"Happy Valentine's Day, my partner, my teammate, my forever!",
	},
	adventure: {
		title: "Chapter ∞: Yung Adventure Continues",
		subtitle: "From teenage chaos to adult dreams...",
		message:
			"Every fight taught us something. Every struggle made us stronger. From that gate-punching incident to now planning our car purchase. From scared 17-year-olds to confident parents. We're still adventuring, Tabs. Still growing. Still chasing dreams - together.",
		footer: "Honda Civic Type R. Body builds. More memories with Prince. The adventure never ends when you're with the right person. And you're my person, Tabs. Always have been.",
		celebration:
			"Happy Valentine's Day! Let's keep building our adventure!",
	},
	soulmate: {
		title: "Chapter ∞: Meant to Be",
		subtitle: "The tomboy and the campus crush - a love story...",
		message:
			"They said we wouldn't last. Teenage love doesn't survive, daw. But here we are - 13 years, one son, one life built together. You walking like a man with your asian eyes and volleyball moves. Me watching you every day and choosing you every single time. This isn't luck. This is destiny.",
		footer: "Prince Nygel is proof that our love is real. Our WFH setup is proof that we work together. Our plans for the future are proof that we're just getting started. I see myself in you. I see our future in your eyes. Ikaw na talaga, Tabs.",
		celebration:
			"Happy Valentine's Day, my soulmate. From Grade 7 to forever. Mahal kita, Wonwoo mo.",
	},
};

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

export default function SuccessScreen({
	endingType = "romantic",
}: SuccessScreenProps) {
	const ending = ENDINGS[endingType];
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
					className="absolute w-150 h-150 rounded-full blur-3xl opacity-20 animate-float"
					style={{
						background:
							"radial-gradient(circle, rgba(236, 72, 153, 0.6) 0%, transparent 70%)",
						top: "20%",
						left: "20%",
					}}
				/>
				<div
					className="absolute size-125 rounded-full blur-3xl opacity-20 animate-float animation-delay-400"
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
								{ending.title}
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
									{ending.subtitle}
								</h2>
							</div>

							{/* Success Message */}
							<div className="opacity-0 animate-fade-in-up animation-delay-800">
								<p className="text-xl md:text-2xl lg:text-3xl text-pink-200 italic font-light text-content max-w-3xl mx-auto">
									{ending.message}
								</p>
							</div>

							{/* Footer Message */}
							<div className="opacity-0 animate-fade-in-up animation-delay-800">
								<p className="text-lg md:text-xl text-pink-300 text-content max-w-3xl mx-auto">
									{ending.footer}
								</p>
							</div>
						</div>

						{/* Celebration Meme */}
						{COPY.success.finalMeme && (
							<div className="opacity-0 animate-fade-in-up animation-delay-800">
								<div className="meme-container max-w-md mx-auto">
									<Image
										height={400}
										width={400}
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
								{ending.celebration}
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
		</div>
	);
}
