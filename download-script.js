document.addEventListener("DOMContentLoaded", function () {
    const recipes = [
        {
            id: 1,
            name: "Spaghetti Carbonara",
            ingredients: "Spaghetti, eggs, pancetta, parmesan, black pepper",
            procedure: "1. Boil pasta. 2. Cook pancetta. 3. Mix eggs with cheese. 4. Combine everything.",
            image: "SpaghettiCarbonara.jpg"
        },
        {
            id: 2,
            name: "Chicken Curry",
            ingredients: "Chicken, onions, tomatoes, spices, garlic, ginger",
            procedure: "1. Sauté onions. 2. Add chicken and spices. 3. Cook with tomatoes. 4. Simmer and serve.",
            image: "chickenc.jpg"
        },
        {
            id: 3,
            name: "Classic Cheeseburger",
            ingredients: "Beef patty, cheese, lettuce, tomato, bun, ketchup, mustard",
            procedure: "1. Cook beef patty. 2. Melt cheese on top. 3. Assemble with lettuce, tomato, and condiments.",
            image: "burger.jpg",
            youtube: "https://www.youtube.com/watch?v=ZXM2VTK6NbQ"
        },
        {
            id: 4,
            name: "Chocolate Brownies",
            ingredients: "Butter, sugar, eggs, cocoa powder, flour, vanilla",
            procedure: "1. Mix butter and sugar. 2. Add eggs and vanilla. 3. Mix in cocoa and flour. 4. Bake.",
            image: "chocolate.jpg",
            youtube: "https://www.youtube.com/watch?v=qXqvMbtWZyw"
        },
        {
            id: 5,
            name: "Greek Salad",
            ingredients: "Cucumber, tomato, feta cheese, olives, olive oil, oregano",
            procedure: "1. Chop vegetables. 2. Add feta and olives. 3. Drizzle with olive oil and oregano.",
            image: "gsalad.jpg",
            youtube: "https://www.youtube.com/watch?v=RQ2N5iFjjQo"
        },
        {
            id: 6,
            name: "Garlic Butter Shrimp",
            ingredients: "Shrimp, garlic, butter, parsley, lemon, salt, pepper",
            procedure: "1. Heat butter in a pan. 2. Sauté garlic until fragrant. 3. Add shrimp, cook until pink. 4. Season with salt, pepper, and parsley. 5. Serve with a squeeze of lemon.",
            image: "gshrink.jpg",
            youtube: "https://www.youtube.com/watch?v=YkwKz8zvNzU"
        }
    ];

    const recipeContainer = document.getElementById("download-recipe-container");

    recipes.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.className = "col-md-4 mb-4";
        recipeCard.innerHTML = `
            <div class="card">
                <img src="${recipe.image}" class="card-img-top" alt="${recipe.name}">
                <div class="card-body">
                    <h5 class="card-title">${recipe.name}</h5>
                    <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
                    <p>${recipe.procedure}</p>
                    <button class="btn btn-download" onclick="downloadRecipe(${recipe.id})">⬇️ Download Recipe</button>
                </div>
            </div>
        `;
        recipeContainer.appendChild(recipeCard);
    });

    window.downloadRecipe = function (recipeId) {
        const recipe = recipes.find(r => r.id === recipeId);
        if (recipe) {
            const text = `Ingredients:\n${recipe.ingredients}\n\nProcedure:\n${recipe.procedure}`;
            const blob = new Blob([text], { type: 'text/plain' });
            const anchor = document.createElement('a');
            anchor.href = URL.createObjectURL(blob);
            anchor.download = `${recipe.name.replace(/\s+/g, '_')}.txt`;
            anchor.click();
            URL.revokeObjectURL(anchor.href);
        }
    }
});
