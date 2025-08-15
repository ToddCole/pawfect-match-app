// Enhanced breed database for the breeds page
const allBreeds = [
    {
        name: "Labrador Retriever",
        size: "large",
        energy: "high",
        description: "Friendly, outgoing, and active companions who have more than enough affection to go around for a family looking for a medium to large dog.",
        weight: "55-80 lbs",
        height: "21.5-24.5 inches",
        lifespan: "10-12 years",
        grooming: "Moderate",
        training: "Easy",
        good_with_kids: "Excellent",
        good_with_pets: "Excellent",
        temperament: ["Friendly", "Outgoing", "Active"],
        origin: "Newfoundland, Canada"
    },
    {
        name: "Golden Retriever",
        size: "large",
        energy: "high",
        description: "Intelligent, friendly, and devoted dogs that are excellent with children and make wonderful family pets.",
        weight: "55-75 lbs",
        height: "21.5-24 inches",
        lifespan: "10-12 years",
        grooming: "High",
        training: "Easy",
        good_with_kids: "Excellent",
        good_with_pets: "Excellent",
        temperament: ["Intelligent", "Friendly", "Devoted"],
        origin: "Scotland"
    },
    {
        name: "French Bulldog",
        size: "small",
        energy: "low",
        description: "Adaptable, playful, and smart companions that don't need a lot of exercise or grooming.",
        weight: "20-28 lbs",
        height: "11-13 inches",
        lifespan: "10-12 years",
        grooming: "Low",
        training: "Moderate",
        good_with_kids: "Good",
        good_with_pets: "Good",
        temperament: ["Adaptable", "Playful", "Smart"],
        origin: "France"
    },
    {
        name: "German Shepherd",
        size: "large",
        energy: "high",
        description: "Confident, courageous, and smart working dogs that are extremely versatile and loyal to their family.",
        weight: "50-90 lbs",
        height: "22-26 inches",
        lifespan: "9-13 years",
        grooming: "Moderate-High",
        training: "Moderate",
        good_with_kids: "Good with proper socialization",
        good_with_pets: "Moderate",
        temperament: ["Confident", "Courageous", "Smart"],
        origin: "Germany"
    },
    {
        name: "Poodle",
        size: "medium",
        energy: "moderate",
        description: "Intelligent, active, and elegant dogs with wonderful personalities. Available in three sizes.",
        weight: "4-70 lbs (varies by size)",
        height: "10-27 inches (varies by size)",
        lifespan: "12-15 years",
        grooming: "High",
        training: "Easy",
        good_with_kids: "Good",
        good_with_pets: "Good",
        temperament: ["Intelligent", "Active", "Alert"],
        origin: "Germany/France"
    },
    {
        name: "Bulldog",
        size: "medium",
        energy: "low",
        description: "Calm, courageous, and friendly dogs that make excellent companions for apartment living.",
        weight: "40-50 lbs",
        height: "14-15 inches",
        lifespan: "8-10 years",
        grooming: "Low",
        training: "Moderate",
        good_with_kids: "Excellent",
        good_with_pets: "Good",
        temperament: ["Calm", "Courageous", "Friendly"],
        origin: "England"
    },
    {
        name: "Beagle",
        size: "medium",
        energy: "moderate",
        description: "Loving, curious, and merry dogs that make great family pets and are excellent with children.",
        weight: "20-30 lbs",
        height: "13-15 inches",
        lifespan: "10-15 years",
        grooming: "Low",
        training: "Moderate",
        good_with_kids: "Excellent",
        good_with_pets: "Good",
        temperament: ["Loving", "Curious", "Merry"],
        origin: "England"
    },
    {
        name: "Rottweiler",
        size: "large",
        energy: "moderate",
        description: "Loyal, loving, and confident guardians that are calm and courageous with proper training.",
        weight: "80-135 lbs",
        height: "22-27 inches",
        lifespan: "8-10 years",
        grooming: "Low",
        training: "Moderate-Difficult",
        good_with_kids: "Good with proper socialization",
        good_with_pets: "Moderate",
        temperament: ["Loyal", "Loving", "Confident"],
        origin: "Germany"
    },
    {
        name: "Yorkshire Terrier",
        size: "small",
        energy: "moderate",
        description: "Small but mighty terriers with big personalities, perfect for apartment living.",
        weight: "4-7 lbs",
        height: "7-8 inches",
        lifespan: "13-16 years",
        grooming: "High",
        training: "Moderate",
        good_with_kids: "Better with older children",
        good_with_pets: "Moderate",
        temperament: ["Affectionate", "Sprightly", "Tomboyish"],
        origin: "England"
    },
    {
        name: "Siberian Husky",
        size: "large",
        energy: "high",
        description: "Outgoing and mischievous dogs bred for sledding who need lots of exercise and mental stimulation.",
        weight: "35-60 lbs",
        height: "20-23.5 inches",
        lifespan: "12-15 years",
        grooming: "Moderate-High",
        training: "Difficult",
        good_with_kids: "Good",
        good_with_pets: "Moderate",
        temperament: ["Outgoing", "Mischievous", "Loyal"],
        origin: "Siberia"
    },
    {
        name: "Border Collie",
        size: "medium",
        energy: "high",
        description: "Highly intelligent and energetic herding dogs that excel in agility and obedience.",
        weight: "30-55 lbs",
        height: "18-22 inches",
        lifespan: "12-15 years",
        grooming: "Moderate",
        training: "Easy",
        good_with_kids: "Good with active families",
        good_with_pets: "Good",
        temperament: ["Intelligent", "Energetic", "Responsive"],
        origin: "Scotland/England border"
    },
    {
        name: "Great Dane",
        size: "giant",
        energy: "moderate",
        description: "Gentle giants known for their friendly nature and impressive size.",
        weight: "110-175 lbs",
        height: "28-34 inches",
        lifespan: "8-10 years",
        grooming: "Low",
        training: "Moderate",
        good_with_kids: "Excellent",
        good_with_pets: "Good",
        temperament: ["Gentle", "Friendly", "Patient"],
        origin: "Germany"
    }
];

let currentBreeds = [...allBreeds];
let currentSizeFilter = 'all';
let currentEnergyFilter = 'all';

function displayBreeds(breeds) {
    const grid = document.getElementById('breedsGrid');
    grid.innerHTML = '';

    if (breeds.length === 0) {
        grid.innerHTML = '<div class="no-results">No breeds found matching your criteria.</div>';
        return;
    }

    breeds.forEach(breed => {
        const breedCard = document.createElement('div');
        breedCard.className = 'breed-card';
        breedCard.innerHTML = `
            <div class="breed-header">
                <h3>${breed.name}</h3>
                <div class="breed-badges">
                    <span class="badge size-${breed.size}">${breed.size.charAt(0).toUpperCase() + breed.size.slice(1)}</span>
                    <span class="badge energy-${breed.energy}">${breed.energy.charAt(0).toUpperCase() + breed.energy.slice(1)} Energy</span>
                </div>
            </div>
            <p class="breed-description">${breed.description}</p>
            <div class="breed-details">
                <div class="detail-row">
                    <span class="detail-label">Weight:</span>
                    <span class="detail-value">${breed.weight}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Height:</span>
                    <span class="detail-value">${breed.height}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Lifespan:</span>
                    <span class="detail-value">${breed.lifespan}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Grooming:</span>
                    <span class="detail-value">${breed.grooming}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Training:</span>
                    <span class="detail-value">${breed.training}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">Good with Kids:</span>
                    <span class="detail-value">${breed.good_with_kids}</span>
                </div>
            </div>
            <div class="breed-temperament">
                <strong>Temperament:</strong>
                <div class="temperament-tags">
                    ${breed.temperament.map(trait => `<span class="temperament-tag">${trait}</span>`).join('')}
                </div>
            </div>
            <div class="breed-origin">
                <strong>Origin:</strong> ${breed.origin}
            </div>
        `;
        grid.appendChild(breedCard);
    });
}

function filterBreeds() {
    const searchTerm = document.getElementById('breedSearch').value.toLowerCase();
    
    currentBreeds = allBreeds.filter(breed => {
        const matchesSearch = breed.name.toLowerCase().includes(searchTerm) ||
                            breed.description.toLowerCase().includes(searchTerm) ||
                            breed.temperament.some(trait => trait.toLowerCase().includes(searchTerm));
        
        const matchesSize = currentSizeFilter === 'all' || breed.size === currentSizeFilter;
        const matchesEnergy = currentEnergyFilter === 'all' || breed.energy === currentEnergyFilter;
        
        return matchesSearch && matchesSize && matchesEnergy;
    });
    
    displayBreeds(currentBreeds);
}

function filterBySize(size) {
    currentSizeFilter = size;
    
    // Update active button
    document.querySelectorAll('.filter-buttons:nth-child(2) .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    filterBreeds();
}

function filterByEnergy(energy) {
    currentEnergyFilter = energy;
    
    // Update active button
    document.querySelectorAll('.filter-buttons:nth-child(3) .filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    filterBreeds();
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayBreeds(allBreeds);
});