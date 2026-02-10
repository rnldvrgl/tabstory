"use client";

import { useSound } from "@/lib/hooks/useSound";

export default function WrapperLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { playBackgroundMusic } = useSound();
	playBackgroundMusic();
	return <>{children}</>;
}
