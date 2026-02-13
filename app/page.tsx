"use client"

import AlmostQuestionScreen from "@/components/AlmostQuestionScreen"
import MemoryChoiceScreen from "@/components/MemoryChoiceScreen"
import OpeningScreen from "@/components/OpeningScreen"
import QuestionScreen from "@/components/QuestionScreen"
import ReflectionChoiceScreen from "@/components/ReflectionChoiceScreen"
import SuccessScreen from "@/components/SuccessScreen"
import { COPY } from "@/lib/constants"
import { playSound } from "@/lib/sounds"
import { useState } from "react"

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
  | "success"

// Track user choices throughout the journey
interface UserChoices {
  chapter1?: string
  chapter2?: string
  chapter3?: string
  chapter4?: string
}

// Different ending types based on choices
type EndingType = "romantic" | "friendship" | "adventure" | "soulmate"

export default function Home() {
  const [currentStep, setCurrentStep] = useState<Step>("opening")
  const [userChoices, setUserChoices] = useState<UserChoices>({})

  // Determine ending type based on user choices
  const getEndingType = (): EndingType => {
    const choices = Object.values(userChoices)

    // Romantic ending - emotional, connection-focused choices
    const romanticChoices = [
      "bold", // Chapter 1: Took the risk
      "chosen", // Chapter 2: Chosen one perspective
      "worth-it", // Chapter 3: Everything was worth it
      "team", // Chapter 4: We became a team
    ].filter((c) => choices.includes(c)).length

    // Adventure ending - growth and journey-focused choices
    const adventureChoices = [
      "nervous", // Chapter 1: Nervous but brave
      "tomboy-pride", // Chapter 2: Embracing uniqueness
      "growth", // Chapter 3: Personal growth
      "proud", // Chapter 4: Proud of journey
    ].filter((c) => choices.includes(c)).length

    // Soulmate ending - deep understanding and meant-to-be
    const soulmateChoices = [
      "bold", // Chapter 1: Took the risk for love
      "chosen", // Chapter 2: Chosen soulmate
      "worth-it", // Chapter 3: Worth every struggle
      "scared", // Chapter 4: Scared but together
    ].filter((c) => choices.includes(c)).length

    // Friendship/Team ending - practical partnership
    const friendshipChoices = [
      "funny", // Chapter 1: Humor in chaos
      "haters", // Chapter 2: Overcoming together
      "crazy", // Chapter 3: Intense but learning
      "team", // Chapter 4: Teamwork focus
    ].filter((c) => choices.includes(c)).length

    // Determine ending based on dominant theme (at least 2 matching choices)
    if (soulmateChoices >= 2 && choices.includes("chosen")) return "soulmate"
    if (romanticChoices >= 2) return "romantic"
    if (adventureChoices >= 2) return "adventure"
    if (friendshipChoices >= 2) return "friendship"

    // Default based on any single strong indicator
    if (choices.includes("chosen")) return "soulmate"
    if (choices.includes("worth-it")) return "romantic"
    if (choices.includes("growth") || choices.includes("proud"))
      return "adventure"

    return "friendship"
  }

  const handleChoice = (chapter: keyof UserChoices, choiceId: string) => {
    setUserChoices((prev) => ({
      ...prev,
      [chapter]: choiceId,
    }))
  }

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
    ]
    const currentIndex = steps.indexOf(currentStep)
    if (currentIndex < steps.length - 1) {
      // Play page flip sound on chapter transition
      playSound("pageFlip")

      // Small delay for book flip animation
      setTimeout(() => {
        setCurrentStep(steps[currentIndex + 1])
      }, 150)
    }
  }

  const handleRestart = () => {
    setCurrentStep("opening")
    setUserChoices({})
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      {currentStep === "opening" && (
        <OpeningScreen
          key="opening"
          onContinue={nextStep}
        />
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
        <QuestionScreen
          key="question"
          onAnswer={nextStep}
        />
      )}
      {currentStep === "success" && (
        <SuccessScreen
          key="success"
          endingType={getEndingType()}
          userChoices={userChoices}
          onRestart={handleRestart}
        />
      )}
    </div>
  )
}
