"use client";

// Sound effects paths
export const SOUNDS = {
	backgroundMusic: "/sounds/background-music.mp3",
	pageFlip: "/sounds/page-flip.mp3",
	buttonClick: "/sounds/button-click.mp3",
	pigEntry: "/sounds/pig-entry.mp3",
} as const;

// Sound manager class
class SoundManager {
	private sounds: Map<string, HTMLAudioElement> = new Map();
	private backgroundMusic: HTMLAudioElement | null = null;
	private isMuted: boolean = false;
	private musicVolume: number = 0.3;
	private sfxVolume: number = 0.5;
	private userInteracted: boolean = false;

	constructor() {
		if (typeof window !== "undefined") {
			// Load sounds
			Object.entries(SOUNDS).forEach(([key, path]) => {
				const audio = new Audio(path);
				audio.preload = "auto";
				if (key === "backgroundMusic") {
					audio.loop = true;
					audio.volume = this.musicVolume;
					this.backgroundMusic = audio;
				} else {
					audio.volume = this.sfxVolume;
				}
				this.sounds.set(key, audio);
			});

			// Listen for first user interaction to enable sounds
			const enableAudio = () => {
				console.log("✅ User interaction detected! Enabling sounds...");
				this.userInteracted = true;
				// Start background music if it's ready
				if (this.backgroundMusic) {
					this.backgroundMusic.play().catch((error) => {
						console.warn("Failed to play background music:", error);
					});
				}
				// Remove listeners
				document.removeEventListener("click", enableAudio);
				document.removeEventListener("touchstart", enableAudio);
				document.removeEventListener("keydown", enableAudio);
			};

			document.addEventListener("click", enableAudio);
			document.addEventListener("touchstart", enableAudio);
			document.addEventListener("keydown", enableAudio);
		}
	}

	// Play a sound effect
	playSound(soundKey: keyof typeof SOUNDS) {
		if (this.isMuted) {
			console.log(`🔇 Sound muted, not playing: ${soundKey}`);
			return;
		}

		if (!this.userInteracted) {
			console.log(
				`⚠️ User hasn't interacted yet, cannot play: ${soundKey}`,
			);
			return;
		}

		const sound = this.sounds.get(soundKey);
		if (sound && soundKey !== "backgroundMusic") {
			// Clone the audio for overlapping sounds - this allows multiple sounds to play at once
			const clone = sound.cloneNode(true) as HTMLAudioElement;
			clone.volume = this.sfxVolume;

			// Play immediately and remove after it finishes to prevent memory leaks
			clone.play().catch((error) => {
				console.warn(`Failed to play sound: ${soundKey}`, error);
			});

			// Clean up when sound finishes
			clone.addEventListener("ended", () => {
				clone.remove();
			});
		}
	}

	// Play background music
	playBackgroundMusic() {
		if (this.isMuted || !this.backgroundMusic) return;

		// Only play if user has interacted
		if (this.userInteracted) {
			this.backgroundMusic.play().catch((error) => {
				console.warn("Failed to play background music:", error);
			});
		}
		// If not interacted yet, the enableAudio listener will start it
	}

	// Stop background music
	stopBackgroundMusic() {
		if (this.backgroundMusic) {
			this.backgroundMusic.pause();
			this.backgroundMusic.currentTime = 0;
		}
	}

	// Pause background music
	pauseBackgroundMusic() {
		if (this.backgroundMusic) {
			this.backgroundMusic.pause();
		}
	}

	// Resume background music
	resumeBackgroundMusic() {
		if (!this.isMuted && this.backgroundMusic) {
			this.backgroundMusic.play().catch((error) => {
				console.warn("Failed to resume background music:", error);
			});
		}
	}

	// Toggle mute
	toggleMute() {
		this.isMuted = !this.isMuted;
		if (this.isMuted) {
			this.pauseBackgroundMusic();
		} else {
			this.resumeBackgroundMusic();
		}
		return this.isMuted;
	}

	// Set music volume
	setMusicVolume(volume: number) {
		this.musicVolume = Math.max(0, Math.min(1, volume));
		if (this.backgroundMusic) {
			this.backgroundMusic.volume = this.musicVolume;
		}
	}

	// Set SFX volume
	setSFXVolume(volume: number) {
		this.sfxVolume = Math.max(0, Math.min(1, volume));
	}

	// Get mute status
	getMuteStatus() {
		return this.isMuted;
	}
}

// Export singleton instance
export const soundManager = new SoundManager();

// Helper functions
export const playSound = (soundKey: keyof typeof SOUNDS) => {
	soundManager.playSound(soundKey);
};

export const playBackgroundMusic = () => {
	soundManager.playBackgroundMusic();
};

export const stopBackgroundMusic = () => {
	soundManager.stopBackgroundMusic();
};

export const toggleMute = () => {
	return soundManager.toggleMute();
};
