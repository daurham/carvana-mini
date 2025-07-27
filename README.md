# Carvana Listings Viewer

A modern car listings viewer built with Next.js, React Query, and TypeScript. This app demonstrates real-world data usage, async handling, modular UI, and state separation.

## 🚀 Features

- **Car Listings**: Fetch and display car listings from a dummy API
- **React Query Integration**: Efficient data fetching and caching
- **Filtering**: Filter cars by make and price range
- **Detail View**: Modal popup with detailed car information
- **Favorites**: Mock favorite functionality with local state
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, modern interface with Tailwind CSS

## 🛠 Tech Stack

- **Next.js 15** - React framework with App Router
- **React Query** - Data fetching and caching
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React 19** - Latest React features

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd carvana-mini
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with React Query provider
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── CarCard.tsx         # Individual car card component
│   ├── CarListings.tsx     # Grid of car cards
│   ├── CarModal.tsx        # Detail view modal
│   └── FilterBar.tsx       # Filter controls
└── types/
    └── car.ts              # TypeScript interfaces
```

## 🎯 Core Features

### Data Fetching
- Uses React Query for efficient data fetching
- Caches API responses for better performance
- Handles loading and error states gracefully

### Filtering System
- Filter by car make (dynamically populated)
- Filter by price range (predefined ranges)
- Real-time filtering without additional API calls

### Car Details Modal
- Click any car card to view details
- Responsive modal with car information
- Keyboard navigation (ESC to close)

### Favorites System
- Heart icon on each car card
- Local state management for favorites
- Visual feedback for favorited items

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### API Integration

The app uses the [DummyJSON API](https://dummyjson.com/products) to fetch product data and transforms it into car-like data for demonstration purposes.

## 🚀 Future Enhancements

See [TODO.md](./TODO.md) for a comprehensive list of stretch goals and future enhancements.

## 📱 Screenshots

The app features a clean, modern interface with:
- Header with app title and React Query indicator
- Filter bar with make and price range filters
- Responsive grid of car cards
- Detailed modal view for each car
- Favorite functionality with heart icons

## 🤝 Contributing

This is a demo project showcasing React Query integration with Next.js. Feel free to explore the code and use it as a reference for your own projects.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
