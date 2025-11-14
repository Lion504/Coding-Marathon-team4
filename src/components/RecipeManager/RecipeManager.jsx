import React, { useState } from "react";
import "./RecipeManager.css";

function Recipe({ recipe, index, onDelete, onView }) {
  return (
    <li>
      <div>
        <strong>Cuisine:</strong> {recipe.cuisine}
      </div>
      <div>
        <strong>Difficulty:</strong> {recipe.difficulty}
      </div>
      <div>
        <strong>Cook Time:</strong> {recipe.cookTime} minutes
      </div>
      <div>
        <strong>Servings:</strong> {recipe.servings}
      </div>
      <div>
        <strong>Allergens:</strong> {recipe.allergens}
      </div>

      <div className="recipe-actions">
        <button className="view-button" onClick={() => onView(recipe)}>
          View
        </button>
        <button className="delete-button" onClick={() => onDelete(index)}>
          Delete
        </button>
      </div>
    </li>
  );
}

function RecipeManager() {
  const [recipes, setRecipes] = useState([]);

  const [cuisine, setCuisine] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [cookTime, setCookTime] = useState("");
  const [servings, setServings] = useState("");
  const [allergens, setAllergens] = useState("");

  function addRecipe() {
    // basic validation
    if (!cuisine.trim() || !difficulty.trim()) {
      return;
    }

    const newRecipe = {
      cuisine,
      difficulty,
      cookTime: Number(cookTime),   // store as number (minutes)
      servings: Number(servings),   // store as number
      allergens,
    };

    setRecipes((prev) => [...prev, newRecipe]);

    // clear form
    setCuisine("");
    setDifficulty("");
    setCookTime("");
    setServings("");
    setAllergens("");
  }

  function deleteRecipe(index) {
    const updated = recipes.filter((_, i) => i !== index);
    setRecipes(updated);
  }

  function viewRecipe(recipe) {
    alert(
      `Recipe Details:
Cuisine: ${recipe.cuisine}
Difficulty: ${recipe.difficulty}
Cook Time: ${recipe.cookTime} minutes
Servings: ${recipe.servings}
Allergens: ${recipe.allergens}`
    );
  }

  return (
    <div className="recipe-manager">
      <h1>Recipe Manager</h1>

      <div className="recipe-form">
        <input
          type="text"
          placeholder="Cuisine (e.g., Italian)"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
        />

        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="">Select difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <input
          type="number"
          placeholder="Cook time (minutes)"
          value={cookTime}
          min="1"
          step="1"
          onChange={(e) => setCookTime(e.target.value)}
        />

        <input
          type="number"
          placeholder="Servings"
          value={servings}
          min="1"
          step="1"
          onChange={(e) => setServings(e.target.value)}
        />

        <input
          type="text"
          placeholder="Allergens (e.g., gluten, nuts)"
          value={allergens}
          onChange={(e) => setAllergens(e.target.value)}
        />

        <button className="add-button" onClick={addRecipe}>
          Add Recipe
        </button>
      </div>

      <ol>
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
            recipe={recipe}
            index={index}
            onDelete={deleteRecipe}
            onView={viewRecipe}
          />
        ))}
      </ol>
    </div>
  );
}

export default RecipeManager;

