# Component documentation

## 1. Book Collection Manager - Taysa

- `handleTitleChange` updates the title state when the user types in the title input field.
- `handleAuthorChange` updates the author state value.
- `handleGenreChange` updates the genre state value.
- `handleLanguageChange` updates the language state value.
- `handleEditionChange` updates the edition state value.
- `handlePagesChange` updates the pages state value.
- `handleRatingChange` updates the rating state value.
- `createBook` creates a new book object from the input field values.
- `addBook` adds a newly created book to the book list and resets the input fields.
- `deleteBook` removes a book from the books array based on its index.
- `searchBook` searches the books array using a case-insensitive, partial title match and returns an array of matching books.
- `handleSearch` uses searchBook to update searchResult with matching books or an empty array if no matches are found.

## 2. Contact List Manager - Wang

- `handleJobTitleChange` used to update the job_title state
- `handle...` same as above, include `handleBirthdayChange`, `handleNotesChange`, `handleWebsiteChange`, `handleFavoriteChange`
- `addContact` used to to add a new contact to the list
- `deleteContact` Removes a contact from the contacts

## 3. Recipe Manager - Kumudu

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

- `SignupPage` Function to handle the Signup Functionality, it checks whether the email and password are using the right format and sign up the user..