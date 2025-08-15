// Quiz data
const questions = [
    {
        question: "What's your living situation?",
        options: [
            { text: "Apartment/Condo", value: "apartment", traits: ["small", "low_exercise"] },
            { text: "House with small yard", value: "small_yard", traits: ["medium", "moderate_exercise"] },
            { text: "House with large yard", value: "large_yard", traits: ["large", "high_exercise"] },
            { text: "Farm/Rural property", value: "farm", traits: ["large", "high_exercise", "working"] }
        ]
    },
    {
        question: "How active are you?",
        options: [
            { text: "Low activity (prefer indoor activities)", value: "low", traits: ["low_exercise", "calm"] },
            { text: "Moderate activity (daily walks, weekend outings)", value: "moderate", traits: ["moderate_exercise"] },
            { text: "High activity (running, hiking, outdoor sports)", value: "high", traits: ["high_exercise", "energetic"] },
            { text: "Very active (athlete, outdoor enthusiast)", value: "very_high", traits: ["high_exercise", "working", "energetic"] }
        ]
    },
    {
        question: "Experience with dogs?",
        options: [
            { text: "First-time dog owner", value: "beginner", traits: ["easy_training", "gentle"] },
            { text: "Some experience", value: "some", traits: ["moderate_training"] },
            { text: "Very experienced", value: "experienced", traits: ["challenging_training", "working"] },
            { text: "Professional/Breeder", value: "expert", traits: ["challenging_training", "working", "specialized"] }
        ]
    },
    {
        question: "How much time can you dedicate to grooming?",
        options: [
            { text: "Minimal (occasional brushing)", value: "minimal", traits: ["low_grooming"] },
            { text: "Moderate (weekly grooming)", value: "moderate", traits: ["moderate_grooming"] },
            { text: "High (daily brushing, regular professional grooming)", value: "high", traits: ["high_grooming"] },
            { text: "I love grooming and don't mind daily maintenance", value: "enjoy", traits: ["high_grooming", "show_quality"] }
        ]
    },
    {
        question: "Family situation?",
        options: [
            { text: "Single person/Couple with no kids", value: "adults_only", traits: ["independent"] },
            { text: "Family with young children (under 10)", value: "young_kids", traits: ["gentle", "patient", "family_friendly"] },
            { text: "Family with older children/teens", value: "older_kids", traits: ["family_friendly", "energetic"] },
            { text: "Multi-generational household", value: "multi_gen", traits: ["gentle", "adaptable"] }
        ]
    },
    {
        question: "What size dog do you prefer?",
        options: [
            { text: "Small (under 25 lbs)", value: "small", traits: ["small", "lap_dog"] },
            { text: "Medium (25-60 lbs)", value: "medium", traits: ["medium"] },
            { text: "Large (60-90 lbs)", value: "large", traits: ["large"] },
            { text: "Giant (over 90 lbs)", value: "giant", traits: ["giant", "gentle_giant"] }
        ]
    },
    {
        question: "What's your primary reason for getting a dog?",
        options: [
            { text: "Companionship/Family pet", value: "companion", traits: ["gentle", "family_friendly"] },
            { text: "Protection/Guard dog", value: "protection", traits: ["protective", "loyal", "large"] },
            { text: "Outdoor activities/Exercise partner", value: "exercise", traits: ["high_exercise", "energetic"] },
            { text: "Therapy/Emotional support", value: "therapy", traits: ["calm", "gentle", "intuitive"] }
        ]
    }
];

// Dog breed database with traits
const breeds = [
    {
        name: "Labrador Retriever",
        traits: ["family_friendly", "gentle", "moderate_exercise", "medium", "large", "easy_training", "moderate_grooming"],
        description: "Friendly, outgoing, and active companions who have more than enough affection to go around for a family looking for a medium to large dog.",
        size: "Large (55-80 lbs)",
        energy: "High",
        grooming: "Moderate",
        training: "Easy",
        good_with_kids: "Excellent"
    },
    {
        name: "Golden Retriever",
        traits: ["family_friendly", "gentle", "moderate_exercise", "large", "easy_training", "high_grooming"],
        description: "Intelligent, friendly, and devoted dogs that are excellent with children and make wonderful family pets.",
        size: "Large (55-75 lbs)",
        energy: "High",
        grooming: "High",
        training: "Easy",
        good_with_kids: "Excellent"
    },
    {
        name: "French Bulldog",
        traits: ["small", "low_exercise", "easy_training", "low_grooming", "apartment", "gentle"],
        description: "Adaptable, playful, and smart companions that don't need a lot of exercise or grooming.",
        size: "Small (20-28 lbs)",
        energy: "Low-Moderate",
        grooming: "Low",
        training: "Moderate",
        good_with_kids: "Good"
    },
    {
        name: "German Shepherd",
        traits: ["large", "high_exercise", "protective", "loyal", "challenging_training", "moderate_grooming", "working"],
        description: "Confident, courageous, and smart working dogs that are extremely versatile and loyal to their family.",
        size: "Large (50-90 lbs)",
        energy: "High",
        grooming: "Moderate-High",
        training: "Moderate",
        good_with_kids: "Good with proper socialization"
    },
    {
        name: "Poodle",
        traits: ["high_grooming", "easy_training", "moderate_exercise", "medium", "intelligent"],
        description: "Intelligent, active, and elegant dogs with wonderful personalities. Available in three sizes.",
        size: "Varies (4-70 lbs)",
        energy: "Moderate-High",
        grooming: "High",
        training: "Easy",
        good_with_kids: "Good"
    },
    {
        name: "Bulldog",
        traits: ["low_exercise", "gentle", "medium", "low_grooming", "calm", "apartment"],
        description: "Calm, courageous, and friendly dogs that make excellent companions for apartment living.",
        size: "Medium (40-50 lbs)",
        energy: "Low",
        grooming: "Low",
        training: "Moderate",
        good_with_kids: "Excellent"
    },
    {
        name: "Beagle",
        traits: ["family_friendly", "moderate_exercise", "medium", "moderate_grooming", "gentle"],
        description: "Loving, curious, and merry dogs that make great family pets and are excellent with children.",
        size: "Medium (20-30 lbs)",
        energy: "Moderate-High",
        grooming: "Low",
        training: "Moderate",
        good_with_kids: "Excellent"
    },
    {
        name: "Rottweiler",
        traits: ["large", "protective", "loyal", "challenging_training", "high_exercise", "working"],
        description: "Loyal, loving, and confident guardians that are calm and courageous with proper training.",
        size: "Large (80-135 lbs)",
        energy: "Moderate-High",
        grooming: "Low",
        training: "Moderate-Difficult",
        good_with_kids: "Good with proper socialization"
    },
    {
        name: "Yorkshire Terrier",
        traits: ["small", "low_exercise", "high_grooming", "apartment", "lap_dog"],
        description: "Small but mighty terriers with big personalities, perfect for apartment living.",
        size: "Small (4-7 lbs)",
        energy: "Moderate",
        grooming: "High",
        training: "Moderate",
        good_with_kids: "Better with older children"
    },
    {
        name: "Siberian Husky",
        traits: ["large", "high_exercise", "energetic", "challenging_training", "moderate_grooming", "working"],
        description: "Outgoing and mischievous dogs bred for sledding who need lots of exercise and mental stimulation.",
        size: "Large (35-60 lbs)",
        energy: "Very High",
        grooming: "Moderate-High",
        training: "Difficult",
        good_with_kids: "Good"
    }
];

// Quiz state
let currentQuestion = 0;
let userAnswers = [];
let userTraits = [];

function startQuiz() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    
    currentQuestion = 0;
    userAnswers = [];
    userTraits = [];
    
    displayQuestion();
}

function displayQuestion() {
    const container = document.getElementById('questionContainer');
    const question = questions[currentQuestion];
    
    container.innerHTML = `
        <div class="question active">
            <h3>${question.question}</h3>
            <div class="options">
                ${question.options.map((option, index) => `
                    <div class="option" onclick="selectOption(${index})">
                        ${option.text}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    updateProgress();
    updateNavButtons();
}

function selectOption(optionIndex) {
    const options = document.querySelectorAll('.option');
    options.forEach(opt => opt.classList.remove('selected'));
    options[optionIndex].classList.add('selected');
    
    userAnswers[currentQuestion] = optionIndex;
    
    // Enable next button
    document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
    if (userAnswers[currentQuestion] === undefined) return;
    
    // Add traits from selected option
    const selectedOption = questions[currentQuestion].options[userAnswers[currentQuestion]];
    userTraits.push(...selectedOption.traits);
    
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        displayQuestion();
    } else {
        showResults();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
        
        // Re-select previous answer if exists
        if (userAnswers[currentQuestion] !== undefined) {
            const options = document.querySelectorAll('.option');
            options[userAnswers[currentQuestion]].classList.add('selected');
            document.getElementById('nextBtn').disabled = false;
        }
    }
}

function updateProgress() {
    const progress = (currentQuestion / questions.length) * 100;
    document.getElementById('progress').style.width = `${progress}%`;
}

function updateNavButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.disabled = currentQuestion === 0;
    nextBtn.disabled = userAnswers[currentQuestion] === undefined;
    
    if (currentQuestion === questions.length - 1) {
        nextBtn.textContent = 'See Results';
    } else {
        nextBtn.textContent = 'Next';
    }
}

function showResults() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    
    const matches = calculateMatches();
    displayMatches(matches);
}

function calculateMatches() {
    const traitCounts = {};
    userTraits.forEach(trait => {
        traitCounts[trait] = (traitCounts[trait] || 0) + 1;
    });
    
    const breedScores = breeds.map(breed => {
        let score = 0;
        breed.traits.forEach(trait => {
            if (traitCounts[trait]) {
                score += traitCounts[trait];
            }
        });
        return { breed, score };
    });
    
    return breedScores
        .sort((a, b) => b.score - a.score)
        .slice(0, 3)
        .filter(match => match.score > 0);
}

function displayMatches(matches) {
    const container = document.getElementById('breedResults');
    
    if (matches.length === 0) {
        container.innerHTML = '<p>No perfect matches found. Consider adjusting your preferences.</p>';
        return;
    }
    
    container.innerHTML = matches.map((match, index) => `
        <div class="breed-card">
            <h3>${match.breed.name}</h3>
            <p><strong>Match Score:</strong> ${Math.round((match.score / userTraits.length) * 100)}%</p>
            <p>${match.breed.description}</p>
            <div class="breed-info">
                <div class="info-item">
                    <strong>Size:</strong>
                    ${match.breed.size}
                </div>
                <div class="info-item">
                    <strong>Energy Level:</strong>
                    ${match.breed.energy}
                </div>
                <div class="info-item">
                    <strong>Grooming Needs:</strong>
                    ${match.breed.grooming}
                </div>
                <div class="info-item">
                    <strong>Training Difficulty:</strong>
                    ${match.breed.training}
                </div>
                <div class="info-item">
                    <strong>Good with Kids:</strong>
                    ${match.breed.good_with_kids}
                </div>
            </div>
        </div>
    `).join('');
}

function restartQuiz() {
    startQuiz();
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});