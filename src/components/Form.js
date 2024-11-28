import React, { useState } from 'react';

export default function Form({ onAddItem, onSortChange, onClearAll }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };

    onAddItem(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need to pack?</h3>
      <div className="input-group">
        <input
          id="additem"
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 10 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <button type="submit">Add</button>
        
        <select onChange={(e) => onSortChange(e.target.value)} className="sort-select">
          <option value="id">Input Order</option>
          <option value="description">Description</option>
          <option value="packed">Packed Status</option>
        </select>
      </div>

      <button type="button" onClick={onClearAll} className="clear-all">
        Clear All Items
      </button>
    </form>
  );
}
