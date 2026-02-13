"use client"

import { Button } from "@/components/ui/button"
import { COPY } from "@/lib/constants"
import Image from "next/image"
import React from "react"

// Different ending types based on user journey
type EndingType = "romantic" | "friendship" | "adventure" | "soulmate"

interface UserChoices {
  chapter1?: string
  chapter2?: string
  chapter3?: string
  chapter4?: string
}

interface SuccessScreenProps {
  endingType?: EndingType
  userChoices?: UserChoices
  onRestart?: () => void
}

// Ending messages for each path
const ENDINGS = {
  romantic: {
    title: "Chapter ∞: 13 Years Later",
    subtitle: "At patuloy yung kalokahan natin...",
    message:
      "13 years na pala. From Grade 7 confess-and-block to ngayon. With Nygel. With our WFH chaos. With our chismisan sessions. Hindi perfect, pero ours.",
    footer:
      "From Messenger confession to ngayon - wild ride talaga. Uulitin ko pa rin lahat. I love you, Tabs. Continue lang tayo. (Sana matuloy yung kotse at body builds HAHA)",
    celebration:
      "Happy Valentine's Day, Tabs. To us. Our little family. Our random plans. Our life.",
  },
  friendship: {
    title: "Chapter ∞: Team Tabs & Ronald",
    subtitle: "Professional teammates sa lahat...",
    message:
      "13 years ng teamwork. From teenage parents to WFH partners. With Nygel. With our coffee dates. With our judging-people hobby. Solid pa rin.",
    footer:
      "From walang alam to slightly may alam na - progress yan. I love you, Tabs. Team tayo palagi. (Kahit walang budget sa next trip HAHA)",
    celebration:
      "Happy Valentine's Day, teammate! To us. Our strategies. Our wins (and losses). Our journey.",
  },
  adventure: {
    title: "Chapter ∞: Tuloy ang Adventure",
    subtitle: "From clueless to less clueless...",
    message:
      "13 years of figuring things out. From teenage chaos to car goals. With Nygel. With our dreams (realistic or hindi). With each other. One step at a time lang.",
    footer:
      "From teenage chaos to adult plans - character development yun. I love you, Tabs. Adventure pa rin tayo. (Sana may budget na sa next adventure HAHA)",
    celebration:
      "Happy Valentine's Day! To us. Our journey. Our questionable decisions. Our story.",
  },
  soulmate: {
    title: "Chapter ∞: Still Going",
    subtitle: "At hindi pa tapos ang kwento...",
    message:
      "13 years later, eto pa rin tayo. With Nygel. With our plans. With our everyday normal life. Simple lang, pero sapat.",
    footer:
      "Kamukha ko daw si Wonwoo pero kasama mo na 13 years - mas okay yan. I love you, Tabs. Ikaw pa rin. (Kahit Jeonghan bias mo HAHA)",
    celebration:
      "Happy Valentine's Day, Tabs. To us. Our reality. Our inside jokes. Tayo pa rin.",
  },
}

// Floating emojis configuration - different sets for each ending type
const EMOJI_SETS = {
  romantic: {
    left: [
      { id: 0, emoji: "💝", left: "5%", delay: "0ms", duration: "4s" },
      { id: 1, emoji: "💕", left: "10%", delay: "400ms", duration: "4.2s" },
      { id: 2, emoji: "✨", left: "8%", delay: "300ms", duration: "3.6s" },
      { id: 3, emoji: "🌹", left: "12%", delay: "600ms", duration: "4.4s" },
      { id: 4, emoji: "💗", left: "6%", delay: "200ms", duration: "3.8s" },
      { id: 5, emoji: "💘", left: "15%", delay: "500ms", duration: "4.1s" },
      { id: 6, emoji: "💌", left: "9%", delay: "700ms", duration: "4.3s" },
    ],
    right: [
      { id: 7, emoji: "❤️", left: "90%", delay: "200ms", duration: "3.5s" },
      { id: 8, emoji: "💖", left: "88%", delay: "600ms", duration: "3.8s" },
      { id: 9, emoji: "💗", left: "92%", delay: "500ms", duration: "4.1s" },
      { id: 10, emoji: "🎀", left: "85%", delay: "800ms", duration: "4.3s" },
      { id: 11, emoji: "✨", left: "94%", delay: "400ms", duration: "4s" },
      { id: 12, emoji: "🌹", left: "87%", delay: "100ms", duration: "4.5s" },
      { id: 13, emoji: "💕", left: "91%", delay: "300ms", duration: "3.7s" },
    ],
    main: ["🌹", "💖", "🌹"],
    center: "💕",
    bottom: ["😍", "✨", "😘", "✨", "💘", "🔥"],
  },
  friendship: {
    left: [
      { id: 0, emoji: "🤝", left: "5%", delay: "0ms", duration: "4s" },
      { id: 1, emoji: "🌟", left: "10%", delay: "400ms", duration: "4.2s" },
      { id: 2, emoji: "✨", left: "8%", delay: "300ms", duration: "3.6s" },
      { id: 3, emoji: "🎉", left: "12%", delay: "600ms", duration: "4.4s" },
      { id: 4, emoji: "💛", left: "6%", delay: "200ms", duration: "3.8s" },
      { id: 5, emoji: "🌞", left: "15%", delay: "500ms", duration: "4.1s" },
      { id: 6, emoji: "🤗", left: "9%", delay: "700ms", duration: "4.3s" },
    ],
    right: [
      { id: 7, emoji: "⭐", left: "90%", delay: "200ms", duration: "3.5s" },
      { id: 8, emoji: "🎊", left: "88%", delay: "600ms", duration: "3.8s" },
      { id: 9, emoji: "💛", left: "92%", delay: "500ms", duration: "4.1s" },
      { id: 10, emoji: "🌟", left: "85%", delay: "800ms", duration: "4.3s" },
      { id: 11, emoji: "✨", left: "94%", delay: "400ms", duration: "4s" },
      { id: 12, emoji: "🎉", left: "87%", delay: "100ms", duration: "4.5s" },
      { id: 13, emoji: "🤝", left: "91%", delay: "300ms", duration: "3.7s" },
    ],
    main: ["🌟", "💛", "🌟"],
    center: "🤝",
    bottom: ["😊", "✨", "🤗", "✨", "👊", "🔥"],
  },
  adventure: {
    left: [
      { id: 0, emoji: "🚀", left: "5%", delay: "0ms", duration: "4s" },
      { id: 1, emoji: "🌊", left: "10%", delay: "400ms", duration: "4.2s" },
      { id: 2, emoji: "✨", left: "8%", delay: "300ms", duration: "3.6s" },
      { id: 3, emoji: "🗺️", left: "12%", delay: "600ms", duration: "4.4s" },
      { id: 4, emoji: "🏔️", left: "6%", delay: "200ms", duration: "3.8s" },
      { id: 5, emoji: "🎒", left: "15%", delay: "500ms", duration: "4.1s" },
      { id: 6, emoji: "⛵", left: "9%", delay: "700ms", duration: "4.3s" },
    ],
    right: [
      { id: 7, emoji: "🌍", left: "90%", delay: "200ms", duration: "3.5s" },
      { id: 8, emoji: "🏕️", left: "88%", delay: "600ms", duration: "3.8s" },
      { id: 9, emoji: "🧭", left: "92%", delay: "500ms", duration: "4.1s" },
      { id: 10, emoji: "🏖️", left: "85%", delay: "800ms", duration: "4.3s" },
      { id: 11, emoji: "✨", left: "94%", delay: "400ms", duration: "4s" },
      { id: 12, emoji: "🚁", left: "87%", delay: "100ms", duration: "4.5s" },
      { id: 13, emoji: "🌊", left: "91%", delay: "300ms", duration: "3.7s" },
    ],
    main: ["🗺️", "🚀", "🗺️"],
    center: "🌍",
    bottom: ["🎒", "✨", "🧭", "✨", "⛰️", "🔥"],
  },
  soulmate: {
    left: [
      { id: 0, emoji: "💜", left: "5%", delay: "0ms", duration: "4s" },
      { id: 1, emoji: "🌙", left: "10%", delay: "400ms", duration: "4.2s" },
      { id: 2, emoji: "✨", left: "8%", delay: "300ms", duration: "3.6s" },
      { id: 3, emoji: "🔮", left: "12%", delay: "600ms", duration: "4.4s" },
      { id: 4, emoji: "💫", left: "6%", delay: "200ms", duration: "3.8s" },
      { id: 5, emoji: "🌟", left: "15%", delay: "500ms", duration: "4.1s" },
      { id: 6, emoji: "🦋", left: "9%", delay: "700ms", duration: "4.3s" },
    ],
    right: [
      { id: 7, emoji: "💜", left: "90%", delay: "200ms", duration: "3.5s" },
      { id: 8, emoji: "⭐", left: "88%", delay: "600ms", duration: "3.8s" },
      { id: 9, emoji: "💫", left: "92%", delay: "500ms", duration: "4.1s" },
      { id: 10, emoji: "🌙", left: "85%", delay: "800ms", duration: "4.3s" },
      { id: 11, emoji: "✨", left: "94%", delay: "400ms", duration: "4s" },
      { id: 12, emoji: "🔮", left: "87%", delay: "100ms", duration: "4.5s" },
      { id: 13, emoji: "💜", left: "91%", delay: "300ms", duration: "3.7s" },
    ],
    main: ["🌙", "💜", "🌙"],
    center: "💫",
    bottom: ["🦋", "✨", "🌟", "✨", "💜", "🔥"],
  },
}

// Color themes for each ending type
const COLOR_THEMES = {
  romantic: {
    title: "text-pink-400",
    subtitle: "text-pink-100",
    message: "text-pink-200",
    footer: "text-pink-300",
    celebration: "text-pink-300",
    final: "text-pink-400",
    glow1: "rgba(236, 72, 153, 0.6)",
    glow2: "rgba(249, 168, 212, 0.7)",
    buttonGradientFrom: "#ec4899",
    buttonGradientTo: "#f43f5e",
    buttonHoverFrom: "#db2777",
    buttonHoverTo: "#e11d48",
    shadowColor: "rgba(236, 72, 153, 0.5)",
  },
  friendship: {
    title: "text-amber-400",
    subtitle: "text-yellow-100",
    message: "text-yellow-200",
    footer: "text-amber-300",
    celebration: "text-amber-300",
    final: "text-amber-400",
    glow1: "rgba(251, 191, 36, 0.6)",
    glow2: "rgba(253, 224, 71, 0.7)",
    buttonGradientFrom: "#f59e0b",
    buttonGradientTo: "#eab308",
    buttonHoverFrom: "#d97706",
    buttonHoverTo: "#ca8a04",
    shadowColor: "rgba(251, 191, 36, 0.5)",
  },
  adventure: {
    title: "text-cyan-400",
    subtitle: "text-blue-100",
    message: "text-blue-200",
    footer: "text-cyan-300",
    celebration: "text-cyan-300",
    final: "text-cyan-400",
    glow1: "rgba(34, 211, 238, 0.6)",
    glow2: "rgba(125, 211, 252, 0.7)",
    buttonGradientFrom: "#06b6d4",
    buttonGradientTo: "#3b82f6",
    buttonHoverFrom: "#0891b2",
    buttonHoverTo: "#2563eb",
    shadowColor: "rgba(34, 211, 238, 0.5)",
  },
  soulmate: {
    title: "text-purple-400",
    subtitle: "text-purple-100",
    message: "text-purple-200",
    footer: "text-purple-300",
    celebration: "text-purple-300",
    final: "text-purple-400",
    glow1: "rgba(168, 85, 247, 0.6)",
    glow2: "rgba(196, 181, 253, 0.7)",
    buttonGradientFrom: "#a855f7",
    buttonGradientTo: "#8b5cf6",
    buttonHoverFrom: "#9333ea",
    buttonHoverTo: "#7c3aed",
    shadowColor: "rgba(168, 85, 247, 0.5)",
  },
}

export default function SuccessScreen({
  endingType = "romantic",
  onRestart,
}: SuccessScreenProps) {
  const [isHovered, setIsHovered] = React.useState(false)

  const handleRestart = () => {
    if (onRestart) {
      onRestart()
    } else {
      // Fallback: reload the page
      window.location.reload()
    }
  }
  const ending = ENDINGS[endingType]
  const emojis = EMOJI_SETS[endingType]
  const colors = COLOR_THEMES[endingType]

  return (
    <div className="viewport-container page-background">
      {/* Floating Celebration Emojis - Left Side */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {emojis.left.map((item) => (
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
            <span className="text-2xl md:text-3xl emoji-enhanced">
              {item.emoji}
            </span>
          </div>
        ))}

        {/* Floating Celebration Emojis - Right Side */}
        {emojis.right.map((item) => (
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
            <span className="text-2xl md:text-3xl emoji-enhanced">
              {item.emoji}
            </span>
          </div>
        ))}

        {/* Large glow blobs for celebration - positioned away from center */}
        <div
          className="absolute size-150 rounded-full blur-3xl opacity-20 animate-float"
          style={{
            background: `radial-gradient(circle, ${colors.glow1} 0%, transparent 70%)`,
            top: "10%",
            left: "5%",
          }}
        />
        <div
          className="absolute size-125 rounded-full blur-3xl opacity-20 animate-float animation-delay-400"
          style={{
            background: `radial-gradient(circle, ${colors.glow2} 0%, transparent 70%)`,
            bottom: "10%",
            right: "5%",
          }}
        />
      </div>

      {/* Success Book Page - Centered with padding to avoid emojis */}
      <div className="w-full max-w-3xl mx-auto z-10 px-6 md:px-8 lg:px-12 py-4">
        <div className="book-page animate-page-flip soft-glow">
          <div className="book-content py-6 md:py-8">
            {/* Chapter Title */}
            <div className="text-center mb-6! md:mb-8! opacity-0 animate-fade-in-up animation-delay-500">
              <p
                className={`chapter-heading text-2xl md:text-3xl lg:text-4xl ${colors.title} text-glow`}
              >
                {ending.title}
              </p>
            </div>

            {/* Main Heart Celebration */}
            <div className="flex justify-center gap-3 md:gap-4 my-6! md:my-8! opacity-0 animate-fade-in-up animation-delay-600">
              <span className="text-4xl md:text-5xl emoji-enhanced animate-float">
                {emojis.main[0]}
              </span>
              <span className="text-5xl md:text-6xl emoji-enhanced animate-heartbeat">
                {emojis.main[1]}
              </span>
              <span className="text-4xl md:text-5xl emoji-enhanced animate-float animation-delay-300">
                {emojis.main[2]}
              </span>
            </div>

            {/* Success Messages */}
            <div className="text-center space-y-4 md:space-y-5 mb-6 md:mb-8 px-4">
              {/* Main Success Title */}
              <div className="opacity-0 animate-fade-in-up animation-delay-700">
                <h2
                  className={`text-xl md:text-2xl lg:text-3xl font-bold ${colors.subtitle} leading-relaxed max-w-3xl mx-auto`}
                >
                  {ending.subtitle}
                </h2>
              </div>

              {/* Success Message */}
              <div className="opacity-0 animate-fade-in-up animation-delay-800">
                <p
                  className={`text-base md:text-lg lg:text-xl ${colors.message} italic font-light text-content leading-relaxed max-w-2xl mx-auto`}
                >
                  {ending.message}
                </p>
              </div>

              {/* Footer Message */}
              <div className="opacity-0 animate-fade-in-up animation-delay-800">
                <p
                  className={`text-sm md:text-base lg:text-lg ${colors.footer} text-content leading-relaxed max-w-2xl mx-auto`}
                >
                  {ending.footer}
                </p>
              </div>
            </div>

            {/* Celebration Meme */}
            {COPY.success.finalMeme && (
              <div className="opacity-0 animate-fade-in-up animation-delay-800">
                <div className="meme-container max-w-xs md:max-w-sm mx-auto mb-6">
                  <Image
                    height={300}
                    width={300}
                    src={COPY.success.finalMeme}
                    alt="Celebration!"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
              </div>
            )}

            {/* Central Floating Heart */}
            <div className="flex justify-center mb-6 md:mb-8 opacity-0 animate-fade-in-up animation-delay-800">
              <span className="text-5xl md:text-6xl emoji-enhanced animate-float">
                {emojis.center}
              </span>
            </div>

            {/* Final Celebration Message */}
            <div className="text-center mb-8 md:mb-10 opacity-0 animate-fade-in-up animation-delay-800">
              <p
                className={`text-xl md:text-2xl lg:text-3xl font-bold ${colors.celebration} chapter-heading text-glow animate-heartbeat leading-relaxed max-w-2xl mx-auto`}
              >
                {ending.celebration}
              </p>
            </div>

            {/* Bottom Heart Party */}
            <div className="flex justify-center gap-2 md:gap-3 text-2xl md:text-3xl flex-wrap opacity-0 animate-fade-in-up animation-delay-800 my-6!">
              <span className="emoji-enhanced animate-float">
                {emojis.bottom[0]}
              </span>
              <span className="emoji-enhanced animate-glow">
                {emojis.bottom[1]}
              </span>
              <span className="emoji-enhanced animate-float animation-delay-200">
                {emojis.bottom[2]}
              </span>
              <span className="emoji-enhanced animate-glow animation-delay-300">
                {emojis.bottom[3]}
              </span>
              <span className="emoji-enhanced animate-heartbeat">
                {emojis.bottom[4]}
              </span>
              <span className="emoji-enhanced animate-glow animation-delay-400">
                {emojis.bottom[5]}
              </span>
            </div>

            {/* Restart Button */}
            <div className="flex justify-center mt-6! md:mt-8! mb-4! opacity-0 animate-fade-in-up animation-delay-900">
              <Button
                onClick={handleRestart}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                size="lg"
                className="px-10 py-6 text-base md:text-lg font-bold text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white/20 backdrop-blur-sm"
                style={{
                  background: isHovered
                    ? `linear-gradient(to right, ${colors.buttonHoverFrom}, ${colors.buttonHoverTo})`
                    : `linear-gradient(to right, ${colors.buttonGradientFrom}, ${colors.buttonGradientTo})`,
                  boxShadow: isHovered
                    ? `0 25px 50px -12px ${colors.shadowColor}`
                    : `0 20px 25px -5px ${colors.shadowColor}`,
                }}
              >
                ✨ Start Again ✨
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
