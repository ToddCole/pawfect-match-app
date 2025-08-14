import React from 'react';
import type { Breed } from '../../types';

interface BreedCardProps {
  breed: Breed;
  showCompatibility?: boolean;
  compatibility?: number;
}

const BreedCard: React.FC<BreedCardProps> = ({ 
  breed, 
  showCompatibility = false, 
  compatibility 
}) => {
  const getSizeBadgeColor = (size: string) => {
    switch (size) {
      case 'small': return 'bg-primary-300 text-white';
      case 'medium': return 'bg-primary-200 text-primary-400';
      case 'large': return 'bg-primary-400 text-white';
      case 'giant': return 'bg-primary-500 text-white';
      default: return 'bg-gray-300 text-gray-700';
    }
  };

  const getEnergyBadgeColor = (energy: string) => {
    switch (energy) {
      case 'low': return 'bg-green-200 text-green-800';
      case 'moderate': return 'bg-primary-200 text-primary-400';
      case 'high': return 'bg-primary-300 text-white';
      default: return 'bg-gray-300 text-gray-700';
    }
  };

  return (
    <div className="card">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-primary-400">{breed.name}</h3>
        <div className="flex flex-col gap-2">
          <span className={`px-3 py-1 rounded-full text-sm font-bold text-center ${getSizeBadgeColor(breed.size)}`}>
            {breed.size.charAt(0).toUpperCase() + breed.size.slice(1)}
          </span>
          <span className={`px-3 py-1 rounded-full text-sm font-bold text-center ${getEnergyBadgeColor(breed.energy)}`}>
            {breed.energy.charAt(0).toUpperCase() + breed.energy.slice(1)} Energy
          </span>
        </div>
      </div>

      {showCompatibility && compatibility !== undefined && (
        <div className="mb-4">
          <div className="text-lg font-semibold text-primary-300">
            {Math.round(compatibility)}% Match
          </div>
        </div>
      )}

      <p className="text-primary-500 mb-6 leading-relaxed">{breed.description}</p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex justify-between py-2 border-b border-primary-200">
          <span className="font-semibold text-primary-400">Weight:</span>
          <span className="text-primary-500">{breed.weight}</span>
        </div>
        <div className="flex justify-between py-2 border-b border-primary-200">
          <span className="font-semibold text-primary-400">Height:</span>
          <span className="text-primary-500">{breed.height}</span>
        </div>
        <div className="flex justify-between py-2 border-b border-primary-200">
          <span className="font-semibold text-primary-400">Lifespan:</span>
          <span className="text-primary-500">{breed.lifespan}</span>
        </div>
        <div className="flex justify-between py-2 border-b border-primary-200">
          <span className="font-semibold text-primary-400">Grooming:</span>
          <span className="text-primary-500">{breed.grooming}</span>
        </div>
        <div className="flex justify-between py-2 border-b border-primary-200">
          <span className="font-semibold text-primary-400">Training:</span>
          <span className="text-primary-500">{breed.training}</span>
        </div>
        <div className="flex justify-between py-2 border-b border-primary-200">
          <span className="font-semibold text-primary-400">Good with Kids:</span>
          <span className="text-primary-500">{breed.good_with_kids}</span>
        </div>
      </div>

      <div className="mb-4">
        <span className="font-semibold text-primary-400">Temperament:</span>
        <div className="flex flex-wrap gap-2 mt-2">
          {breed.temperament.map((trait, index) => (
            <span
              key={index}
              className="bg-primary-50 text-primary-400 px-3 py-1 rounded-full text-sm border border-primary-200"
            >
              {trait}
            </span>
          ))}
        </div>
      </div>

      <div className="text-sm text-primary-500">
        <span className="font-semibold">Origin:</span> {breed.origin}
      </div>
    </div>
  );
};

export default BreedCard;