# Newport - Aiden's Portfolio

A modern, high-performance portfolio website showcasing systems engineering expertise.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components (Button, Card, Badge, etc.)
│   ├── features/        # Feature components (AIChat, BurnoutHero, etc.)
│   └── ErrorBoundary.tsx
├── hooks/               # Custom React hooks (useInterval, useAutoScroll)
├── services/            # API services (Gemini AI)
├── styles/              # Global CSS
├── types/               # TypeScript type definitions
├── utils/               # Utility functions (generators, canvas)
├── constants/           # App constants and data
├── App.tsx
└── index.tsx
```

## 🔧 Tech Stack

- **React 18.2** - UI library
- **TypeScript** - Type safety with strict mode
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Icon library
- **Google Gemini AI** - AI chat functionality

## 🎨 Features

- **Animated Hero**: Canvas-based car drift animation
- **AI Chat**: Integrated Gemini AI assistant
- **Live Dashboards**: Real-time CAN bus logs and system metrics
- **Process Control**: Interactive wastewater system simulation
- **Responsive Design**: Mobile-first approach
- **Type-Safe**: Full TypeScript with strict mode

## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

## 📝 Code Quality

- **Strict TypeScript**: All code fully typed with strict compiler options
- **Path Aliases**: Clean imports using `@/` prefix
- **Custom Hooks**: Reusable logic extracted into hooks
- **Error Boundaries**: Graceful error handling
- **Component Documentation**: JSDoc comments on all exports

## 🧹 Cleanup (Optional)

The following old files can be safely deleted as they're no longer used:

- `/components/` (old directory)
- `/constants.tsx`
- `/types.ts`
- `/App.tsx` (root level)
- `/index.tsx` (root level)

The app now uses only files from the `/src` directory.

## 📚 Documentation

See [walkthrough.md](/.gemini/antigravity/brain/36b97d1c-d217-468c-b3ce-529945413a3b/walkthrough.md) for detailed refactoring documentation.

## 🎯 Next Steps

- Add unit tests with Vitest
- Implement performance optimizations (React.memo, lazy loading)
- Add accessibility improvements (ARIA labels, keyboard nav)
- Set up CI/CD pipeline
- Add Storybook for component documentation