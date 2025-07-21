# TechDebt Analyzer

A comprehensive React + TypeScript application for managing technical debt in software projects. Built with modern web technologies and designed for production use.

## Features

- **Assessment Guide**: Comprehensive categories and examples for identifying technical debt
- **Debt Tracker**: Interactive tool for logging and prioritizing technical debt items
- **Stakeholder Reports**: Executive-friendly summaries and analytics
- **Priority Scoring**: Automated calculation based on impact, effort, and business risk
- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices

## Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Vite** for fast development and building
- **Lucide React** for icons
- **shadcn/ui** components for consistent UI
- **ESLint** for code quality

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd techdebt-analyzer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Layout.tsx
│   ├── ui/
│   │   ├── card.tsx
│   │   └── button.tsx
│   └── TechnicalDebtFramework.tsx
├── lib/
│   └── utils.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Deployment

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Other Platforms

The application builds to static files in the `dist` directory and can be deployed to any static hosting service.

## Usage

### Assessment Guide
Browse through different categories of technical debt with specific examples and indicators to help identify issues in your codebase.

### Debt Tracker
- Add technical debt items with detailed information
- Categorize by type (code quality, architecture, testing, etc.)
- Set impact levels and effort estimates
- Automatic priority calculation
- Track and manage your debt inventory

### Stakeholder Reports
- Executive summary with key metrics
- Category breakdown visualization
- Top priority items list
- Actionable recommendations

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact the development team.