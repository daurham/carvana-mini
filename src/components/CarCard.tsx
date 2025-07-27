"use client";

import { Car } from "@/types/car";

interface CarCardProps {
  car: Car;
  isFavorite: boolean;
  onFavoriteToggle: () => void;
  onSelect: () => void;
}

export default function CarCard({ car, isFavorite, onFavoriteToggle, onSelect }: CarCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat("en-US").format(mileage);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow cursor-pointer">
      <div className="relative">
        <img
          src={car.image}
          alt={`${car.year} ${car.make} ${car.model}`}
          className="w-full h-48 object-cover rounded-t-lg"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://via.placeholder.com/400x300?text=Car+Image";
          }}
        />
        <button
          onClick={(e) => {
            e.stopPropagation();
            onFavoriteToggle();
          }}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors"
        >
          <svg
            className={`w-5 h-5 ${
              isFavorite ? "text-red-500 fill-current" : "text-gray-400"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      <div className="p-4" onClick={onSelect}>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">
            {car.year} {car.make} {car.model}
          </h3>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Price:</span>
            <span className="font-semibold text-green-600">
              {formatPrice(car.price)}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Mileage:</span>
            <span className="text-gray-900">
              {formatMileage(car.mileage)} mi
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Rating:</span>
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">★</span>
              <span className="text-gray-900">{car.rating}</span>
            </div>
          </div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelect();
          }}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
        >
          View Details
        </button>
      </div>
    </div>
  );
} 