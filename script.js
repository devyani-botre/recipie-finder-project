document.addEventListener("DOMContentLoaded", function () {
    const defaultImage = "placeholder.jpg"; // Placeholder image

    const recipes = [
        {
            id: 1,
            name: "Spaghetti Carbonara",
            ingredients: "Spaghetti, eggs, pancetta, parmesan, black pepper",
            procedure: "1. Boil pasta. 2. Cook pancetta. 3. Mix eggs with cheese. 4.Garnish and Serve. 5. Combine everything.",
            image: "SpaghettiCarbonara.jpg",
            youtube: "https://www.youtube.com/watch?v=3AAdKl1UYZs"
        },
        {
            id: 2,
            name: "Chicken Curry",
            ingredients: "Chicken, onions, tomatoes, spices, garlic, ginger",
            procedure: "1. Sauté onions. 2. Add chicken and spices. 3. Cook with tomatoes. 4. Simmer and serve. 5.Garnish with coriandor.",
            image: "chickenc.jpg",
            youtube: "https://www.youtube.com/watch?v=4a5Xh5U3n5w"
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
            procedure: "1. Mix butter and sugar. 2. Add eggs and vanilla. 3. Mix in cocoa and flour. 4. Bake. 5.Tasty Chocolate Brownies are ready.",
            image: "chocolate.jpg",
            youtube: "https://www.youtube.com/watch?v=qXqvMbtWZyw"
        },
        {
            id: 5,
            name: "Greek Salad",
            ingredients: "Cucumber, tomato, feta cheese, olives, olive oil, oregano",
            procedure: "1. Chop vegetables. 2. Add feta and olives. 3.Add salt according taste 4. Drizzle with olive oil and oregano.",
            image: "gsalad.jpg",
            youtube: "https://www.youtube.com/watch?v=RQ2N5iFjjQo"
        },
        {
            id: 6,
            name: "Garlic Butter Shrimp",
            ingredients: "Shrimp, garlic, butter, parsley, lemon, salt, pepper",
            procedure: "1. Heat butter in a pan. 2. Sauté garlic until fragrant. 3. Add shrimp, cook until pink. 4. Season with salt, pepper, and parsley.",
            image: "gshrink.jpg",
            youtube: "https://www.youtube.com/watch?v=YkwKz8zvNzU"
        }
    ];

    const recipeContainer = document.getElementById("recipe-container");

    recipes.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.className = "col-md-4 mb-4";
        const imageSrc = recipe.image ? recipe.image : defaultImage;
        recipeCard.innerHTML = `
            <div class="card">
                <img src="${imageSrc}" class="card-img-top" alt="${recipe.name}">
                <div class="card-body">
                    <h5 class="card-title">${recipe.name}</h5>
                    <p><strong>Ingredients:</strong> ${recipe.ingredients}</p>
                    <p>${recipe.procedure}</p>
                    <a href="${recipe.youtube}" class="btn btn-danger" target="_blank">📺 Watch on YouTube</a>
                    <hr>
                    <div class="button-group">
                        <button class="btn btn-outline-primary like-btn" data-id="${recipe.id}">
                            ❤️ Like <span class="like-count">0</span>
                        </button>
                        <button class="btn btn-outline-secondary comment-btn" data-id="${recipe.id}">💬 Comment</button>
                        <button class="btn btn-outline-success share-btn">📤 Share</button>
                        <button class="btn btn-outline-dark download-btn">⬇️ Download</button>
                    </div>
                    <div class="comment-section mt-3 d-none" id="comment-section-${recipe.id}">
                        <input type="text" class="form-control comment-input" placeholder="Add a comment">
                        <button class="btn btn-sm btn-primary mt-2 post-comment" data-id="${recipe.id}">Post</button>
                        <ul class="list-group mt-2 comment-list"></ul>
                    </div>
                </div>
            </div>
        `;
        recipeContainer.appendChild(recipeCard);
    });

    // Like Button Functionality
    document.querySelectorAll(".like-btn").forEach(button => {
        button.addEventListener("click", function () {
            let countSpan = this.querySelector(".like-count");
            let currentLikes = parseInt(countSpan.textContent);
            countSpan.textContent = currentLikes + 1;
        });
    });

    // Comment Functionality
    document.querySelectorAll(".comment-btn").forEach(button => {
        button.addEventListener("click", function () {
            let recipeId = this.getAttribute("data-id");
            let commentSection = document.getElementById(`comment-section-${recipeId}`);
            commentSection.classList.toggle("d-none");
        });
    });

    document.querySelectorAll(".post-comment").forEach(button => {
        button.addEventListener("click", function () {
            let recipeId = this.getAttribute("data-id");
            let commentInput = document.querySelector(`#comment-section-${recipeId} .comment-input`);
            let commentList = document.querySelector(`#comment-section-${recipeId} .comment-list`);
            
            if (commentInput.value.trim() !== "") {
                let newComment = document.createElement("li");
                newComment.className = "list-group-item";
                newComment.textContent = commentInput.value;
                commentList.appendChild(newComment);
                commentInput.value = "";
            }
        });
    });

    // Share Button Functionality
    document.querySelectorAll(".share-btn").forEach(button => {
        button.addEventListener("click", function () {
            alert("Share functionality will be added soon!");
        });
    });

    // Download Button Functionality
    document.querySelectorAll(".download-btn").forEach(button => {
        button.addEventListener("click", function () {
            alert("Download functionality will be added soon!");
        });
    });
});
