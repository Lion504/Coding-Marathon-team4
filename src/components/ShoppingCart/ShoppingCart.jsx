import React, { useState } from "react";

function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ itemName: "", quantity: "" });
  const [notice, setNotice] = useState("");

  function handleInputChange(event) {
    const { name, value } = event.target;

    if (name === "quantity") {
      const numericValue = Number(value);
      if (
        value !== "" &&
        (!Number.isFinite(numericValue) || numericValue <= 0)
      ) {
        setNotice("Quantity must be at least 1.");
      } else {
        setNotice("");
      }
    }

    setNewItem((prevItem) => ({ ...prevItem, [name]: value }));
  }

  function handleQuantityChange(index, event) {
    const quantity = Number(event.target.value);
    setItems((prevItems) => {
      // If updating the quantity to less than 1 or not a number, delete the item
      if (!Number.isFinite(quantity) || quantity <= 0) {
        return prevItems.filter((_, i) => i !== index);
      }

      return prevItems.map((item, i) =>
        i === index ? { ...item, quantity } : item
      );
    });
  }

  function addItem() {
    const quantity = Number(newItem.quantity);
    if (newItem.itemName.trim() === "" || !Number.isFinite(quantity)) {
      return;
    }

    if (quantity <= 0) {
      setNotice("Quantity must be at least 1.");
      return;
    }

    const price = parseFloat((Math.random() * 15 + 5).toFixed(2)); // Random price between 5 and 20 as a placeholder price
    setItems((i) => [...i, { ...newItem, quantity, price }]);
    setNewItem({ itemName: "", quantity: "" });
    setNotice("");
  }

  function deleteItem(index) {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  }

  function clearCart() {
    setItems([]);
  }

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      <div>
        <input
          type="text"
          placeholder="Enter item name..."
          name="itemName"
          value={newItem.itemName}
          onChange={handleInputChange}
        />
        <input
          type="number"
          placeholder="Enter quantity..."
          name="quantity"
          value={newItem.quantity}
          min="1"
          onChange={handleInputChange}
        />
        {notice && <p className="notice">{notice}</p>}{" "}
        {/* Shows a notice if there's a message in the notice state */}
        <button onClick={addItem}>Add Item</button>
      </div>
      <ol>
        {items.map((item, index) => (
          <li key={index}>
            {item.itemName}
            <input
              type="number"
              value={item.quantity}
              onChange={(event) => handleQuantityChange(index, event)}
            />
            <button onClick={() => deleteItem(index)}>Delete</button>
            {(item.price * item.quantity).toFixed(2)} €
          </li>
        ))}
        {items.length === 0 && <p>No items in the cart</p>}{" "}
        {/* Shows if the cart is empty */}
        {/* Show the following when the cart isn't empty */}
        {items.length > 0 && (
          <p>
            Subtotal:{" "}
            {items
              .reduce((total, item) => total + item.price * item.quantity, 0)
              .toFixed(2)}{" "}
            €
          </p>
        )}
        {items.length > 0 && (
          <p>
            Tax (24%):{" "}
            {items
              .reduce(
                (total, item) => total + item.price * item.quantity * 0.24,
                0
              )
              .toFixed(2)}{" "}
            €
          </p>
        )}
        {items.length > 0 && (
          <p>
            Total with Tax:{" "}
            {items
              .reduce(
                (total, item) => total + item.price * item.quantity * 1.24,
                0
              )
              .toFixed(2)}{" "}
            €
          </p>
        )}
        {items.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
      </ol>
    </div>
  );
}

export default ShoppingCart;
