# Component documentation

## 1. Book Collection Manager - Taysa

## 2. Contact List Manager - Wang

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
