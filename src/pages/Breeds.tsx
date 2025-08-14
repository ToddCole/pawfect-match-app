import React, { useState, useMemo } from 'react';
import BreedCard from '../components/Breeds/BreedCard';
import { breedDatabase } from '../utils/breedData';
import type { BreedFilters } from '../types';

const Breeds: React.FC = () => {
  const [filters, setFilters] = useState<BreedFilters>({
    size: 'all',
    energy: 'all',
    searchTerm: ''
  });

  const filteredBreeds = useMemo(() => {
    return breedDatabase.filter(breed => {
      const matchesSearch = breed.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                           breed.description.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
                           breed.temperament.some(trait => trait.toLowerCase().includes(filters.searchTerm.toLowerCase()));
      
      const matchesSize = filters.size === 'all' || breed.size === filters.size;
      const matchesEnergy = filters.energy === 'all' || breed.energy === filters.energy;
      
      return matchesSearch && matchesSize && matchesEnergy;
    });
  }, [filters]);

  const handleFilterChange = (filterType: keyof BreedFilters, value: string) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-400 mb-4">
            Dog Breed Database
          </h1>
          <p className="text-xl text-primary-500">
            Explore our comprehensive database of dog breeds with detailed information about each breed's characteristics.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="card mb-12">
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search breeds..."
              value={filters.searchTerm}
              onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
              className="input-field"
            />
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex flex-wrap gap-2">
              <span className="font-semibold text-primary-400 mr-2">Size:</span>
              {['all', 'small', 'medium', 'large', 'giant'].map(size => (
                <button
                  key={size}
                  onClick={() => handleFilterChange('size', size)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filters.size === size
                      ? 'bg-primary-300 text-white'
                      : 'btn-secondary'
                  }`}
                >
                  {size.charAt(0).toUpperCase() + size.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <div className="flex flex-wrap gap-2">
              <span className="font-semibold text-primary-400 mr-2">Energy:</span>
              {['all', 'low', 'moderate', 'high'].map(energy => (
                <button
                  key={energy}
                  onClick={() => handleFilterChange('energy', energy)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filters.energy === energy
                      ? 'bg-primary-300 text-white'
                      : 'btn-secondary'
                  }`}
                >
                  {energy.charAt(0).toUpperCase() + energy.slice(1)} Energy
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        {filteredBreeds.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-2xl font-bold text-primary-400 mb-4">No breeds found</h3>
            <p className="text-primary-500">Try adjusting your search criteria to find more breeds.</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredBreeds.map(breed => (
              <BreedCard key={breed.name} breed={breed} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Breeds;