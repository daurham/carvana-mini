"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import CarListings from "@/components/CarListings";
import FilterBar from "@/components/FilterBar";
import CarModal from "@/components/CarModal";
import { Car } from "@/types/car";

// Fetch car data from dummy API
const fetchCars = async (): Promise<Car[]> => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  // console.log(data);
  
  // Transform the products into car-like data
  return data.products.map((product: any, index: number) => ({
    id: product.id,
    make: `Brand ${product.id % 10 + 1}`,
    model: product.title.split(" ").slice(0, 2).join(" "),
    year: 2020 + (product.id % 5),
    price: product.price * 1000,
    mileage: Math.floor(Math.random() * 100000) + 10000,
    image: product.thumbnail,
    description: product.description,
    category: product.category,
    rating: product.rating,
    stock: product.stock,
  }));
};

export default function Home() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [filters, setFilters] = useState({
    make: "",
    priceRange: "",
  });

  const { data: cars, isLoading, error } = useQuery({
    queryKey: ["cars"],
    queryFn: fetchCars,
  });

  const filteredCars = cars?.filter((car) => {
    if (filters.make && car.make !== filters.make) return false;
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split("-").map(Number);
      if (max && car.price > max * 1000) return false;
      if (min && car.price < min * 1000) return false;
    }
    return true;
  });

  const availableMakes = cars
    ? [...new Set(cars.map((car) => car.make))].sort()
    : [];

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">
            Error loading car listings
          </h1>
          <p className="text-gray-600">
            Please try refreshing the page or check your connection.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">
              Carvana Listings Viewer
            </h1>
            <div className="text-sm text-gray-500">
              Powered by React Query
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FilterBar
          filters={filters}
          setFilters={setFilters}
          availableMakes={availableMakes}
        />
        
        <CarListings
          cars={filteredCars || []}
          isLoading={isLoading}
          onCarSelect={setSelectedCar}
        />
      </main>

      {selectedCar && (
        <CarModal
          car={selectedCar}
          onClose={() => setSelectedCar(null)}
        />
      )}
    </div>
  );
}
