"use client";

import { useEffect, useRef, useCallback } from "react";
import { soundManager, SOUNDS } from "@/lib/sounds";

export function useSound() {
	const initialized = useRef(false);

	useEffect(() => {
		if (!initialized.current) {
			initialized.current = true;
		}
	}, []);

	const playSound = useCallback((soundKey: keyof typeof SOUNDS) => {
		soundManager.playSound(soundKey);
	}, []);

	const playBackgroundMusic = useCallback(() => {
		soundManager.playBackgroundMusic();
	}, []);

	const stopBackgroundMusic = useCallback(() => {
		soundManager.stopBackgroundMusic();
	}, []);

	const pauseBackgroundMusic = useCallback(() => {
		soundManager.pauseBackgroundMusic();
	}, []);

	const resumeBackgroundMusic = useCallback(() => {
		soundManager.resumeBackgroundMusic();
	}, []);

	const toggleMute = useCallback(() => {
		return soundManager.toggleMute();
	}, []);

	const setMusicVolume = useCallback((volume: number) => {
		soundManager.setMusicVolume(volume);
	}, []);

	const setSFXVolume = useCallback((volume: number) => {
		soundManager.setSFXVolume(volume);
	}, []);

	return {
		playSound,
		playBackgroundMusic,
		stopBackgroundMusic,
		pauseBackgroundMusic,
		resumeBackgroundMusic,
		toggleMute,
		setMusicVolume,
		setSFXVolume,
	};
}
