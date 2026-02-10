"use client";

interface TooltipProps {
	text: string;
	icon?: string;
}

export default function Tooltip({ text, icon = "🔊" }: TooltipProps) {
	return (
		<div
			className="absolute left-1/2 pointer-events-none"
			style={{
				top: "-15px",
				transform: "translateX(-50%)",
				zIndex: 9999,
				animation:
					"fadeInBounce 0.5s ease-out forwards, bounce 1s infinite 0.5s",
			}}
		>
			<style jsx>{`
				@keyframes fadeInBounce {
					0% {
						opacity: 0;
						transform: translateX(-50%) translateY(-20px);
					}
					100% {
						opacity: 1;
						transform: translateX(-50%) translateY(0);
					}
				}
				@keyframes bounce {
					0%,
					100% {
						transform: translateX(-50%) translateY(0);
					}
					50% {
						transform: translateX(-50%) translateY(-10px);
					}
				}
			`}</style>
			<div className="flex flex-col items-center">
				{/* Tooltip Box */}
				<div
					className="px-8 py-4 rounded-lg shadow-2xl"
					style={{
						backgroundColor: "#db2777",
						color: "#ffffff",
						border: "3px solid #ec4899",
						minWidth: "150px",
						whiteSpace: "nowrap",
					}}
				>
					<div
						className="flex items-center font-bold text-xl"
						style={{ gap: "12px" }}
					>
						<span className="text-2xl animate-pulse">{icon}</span>
						<span>{text}</span>
					</div>
				</div>

				{/* Arrow pointing down */}
				<div
					style={{
						width: 0,
						height: 0,
						borderLeft: "12px solid transparent",
						borderRight: "12px solid transparent",
						borderTop: "12px solid #db2777",
						marginTop: "-1px",
					}}
				></div>
			</div>
		</div>
	);
}
