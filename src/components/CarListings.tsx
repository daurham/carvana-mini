"use client";

import { useState } from "react";
import { Car } from "@/types/car";
import CarCard from "./CarCard";

interface CarListingsProps {
  cars: Car[];
  isLoading: boolean;
  onCarSelect: (car: Car) => void;
}

export default function CarListings({ cars, isLoading, onCarSelect }: CarListingsProps) {
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const toggleFavorite = (carId: number) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(carId)) {
      newFavorites.delete(carId);
    } else {
      newFavorites.add(carId);
    }
    setFavorites(newFavorites);
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border animate-pulse"
          >
            <div className="h-48 bg-gray-200 rounded-t-lg"></div>
            <div className="p-4">
              <div className="h-4 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded mb-2 w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (cars.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          No cars found
        </h3>
        <p className="text-gray-500">
          Try adjusting your filters to see more results.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {cars.map((car) => (
        <CarCard
          key={car.id}
          car={car}
          isFavorite={favorites.has(car.id)}
          onFavoriteToggle={() => toggleFavorite(car.id)}
          onSelect={() => onCarSelect(car)}
        />
      ))}
    </div>
  );
} 