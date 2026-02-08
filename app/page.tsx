"use client";

import { useState } from "react";
import OpeningScreen from "@/components/OpeningScreen";
import MemoryChoiceScreen from "@/components/MemoryChoiceScreen";
import ReflectionChoiceScreen from "@/components/ReflectionChoiceScreen";
import AlmostQuestionScreen from "@/components/AlmostQuestionScreen";
import QuestionScreen from "@/components/QuestionScreen";
import SuccessScreen from "@/components/SuccessScreen";
import { COPY } from "@/lib/constants";

type Step =
	| "opening"
	| "chapter1"
	| "chapter2"
	| "chapter3"
	| "chapter4"
	| "chapter5"
	| "chapter6"
	| "almost"
	| "question"
	| "success";

export default function Home() {
	const [currentStep, setCurrentStep] = useState<Step>("opening");

	const nextStep = () => {
		const steps: Step[] = [
			"opening",
			"chapter1",
			"chapter2",
			"chapter3",
			"chapter4",
			"chapter5",
			"chapter6",
			"almost",
			"question",
			"success",
		];
		const currentIndex = steps.indexOf(currentStep);
		if (currentIndex < steps.length - 1) {
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
					pageNumber={1}
				/>
			)}
			{currentStep === "chapter2" && (
				<ReflectionChoiceScreen
					key="chapter2"
					onContinue={nextStep}
					chapterData={COPY.chapter2}
					pageNumber={2}
				/>
			)}
			{currentStep === "chapter3" && (
				<ReflectionChoiceScreen
					key="chapter3"
					onContinue={nextStep}
					chapterData={COPY.chapter3}
					pageNumber={3}
				/>
			)}
			{currentStep === "chapter4" && (
				<ReflectionChoiceScreen
					key="chapter4"
					onContinue={nextStep}
					chapterData={COPY.chapter4}
					pageNumber={4}
				/>
			)}
			{currentStep === "chapter5" && (
				<AlmostQuestionScreen
					key="chapter5"
					onContinue={nextStep}
					chapterData={COPY.chapter5}
					pageNumber={5}
				/>
			)}
			{currentStep === "chapter6" && (
				<AlmostQuestionScreen
					key="chapter6"
					onContinue={nextStep}
					chapterData={COPY.chapter6}
					pageNumber={6}
				/>
			)}
			{currentStep === "almost" && (
				<AlmostQuestionScreen
					key="almost"
					onContinue={nextStep}
					chapterData={COPY.almostQuestion}
					pageNumber={7}
				/>
			)}
			{currentStep === "question" && (
				<QuestionScreen key="question" onAnswer={nextStep} />
			)}
			{currentStep === "success" && <SuccessScreen key="success" />}
		</div>
	);
}
