const carbonData = {
    aiQuery: 4.32, // grams CO2e per ChatGPT query (2025 data: 0.3 Wh)
    
    categories: {
        transport: {
            name: "🚗 Transportation",
            activities: {
                "drive-mile-gas": { name: "Drive 1 mile (gas car)", co2: 400, unit: "mile", icon: "🚗", funFact: "Average US car emissions" },
                "drive-mile-hybrid": { name: "Drive 1 mile (hybrid)", co2: 260, unit: "mile", icon: "🚙", funFact: "40% less than regular cars!" },
                "drive-mile-ev": { name: "Drive 1 mile (EV)", co2: 200, unit: "mile", icon: "🔋", funFact: "Depends on your local grid mix" },
                "escooter-mile": { name: "E-scooter 1 mile", co2: 25, unit: "mile", icon: "🛴", funFact: "16x better than driving!" },
                "ebike-mile": { name: "E-bike 1 mile", co2: 8, unit: "mile", icon: "🚴", funFact: "Almost carbon-free transport!" },
                "bus-mile": { name: "Bus 1 mile", co2: 100, unit: "mile", icon: "🚌", funFact: "Better when full of passengers" },
                "subway-mile": { name: "Subway 1 mile", co2: 40, unit: "mile", icon: "🚇", funFact: "Most efficient mass transit" },
                "flight-hour": { name: "Fly 1 hour (economy)", co2: 90000, unit: "hour", icon: "✈️", funFact: "20,833 AI queries worth!" },
                "flight-hour-first": { name: "Fly 1 hour (first class)", co2: 270000, unit: "hour", icon: "🥇", funFact: "3x economy emissions!" },
                "train-mile": { name: "Train 1 mile", co2: 50, unit: "mile", icon: "🚂", funFact: "Varies greatly by country" },
                "uber-mile": { name: "Uber/Lyft 1 mile", co2: 450, unit: "mile", icon: "🚕", funFact: "Includes deadheading" }
            }
        },
        food: {
            name: "🍔 Food & Drink",
            activities: {
                "hamburger": { name: "Eat a hamburger", co2: 5768, unit: "burger", icon: "🍔", funFact: "Beef has highest food emissions" },
                "chicken-meal": { name: "Chicken dinner", co2: 1500, unit: "meal", icon: "🍗", funFact: "1/4 the emissions of beef" },
                "vegan-meal": { name: "Vegan meal", co2: 500, unit: "meal", icon: "🥗", funFact: "Plant-based for the win!" },
                "pizza": { name: "Large pizza", co2: 2200, unit: "pizza", icon: "🍕", funFact: "Cheese is the main culprit" },
                "coffee": { name: "Cup of coffee", co2: 21, unit: "cup", icon: "☕", funFact: "Black coffee is greenest" },
                "latte": { name: "Latte", co2: 65, unit: "cup", icon: "☕", funFact: "Milk triples the footprint" },
                "beer": { name: "Pint of beer", co2: 500, unit: "pint", icon: "🍺", funFact: "Local brews are better" },
                "wine": { name: "Glass of wine", co2: 400, unit: "glass", icon: "🍷", funFact: "Shipping adds a lot" },
                "banana": { name: "Eat a banana", co2: 80, unit: "banana", icon: "🍌", funFact: "Shipped by boat, not air" },
                "avocado": { name: "Eat an avocado", co2: 250, unit: "avocado", icon: "🥑", funFact: "Water-intensive crop" },
                "steak": { name: "8oz steak", co2: 8000, unit: "steak", icon: "🥩", funFact: "1,851 AI queries!" }
            }
        },
        home: {
            name: "🏠 Home & Daily Life", 
            activities: {
                "dishwasher": { name: "Run dishwasher", co2: 700, unit: "load", icon: "🍽️", funFact: "Better than hand washing!" },
                "laundry-hot": { name: "Laundry (hot water)", co2: 2400, unit: "load", icon: "🔥", funFact: "Most energy goes to heating" },
                "laundry-cold": { name: "Laundry (cold water)", co2: 600, unit: "load", icon: "❄️", funFact: "75% less than hot!" },
                "dryer": { name: "Run dryer", co2: 1800, unit: "load", icon: "👔", funFact: "Air drying saves all this" },
                "shower-5min": { name: "5-minute hot shower", co2: 500, unit: "shower", icon: "🚿", funFact: "Quick showers save a lot" },
                "bath": { name: "Take a bath", co2: 1100, unit: "bath", icon: "🛁", funFact: "Uses 2x shower water" },
                "ac-hour": { name: "AC for 1 hour", co2: 1000, unit: "hour", icon: "❄️", funFact: "Biggest home energy user" },
                "heating-hour": { name: "Heat home 1 hour", co2: 2200, unit: "hour", icon: "🔥", funFact: "Insulation helps a lot" },
                "kettle": { name: "Boil kettle", co2: 70, unit: "boil", icon: "🫖", funFact: "Only boil what you need" },
                "microwave-5min": { name: "Microwave 5 min", co2: 40, unit: "use", icon: "📡", funFact: "Very efficient cooking" },
                "oven-hour": { name: "Oven for 1 hour", co2: 1500, unit: "hour", icon: "🔥", funFact: "Batch cooking saves energy" }
            }
        },
        tech: {
            name: "💻 Technology & Entertainment",
            activities: {
                "streaming": { name: "Stream Netflix 1hr", co2: 55, unit: "hour", icon: "📺", funFact: "HD uses 1/4 of 4K" },
                "gaming-hour": { name: "Gaming 1 hour", co2: 120, unit: "hour", icon: "🎮", funFact: "PC gaming uses more" },
                "zoom-hour": { name: "Zoom call 1 hour", co2: 150, unit: "hour", icon: "💻", funFact: "Video adds a lot" },
                "phone-charge": { name: "Charge phone", co2: 4, unit: "charge", icon: "📱", funFact: "Less than 1 AI query!" },
                "laptop-hour": { name: "Laptop 1 hour", co2: 20, unit: "hour", icon: "💻", funFact: "Efficient computing" },
                "tv-hour": { name: "Watch TV 1 hour", co2: 70, unit: "hour", icon: "📺", funFact: "Bigger screens = more energy" },
                "email": { name: "Send an email", co2: 4, unit: "email", icon: "📧", funFact: "Same as 1 AI query!" },
                "google-search": { name: "Google search", co2: 0.2, unit: "search", icon: "🔍", funFact: "22x less than AI query" },
                "photo-cloud": { name: "Store 100 photos in cloud", co2: 10, unit: "batch", icon: "☁️", funFact: "Annual storage cost" }
            }
        },
        shopping: {
            name: "🛍️ Shopping & Lifestyle",
            activities: {
                "tshirt": { name: "Buy a t-shirt", co2: 7000, unit: "shirt", icon: "👕", funFact: "Fast fashion hurts" },
                "jeans": { name: "Buy jeans", co2: 33000, unit: "pair", icon: "👖", funFact: "7,638 AI queries!" },
                "shoes": { name: "Buy sneakers", co2: 14000, unit: "pair", icon: "👟", funFact: "Manufacturing is intensive" },
                "book": { name: "Buy paperback book", co2: 1000, unit: "book", icon: "📚", funFact: "E-books are greener" },
                "plastic-bag": { name: "Plastic bag", co2: 10, unit: "bag", icon: "🛍️", funFact: "Reusable is better" },
                "delivery": { name: "Package delivery", co2: 600, unit: "delivery", icon: "📦", funFact: "Last mile is worst" },
                "phone-new": { name: "Buy new smartphone", co2: 70000, unit: "phone", icon: "📱", funFact: "16,203 AI queries!" },
                "laptop-new": { name: "Buy new laptop", co2: 300000, unit: "laptop", icon: "💻", funFact: "Keep devices longer!" }
            }
        }
    },
    
    // Custom activity patterns for parsing user input
    customPatterns: {
        transport: [
            { pattern: /ride.*e-?scooter.*?(\d+).*?mile/i, co2PerUnit: 25, unit: "mile", name: "E-scooter ride" },
            { pattern: /ride.*bike.*?(\d+).*?mile/i, co2PerUnit: 2, unit: "mile", name: "Regular bike ride" },
            { pattern: /walk.*?(\d+).*?mile/i, co2PerUnit: 0, unit: "mile", name: "Walking" },
            { pattern: /drive.*?(\d+).*?mile/i, co2PerUnit: 400, unit: "mile", name: "Driving" },
            { pattern: /fly.*?(\d+).*?hour/i, co2PerUnit: 90000, unit: "hour", name: "Flying" },
            { pattern: /train.*?(\d+).*?mile/i, co2PerUnit: 50, unit: "mile", name: "Train ride" },
            { pattern: /bus.*?(\d+).*?mile/i, co2PerUnit: 100, unit: "mile", name: "Bus ride" }
        ],
        food: [
            { pattern: /eat.*?(\d+).*?burger/i, co2PerUnit: 5768, unit: "burger", name: "Eating burgers" },
            { pattern: /drink.*?(\d+).*?coffee/i, co2PerUnit: 21, unit: "cup", name: "Drinking coffee" },
            { pattern: /eat.*?(\d+).*?pizza/i, co2PerUnit: 2200, unit: "pizza", name: "Eating pizza" },
            { pattern: /eat.*?(\d+).*?steak/i, co2PerUnit: 8000, unit: "steak", name: "Eating steak" }
        ],
        home: [
            { pattern: /shower.*?(\d+).*?minute/i, co2PerUnit: 100, unit: "minute", name: "Showering" },
            { pattern: /run.*?dishwasher.*?(\d+)/i, co2PerUnit: 700, unit: "load", name: "Running dishwasher" },
            { pattern: /do.*?laundry.*?(\d+)/i, co2PerUnit: 600, unit: "load", name: "Doing laundry" }
        ]
    },
    
    // Flatten activities for backward compatibility
    activities: {},
    
    tradeOffs: [
        "Skip one hamburger = 1,335 guilt-free AI queries!",
        "Take one less hot shower = 115 AI conversations",
        "Walk instead of driving 1 mile = 92 AI queries earned",
        "Watch 1 hour less Netflix = 12 AI queries",
        "Use cold water for laundry = 450 AI query credits",
        "Skip that latte for regular coffee = 14 bonus AI queries"
    ]
};

// Initialize flattened activities
for (const category of Object.values(carbonData.categories)) {
    Object.assign(carbonData.activities, category.activities);
}

// Parse custom activity input
function parseCustomActivity(input) {
    input = input.toLowerCase();
    
    // Check all pattern categories
    for (const [category, patterns] of Object.entries(carbonData.customPatterns)) {
        for (const pattern of patterns) {
            const match = input.match(pattern.pattern);
            if (match) {
                const quantity = parseInt(match[1]) || 1;
                return {
                    name: pattern.name,
                    co2: quantity * pattern.co2PerUnit,
                    quantity: quantity,
                    unit: pattern.unit,
                    co2PerUnit: pattern.co2PerUnit,
                    category: category
                };
            }
        }
    }
    
    // If no pattern matches, try to extract numbers and make a guess
    const numberMatch = input.match(/(\d+)/);
    const quantity = numberMatch ? parseInt(numberMatch[1]) : 1;
    
    // Common keywords
    if (input.includes('scooter')) return { name: "E-scooter ride", co2: quantity * 25, quantity, unit: "mile", co2PerUnit: 25 };
    if (input.includes('bike')) return { name: "Bike ride", co2: quantity * 2, quantity, unit: "mile", co2PerUnit: 2 };
    if (input.includes('car') || input.includes('drive')) return { name: "Driving", co2: quantity * 400, quantity, unit: "mile", co2PerUnit: 400 };
    if (input.includes('fly') || input.includes('flight')) return { name: "Flying", co2: quantity * 90000, quantity, unit: "hour", co2PerUnit: 90000 };
    if (input.includes('burger')) return { name: "Eating burgers", co2: quantity * 5768, quantity, unit: "burger", co2PerUnit: 5768 };
    if (input.includes('coffee')) return { name: "Drinking coffee", co2: quantity * 21, quantity, unit: "cup", co2PerUnit: 21 };
    
    return null;
}

function calculateEquivalent() {
    const activitySelect = document.getElementById('activity-select');
    const queryCount = document.getElementById('query-count');
    const customActivityInput = document.getElementById('custom-activity-input');
    const resultsDiv = document.getElementById('results');
    const resultTitle = document.getElementById('result-title');
    const resultMain = document.getElementById('result-main');
    const resultComparison = document.getElementById('result-comparison');
    const tradeOffDiv = document.getElementById('trade-off-suggestion');
    
    let co2Amount;
    let isCustomQuery = false;
    let isCustomActivity = false;
    let customActivity = null;
    
    if (activitySelect.value === 'custom-queries') {
        if (!queryCount.value || queryCount.value < 1) {
            alert('Please enter a valid number of queries');
            return;
        }
        co2Amount = queryCount.value * carbonData.aiQuery;
        isCustomQuery = true;
    } else if (activitySelect.value === 'custom-activity') {
        const customInput = customActivityInput.value.trim();
        if (!customInput) {
            alert('Please describe your activity (e.g., "ride e-scooter 10 miles")');
            return;
        }
        customActivity = parseCustomActivity(customInput);
        if (!customActivity) {
            alert('Could not understand that activity. Try something like "drive 5 miles" or "eat 2 burgers"');
            return;
        }
        co2Amount = customActivity.co2;
        isCustomActivity = true;
    } else if (activitySelect.value && activitySelect.value !== '') {
        const activity = carbonData.activities[activitySelect.value];
        co2Amount = activity.co2;
    } else {
        alert('Please select an activity or enter a custom one');
        return;
    }
    
    if (isCustomActivity) {
        const equivalentQueries = Math.round(customActivity.co2 / carbonData.aiQuery);
        
        resultTitle.innerHTML = `🎯 ${customActivity.name}`;
        resultMain.innerHTML = `
            <div>${customActivity.quantity} ${customActivity.unit}${customActivity.quantity > 1 ? 's' : ''} = 
            <strong>${equivalentQueries.toLocaleString()} AI queries</strong></div>
            <div class="co2-detail">${customActivity.co2.toLocaleString()}g CO2e total</div>
        `;
        
        resultComparison.innerHTML = `
            <div class="breakdown">
                <p>📊 <strong>Carbon breakdown:</strong></p>
                <p>${customActivity.name}: ${customActivity.co2PerUnit}g CO2e per ${customActivity.unit}</p>
                <p>Total for ${customActivity.quantity} ${customActivity.unit}${customActivity.quantity > 1 ? 's' : ''}: ${customActivity.co2}g CO2e</p>
                <p>Each AI query: ${carbonData.aiQuery}g CO2e</p>
            </div>
        `;
        
        const randomTradeOff = carbonData.tradeOffs[Math.floor(Math.random() * carbonData.tradeOffs.length)];
        tradeOffDiv.innerHTML = `🔄 <strong>Trade-off idea:</strong> ${randomTradeOff}`;
    } else if (isCustomQuery) {
        const queries = parseInt(queryCount.value);
        const equivalentQueries = queries;
        
        resultTitle.innerHTML = `🤖 ${queries.toLocaleString()} AI Queries`;
        resultMain.innerHTML = `<strong>${co2Amount.toFixed(1)}g CO2e</strong> total emissions`;
        
        const comparisons = [];
        for (const [key, activity] of Object.entries(carbonData.activities)) {
            const equivalent = co2Amount / activity.co2;
            if (equivalent >= 0.1 && equivalent <= 100) {
                comparisons.push(`${activity.icon} ${equivalent.toFixed(1)} ${activity.unit}${equivalent > 1 ? 's' : ''} of "${activity.name.toLowerCase()}"`);
            }
        }
        
        resultComparison.innerHTML = `
            <h4>That's equivalent to:</h4>
            <ul>${comparisons.slice(0, 3).map(c => `<li>${c}</li>`).join('')}</ul>
        `;
        
        // Suggest a fun trade-off
        if (queries > 1000) {
            tradeOffDiv.innerHTML = `💡 <strong>Pro tip:</strong> ${carbonData.tradeOffs[Math.floor(Math.random() * carbonData.tradeOffs.length)]}`;
        } else {
            tradeOffDiv.innerHTML = `✅ <strong>Nice!</strong> That's pretty modest usage - less than driving to the grocery store!`;
        }
    } else {
        const activity = carbonData.activities[activitySelect.value];
        const equivalentQueries = Math.round(activity.co2 / carbonData.aiQuery);
        
        resultTitle.innerHTML = `${activity.icon} ${activity.name}`;
        resultMain.innerHTML = `Equals <strong>${equivalentQueries.toLocaleString()} AI queries</strong>`;
        
        resultComparison.innerHTML = `
            <div class="breakdown">
                <p>📊 <strong>Carbon breakdown:</strong></p>
                <p>${activity.name}: ${activity.co2}g CO2e</p>
                <p>Each AI query: ${carbonData.aiQuery}g CO2e</p>
                <p class="fun-fact">💡 ${activity.funFact}</p>
            </div>
        `;
        
        // Suggest trade-offs
        const randomTradeOff = carbonData.tradeOffs[Math.floor(Math.random() * carbonData.tradeOffs.length)];
        tradeOffDiv.innerHTML = `🔄 <strong>Trade-off idea:</strong> ${randomTradeOff}`;
    }
    
    resultsDiv.style.display = 'block';
    resultsDiv.scrollIntoView({ behavior: 'smooth' });
}

// Event listeners
document.getElementById('activity-select').addEventListener('change', function(e) {
    const customQueryInput = document.getElementById('custom-query-input');
    const customActivityDiv = document.getElementById('custom-activity-div');
    
    customQueryInput.style.display = 'none';
    customActivityDiv.style.display = 'none';
    
    if (e.target.value === 'custom-queries') {
        customQueryInput.style.display = 'block';
    } else if (e.target.value === 'custom-activity') {
        customActivityDiv.style.display = 'block';
    }
});

document.getElementById('calculate-btn').addEventListener('click', calculateEquivalent);

document.getElementById('query-count').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        calculateEquivalent();
    }
});