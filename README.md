# Component documentation

## 1. Book Collection Manager - Taysa

## 2. Contact List Manager - Wang

- `handleJobTitleChange` used to update the job_title state
- `handle...` same as above, include `handleBirthdayChange`, `handleNotesChange`, `handleWebsiteChange`, `handleFavoriteChange`
- `addContact` used to to add a new contact to the list
- `deleteContact` Removes a contact from the contacts

## 3. Recipe Manager - Kumudu

  - handleCuisineChange – used to update the cuisine state when the user types the cuisine (e.g., Italian, Indian).
   -  handleDifficultyChange – used to update the difficulty state when the user selects the difficulty level (Easy, Medium, Hard).
   - handleCookTimeChange – used to update the cookTime state with the number of minutes required to cook the recipe
   - handleServingsChange – used to update the servings state with how many people the recipe serves.
   - handleAllergensChange – used to update the allergens state with allergen info (e.g., gluten, nuts).
   - addRecipe – used to add a new recipe to the recipes list using the current form values.
   - deleteRecipe – removes a recipe from the recipes list when the user clicks the Delete button.
   - viewRecipe – displays the full details of a selected recipe when the user clicks the View button.



.









## 4. Shopping Cart - Unai

- `handleInputChange` keeps the pending item form state in sync and validates
  the quantity before enabling `addItem`.
- `addItem` trims the name, merges quantities if the product already exists,
  assigns a placeholder price, and clears the form/notice state.
- `handleQuantityChange` updates quantities inline in the list; entering 0 or an
  invalid number removes the item.
- `deleteItem` removes a specific entry, while `clearCart` removes all.
- A `useEffect` recalculates `subtotal`, `tax`, and `total` any time `items`
  change, so the total always reflects the current item list.

## 5. Signup Page - Tamseela
