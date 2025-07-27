"use client";

interface FilterBarProps {
  filters: {
    make: string;
    priceRange: string;
  };
  setFilters: (filters: { make: string; priceRange: string }) => void;
  availableMakes: string[];
}

export default function FilterBar({ filters, setFilters, availableMakes }: FilterBarProps) {
  const priceRanges = [
    { value: "", label: "All Prices" },
    { value: "0-20", label: "Under $20k" },
    { value: "20-40", label: "$20k - $40k" },
    { value: "40-60", label: "$40k - $60k" },
    { value: "60-100", label: "$60k - $100k" },
    { value: "100-", label: "Over $100k" },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">Filters</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="make-filter" className="block text-sm font-medium text-gray-700 mb-2">
            Make
          </label>
          <select
            id="make-filter"
            value={filters.make}
            onChange={(e) => setFilters({ ...filters, make: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">All Makes</option>
            {availableMakes.map((make) => (
              <option key={make} value={make}>
                {make}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="price-filter" className="block text-sm font-medium text-gray-700 mb-2">
            Price Range
          </label>
          <select
            id="price-filter"
            value={filters.priceRange}
            onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {priceRanges.map((range) => (
              <option key={range.value} value={range.value}>
                {range.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
} 