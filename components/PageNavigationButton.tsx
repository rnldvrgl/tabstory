"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface PageNavigationButtonProps {
	onClick: () => void;
	text?: string;
	disabled?: boolean;
}

export default function PageNavigationButton({
	onClick,
	text = "Continue",
	disabled = false,
}: PageNavigationButtonProps) {
	return (
		<motion.button
			onClick={onClick}
			disabled={disabled}
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.98 }}
			className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 via-pink-600 to-rose-500 hover:from-pink-400 hover:via-pink-500 hover:to-rose-400 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:shadow-pink-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden min-w-[200px] justify-center"
		>
			{/* Ripple effect background */}
			<motion.div
				className="absolute inset-0 bg-white/20"
				initial={{ scale: 0, opacity: 0.5 }}
				whileHover={{ scale: 2, opacity: 0 }}
				transition={{ duration: 0.6 }}
			/>

			{/* Text */}
			<span className="relative z-10 text-base md:text-lg tracking-wide">
				{text}
			</span>

			{/* Animated Icon */}
			<motion.div
				className="relative z-10"
				animate={{ x: [0, 4, 0] }}
				transition={{
					duration: 1.5,
					repeat: Infinity,
					ease: "easeInOut",
				}}
			>
				<ChevronRight size={20} strokeWidth={2.5} />
			</motion.div>

			{/* Shine effect */}
			<motion.div
				className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
				initial={{ x: "-100%" }}
				whileHover={{ x: "100%" }}
				transition={{ duration: 0.6 }}
			/>
		</motion.button>
	);
}
