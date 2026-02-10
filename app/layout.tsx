import type { Metadata } from "next";
import { Crimson_Pro, Dancing_Script, Quicksand } from "next/font/google";
import "./globals.css";
import SoundEnabler from "@/components/SoundEnabler";

const crimsonPro = Crimson_Pro({
	subsets: ["latin"],
	variable: "--font-crimson",
	weight: ["300", "400", "600"],
});

const dancingScript = Dancing_Script({
	subsets: ["latin"],
	variable: "--font-dancing",
	weight: ["400", "700"],
});

const quicksand = Quicksand({
	subsets: ["latin"],
	variable: "--font-quicksand",
	weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: "TabStory",
	description:
		"A Valentine's tale for the ages, crafted with love and a touch of whimsy.",
	icons: {
		icon: "/icon.svg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${crimsonPro.variable} ${dancingScript.variable} ${quicksand.variable} font-sans antialiased`}
				style={{
					fontFamily:
						"var(--font-quicksand), var(--font-crimson), ui-sans-serif, system-ui, sans-serif",
				}}
			>
				<SoundEnabler />
				{children}
			</body>
		</html>
	);
}
