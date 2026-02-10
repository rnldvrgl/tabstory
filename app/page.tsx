"use client";

import { useState } from "react";
import OpeningScreen from "@/components/OpeningScreen";
import MemoryChoiceScreen from "@/components/MemoryChoiceScreen";
import ReflectionChoiceScreen from "@/components/ReflectionChoiceScreen";
import AlmostQuestionScreen from "@/components/AlmostQuestionScreen";
import QuestionScreen from "@/components/QuestionScreen";
import SuccessScreen from "@/components/SuccessScreen";
import { COPY } from "@/lib/constants";
import { playSound } from "@/lib/sounds";

type Step =
	| "opening"
	| "chapter1"
	| "chapter2"
	| "chapter3"
	| "chapter4"
	| "chapter5"
	| "chapter6"
	| "chapter7"
	| "chapter8"
	| "chapter9"
	| "almost"
	| "question"
	| "success";

// Track user choices throughout the journey
interface UserChoices {
	chapter1?: string;
	chapter2?: string;
	chapter3?: string;
	chapter4?: string;
}

// Different ending types based on choices
type EndingType = "romantic" | "friendship" | "adventure" | "soulmate";

export default function Home() {
	const [currentStep, setCurrentStep] = useState<Step>("opening");
	const [userChoices, setUserChoices] = useState<UserChoices>({});

	// Determine ending type based on user choices
	const getEndingType = (): EndingType => {
		const choices = Object.values(userChoices);

		// Count patterns in choices
		const romanticChoices = ["fate", "deeper", "safe", "grown"].filter(
			(c) => choices.includes(c),
		).length;

		const adventureChoices = [
			"luck",
			"adventures",
			"stronger",
			"peace",
		].filter((c) => choices.includes(c)).length;

		const deepConnectionChoices = [
			"inside-jokes",
			"random-moments",
			"belonging",
			"deeper",
		].filter((c) => choices.includes(c)).length;

		// Determine ending based on dominant theme
		if (deepConnectionChoices >= 3) return "soulmate";
		if (romanticChoices >= 2) return "romantic";
		if (adventureChoices >= 2) return "adventure";
		return "friendship";
	};

	const handleChoice = (chapter: keyof UserChoices, choiceId: string) => {
		setUserChoices((prev) => ({
			...prev,
			[chapter]: choiceId,
		}));
	};

	const nextStep = () => {
		const steps: Step[] = [
			"opening",
			"chapter1",
			"chapter2",
			"chapter3",
			"chapter4",
			"chapter5",
			"chapter6",
			"chapter7",
			"chapter8",
			"chapter9",
			"almost",
			"question",
			"success",
		];
		const currentIndex = steps.indexOf(currentStep);
		if (currentIndex < steps.length - 1) {
			// Play page flip sound on chapter transition
			playSound("pageFlip");
			setCurrentStep(steps[currentIndex + 1]);
		}
	};

	return (
		<div className="relative min-h-screen overflow-hidden">
			{currentStep === "opening" && (
				<OpeningScreen key="opening" onContinue={nextStep} />
			)}
			{currentStep === "chapter1" && (
				<MemoryChoiceScreen
					key="chapter1"
					onContinue={nextStep}
					chapterData={COPY.chapter1}
					onChoice={(choiceId) => handleChoice("chapter1", choiceId)}
				/>
			)}
			{currentStep === "chapter2" && (
				<ReflectionChoiceScreen
					key="chapter2"
					onContinue={nextStep}
					chapterData={COPY.chapter2}
					onChoice={(choiceId) => handleChoice("chapter2", choiceId)}
				/>
			)}
			{currentStep === "chapter3" && (
				<ReflectionChoiceScreen
					key="chapter3"
					onContinue={nextStep}
					chapterData={COPY.chapter3}
					onChoice={(choiceId) => handleChoice("chapter3", choiceId)}
				/>
			)}
			{currentStep === "chapter4" && (
				<ReflectionChoiceScreen
					key="chapter4"
					onContinue={nextStep}
					chapterData={COPY.chapter4}
					onChoice={(choiceId) => handleChoice("chapter4", choiceId)}
				/>
			)}
			{currentStep === "chapter5" && (
				<AlmostQuestionScreen
					key="chapter5"
					onContinue={nextStep}
					chapterData={COPY.chapter5}
				/>
			)}
			{currentStep === "chapter6" && (
				<AlmostQuestionScreen
					key="chapter6"
					onContinue={nextStep}
					chapterData={COPY.chapter6}
				/>
			)}
			{currentStep === "chapter7" && (
				<AlmostQuestionScreen
					key="chapter7"
					onContinue={nextStep}
					chapterData={COPY.chapter7}
				/>
			)}
			{currentStep === "chapter8" && (
				<AlmostQuestionScreen
					key="chapter8"
					onContinue={nextStep}
					chapterData={COPY.chapter8}
				/>
			)}
			{currentStep === "chapter9" && (
				<AlmostQuestionScreen
					key="chapter9"
					onContinue={nextStep}
					chapterData={COPY.chapter9}
				/>
			)}
			{currentStep === "almost" && (
				<AlmostQuestionScreen
					key="almost"
					onContinue={nextStep}
					chapterData={COPY.almostQuestion}
				/>
			)}
			{currentStep === "question" && (
				<QuestionScreen key="question" onAnswer={nextStep} />
			)}
			{currentStep === "success" && (
				<SuccessScreen
					key="success"
					endingType={getEndingType()}
					userChoices={userChoices}
				/>
			)}
		</div>
	);
}
