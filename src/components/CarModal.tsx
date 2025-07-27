"use client";

import { useEffect } from "react";
import { Car } from "@/types/car";

interface CarModalProps {
  car: Car;
  onClose: () => void;
}

export default function CarModal({ car, onClose }: CarModalProps) {
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

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-sm hover:bg-gray-50 transition-colors"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <img
            src={car.image}
            alt={`${car.year} ${car.make} ${car.model}`}
            className="w-full h-64 object-cover rounded-t-lg"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://via.placeholder.com/800x400?text=Car+Image";
            }}
          />
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {car.year} {car.make} {car.model}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500">Price:</span>
                <span className="font-semibold text-green-600 text-lg">
                  {formatPrice(car.price)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Mileage:</span>
                <span className="text-gray-900">
                  {formatMileage(car.mileage)} mi
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Year:</span>
                <span className="text-gray-900">{car.year}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Category:</span>
                <span className="text-gray-900 capitalize">{car.category}</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500">Rating:</span>
                <div className="flex items-center">
                  <span className="text-yellow-500 mr-1">★</span>
                  <span className="text-gray-900">{car.rating}/5</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Stock:</span>
                <span className="text-gray-900">{car.stock} available</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Make:</span>
                <span className="text-gray-900">{car.make}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Model:</span>
                <span className="text-gray-900">{car.model}</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Description
            </h3>
            <p className="text-gray-600 leading-relaxed">{car.description}</p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 bg-gray-200 text-gray-800 py-3 px-4 rounded-md hover:bg-gray-300 transition-colors font-medium"
            >
              Close
            </button>
            <button className="flex-1 bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 transition-colors font-medium">
              Contact Seller
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 