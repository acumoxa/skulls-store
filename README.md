# Skulls Store - Next.js E-commerce Site

A modern e-commerce website built with Next.js 14, featuring a dark/light theme toggle and responsive design.

## Features

- Dark/Light Theme Toggle
- Theme-aware Components
- Fully Responsive Design
- Product Showcase
- Blog Section
- Location Pages
- Contact Forms
- FAQ Section

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Theme Management**: Next-themes

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd skulls-store
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
skulls-store/
├── app/                    # Next.js app directory
├── components/            # React components
│   ├── about/            # About page components
│   ├── blog/             # Blog page components
│   ├── contact/          # Contact page components
│   └── ui/               # Shared UI components
├── docs/                 # Documentation
└── public/              # Static assets
```

## Theme System

The project uses a comprehensive theme system with CSS variables for consistent styling. See `docs/theme-guidelines.md` for detailed documentation on:
- Theme variables
- Component styling
- Best practices
- Common patterns

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Documentation

- Theme Guidelines: [docs/theme-guidelines.md](docs/theme-guidelines.md)
- Component Documentation: Coming soon

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

MIT License - See LICENSE file for details
