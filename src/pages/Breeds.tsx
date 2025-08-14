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
    <div className="page">
      <div className="page-content">
        <h1 className="page-title">Dog Breed Database</h1>
        <p className="page-text" style={{textAlign: 'center', fontSize: '1.2rem', marginBottom: '3rem'}}>
          Explore our comprehensive database of dog breeds with detailed information about each breed's characteristics.
        </p>

        {/* Search and Filters */}
        <div className="card page-section">
          <div className="form-group">
            <input
              type="text"
              placeholder="Search breeds..."
              value={filters.searchTerm}
              onChange={(e) => handleFilterChange('searchTerm', e.target.value)}
              className="form-input"
            />
          </div>

          <div style={{marginBottom: '1.5rem'}}>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center'}}>
              <span className="form-label" style={{margin: 0, marginRight: '0.5rem'}}>Size:</span>
              {['all', 'small', 'medium', 'large', 'giant'].map(size => (
                <button
                  key={size}
                  onClick={() => handleFilterChange('size', size)}
                  className={filters.size === size ? 'btn-primary' : 'btn-secondary'}
                  style={{padding: '0.5rem 1rem', fontSize: '0.9rem'}}
                >
                  {size.charAt(0).toUpperCase() + size.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', alignItems: 'center'}}>
              <span className="form-label" style={{margin: 0, marginRight: '0.5rem'}}>Energy:</span>
              {['all', 'low', 'moderate', 'high'].map(energy => (
                <button
                  key={energy}
                  onClick={() => handleFilterChange('energy', energy)}
                  className={filters.energy === energy ? 'btn-primary' : 'btn-secondary'}
                  style={{padding: '0.5rem 1rem', fontSize: '0.9rem'}}
                >
                  {energy.charAt(0).toUpperCase() + energy.slice(1)} Energy
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        {filteredBreeds.length === 0 ? (
          <div className="page-section" style={{textAlign: 'center', padding: '3rem 0'}}>
            <h3 className="section-heading">No breeds found</h3>
            <p className="page-text">Try adjusting your search criteria to find more breeds.</p>
          </div>
        ) : (
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem'}}>
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