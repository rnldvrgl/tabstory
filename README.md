# Our Story 📖💜

An interactive Valentine's Day storybook for Rosa Mae "Tabs" F. Repiso.

**A 7-chapter journey through 13 years of friendship, laughter, and love.**

---

## 🌙 The Story

This isn't just a Valentine's card. It's an interactive experience that unfolds like a book, with:

- **Modern purple theme** - Elegant gradients and smooth animations
- **7 meaningful chapters** - Each exploring a different part of your story
- **Cute characters** - Pig 🐷, Capybara 🦦, and Toothless 🌙 (represented by the moon)
- **Personal touches** - Every line references "Tabs" and your 13-year journey

---

## 🎨 The Vibe

**Modern** - Clean design with purple/violet gradients
**Playful** - Animated animals and interactive choices
**Emotional** - Deeper story with real feelings
**Personal** - Built specifically for Tabs

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 📚 The Journey

### 📖 Opening: The Book Cover

Beautiful cover with animated characters introducing the story

### 📄 Chapter 1: Where It All Began

Reflecting on how your paths crossed 13 years ago

### 📄 Chapter 2: The Laughter Archives

Celebrating inside jokes and silly moments

### 📄 Chapter 3: The Comfort Zone

Exploring what "home" means

### 📄 Chapter 4: The Evolution

How you've grown together over the years

### 📄 Chapter 5: The Unspoken Things

Building emotional depth

### 📄 Chapter 6: The Realization

The moment everything clicked

### 📄 Chapter 7: The Moment of Truth

Final build-up to the question

### 💜 The Question

"Will you be my Valentine?" (with three adorable ways to say yes)

### 🎉 Chapter ∞

Celebration with floating emojis and dancing animals

---

## 🛠️ Tech Stack

```
Next.js 15          App Router + TypeScript
Tailwind CSS 4      Modern purple theme
shadcn/ui           Beautiful UI components
Framer Motion       Smooth page-turn animations
```

**Zero backend. Pure frontend magic. ✨**

---

## 🎨 Design Features

### Purple Modern Aesthetic

- Violet, indigo, and purple gradients
- Soft white book pages with subtle texture
- Modern rounded corners and smooth shadows

### Page-Turn Animations

- 3D rotation effects like a real book
- Smooth transitions between chapters
- Staggered text reveals

### Character Animations

- 🐷 Pig wiggles and rotates
- 🦦 Capybara bobs gently
- 🌙 Toothless (moon) flies across scenes
- All use proper 2-keyframe animations (no warnings!)

---

## 📁 Project Structure

```
tbs/
├── app/
│   ├── layout.tsx          # Fonts & metadata
│   ├── page.tsx            # Story orchestrator (7 chapters)
│   └── globals.css         # Purple theme styles
│
├── components/
│   ├── OpeningScreen.tsx           # Book cover
│   ├── MemoryChoiceScreen.tsx      # Chapter 1
│   ├── ReflectionChoiceScreen.tsx  # Chapters 2-4 (card-based)
│   ├── AlmostQuestionScreen.tsx    # Chapters 5-7 (text-based)
│   ├── QuestionScreen.tsx          # The big question
│   ├── SuccessScreen.tsx           # Celebration
│   └── ui/                         # shadcn components
│
└── lib/
    ├── constants.ts        # All story text (edit here!)
    └── utils.ts            # Helpers
```

---

## ✏️ Customization

### Edit All Text

Everything lives in **`lib/constants.ts`**:

```typescript
export const COPY = {
  opening: { ... },
  chapter1: { ... },
  chapter2: { ... },
  // ... all chapters
}
```

### Change Colors

Search and replace throughout components:

- `purple-` → `blue-`, `rose-`, etc.
- `violet-` → `indigo-`, `pink-`, etc.

### Add More Chapters

1. Add chapter data to `constants.ts`
2. Update page flow in `app/page.tsx`
3. Component will auto-adapt!

---

## 🚢 Deployment

### Vercel (Recommended)

```bash
vercel
```

### Netlify

```bash
netlify deploy --prod
```

### Build Locally

```bash
npm run build
npm start
```

---

## 🎯 Key Features

✅ **7 Chapters** - Longer, deeper story
✅ **Purple Theme** - Modern and elegant
✅ **Toothless Theme** - Moon 🌙 represents the Night Fury
✅ **Fixed Animations** - No spring warnings, smooth motion
✅ **Reusable Components** - Easy to add more chapters
✅ **Mobile Optimized** - Perfect on phones
✅ **Production Ready** - Clean code, zero errors

---

## 🌟 What Makes This Special

### Not Generic

Every chapter references "Tabs", your 13-year history, and inside jokes about pigs and animals.

### No Wrong Answers

Every choice is affirming. The journey matters more than the destination.

### Modern Design

Purple gradients, smooth animations, and a clean book aesthetic that feels contemporary, not childish.

### Emotional Depth

7 chapters allow for real emotional progression from nostalgia → comfort → realization → love.

---

## 🐛 Troubleshooting

### Build Errors?

```bash
rm -rf .next
npm run build
```

### Port 3000 Busy?

```bash
npm run dev -- --port 3001
```

### Changes Not Showing?

Hard refresh: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)

---

## 📖 Documentation

- **QUICKSTART.md** - Get running in 60 seconds
- **EXPERIENCE.md** - Visual walkthrough of the journey
- **CUSTOMIZATION.md** - Deep customization guide
- **DEPLOYMENT.md** - Deploy anywhere
- **LAUNCH.md** - Pre-launch checklist

---

## 💜 The Philosophy

> "After 13 years, some feelings don't fade—they grow."

This storybook is playful with the animals and jokes, but underneath it all, it's saying something real. Something that took 13 years to build and one moment to finally express.

---

## 🎭 Characters

- **🐷 Pig** - Tabs' spirit animal (playful, lovable)
- **🦦 Capybara** - The ultimate chill vibes
- **🌙 Toothless** - Represented by the moon (Night Fury energy, adventure, loyalty)

---

## ⚡ Performance

- Static site generation (instant load)
- Optimized fonts (no layout shift)
- ~100KB bundle (gzipped)
- GPU-accelerated animations
- Works offline after first load

---

## 🌐 Browser Support

Modern browsers only:

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

**Made for Rosa Mae "Tabs" F. Repiso**
**With 🐷, 🦦, 🌙, and 13 years of friendship**

Happy Valentine's Day 💜
