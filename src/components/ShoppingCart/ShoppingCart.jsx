import React, { useState, useEffect } from "react";

const TAX_RATE = 0.24;

function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ itemName: "", quantity: "" });
  const [notice, setNotice] = useState("");
  const [subtotal, setSubtotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(
    function updateCartTotals() {
      // Goes through the items and calculate the subtotal
      const newSubtotal = items.reduce(
        (runningTotal, item) => runningTotal + item.price * item.quantity,
        0
      );
      const newTax = newSubtotal * TAX_RATE;
      const newTotal = newSubtotal + newTax;

      setSubtotal(newSubtotal);
      setTax(newTax);
      setTotal(newTotal);
    },
    [items]
  );

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
    const trimmedName = newItem.itemName.trim();
    const quantity = Number(newItem.quantity);
    if (trimmedName === "" || !Number.isFinite(quantity)) {
      return;
    }

    if (quantity <= 0) {
      setNotice("Quantity must be at least 1.");
      return;
    }

    const normalizeName = (name) => name.trim().toLowerCase();
    const normalizedNewName = normalizeName(trimmedName);
    let merged = false;

    setItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => normalizeName(item.itemName) === normalizedNewName
      );
      // If the item exists, merges the quantities.
      if (existingIndex !== -1) {
        merged = true;
        return prevItems.map((item, i) =>
          i === existingIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      const price = parseFloat((Math.random() * 15 + 5).toFixed(2)); // Random price between 5 and 20 as a placeholder price
      return [...prevItems, { itemName: trimmedName, quantity, price }];
    });

    setNewItem({ itemName: "", quantity: "" });
    setNotice(merged ? `Updated quantity for ${trimmedName}.` : "");
  }

  function deleteItem(index) {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  }

  function clearCart() {
    setItems([]);
  }

  return (
    <section className="shopping-cart-page">
      <div className="shopping-cart">
        <h1>Shopping Cart</h1>
        <div className="add-item-form">
          <div className="add-item-fields">
            <input
              type="text"
              placeholder="Enter item name..."
              name="itemName"
              value={newItem.itemName}
              onChange={handleInputChange}
            />
            <input
              type="number"
              placeholder="0"
              name="quantity"
              value={newItem.quantity}
              min="1"
              onChange={handleInputChange}
            />
            <button onClick={addItem}>Add Item</button>
          </div>
          {notice && <p className="notice">{notice}</p>}{" "}
          {/* Shows a notice if there's a message in the notice state */}
        </div>
        <ol>
          {items.map((item, index) => (
            <li key={index}>
              <span className="item-name">{item.itemName}</span>
              <div className="item-qty-price">
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(event) => handleQuantityChange(index, event)}
                />
                <span className="item-price">
                  {(item.price * item.quantity).toFixed(2)} €
                </span>
              </div>
              <button onClick={() => deleteItem(index)}>Delete</button>
            </li>
          ))}
          {items.length === 0 && <p>No items in the cart</p>}{" "}
          {/* Shows if the cart is empty */}
          {/* Show the following when the cart isn't empty */}
          {items.length > 0 && <p>Subtotal: {subtotal.toFixed(2)} €</p>}
          {items.length > 0 && <p>Tax (24%): {tax.toFixed(2)} €</p>}
          {items.length > 0 && <p>Total with Tax: {total.toFixed(2)} €</p>}
          {items.length > 0 && <button onClick={clearCart}>Clear Cart</button>}
        </ol>
      </div>
    </section>
  );
}

export default ShoppingCart;
