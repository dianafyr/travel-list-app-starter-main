import React, {useState} from 'react';

export default function Form({ onAddItem }) {
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
        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
          {Array.from({ length: 10 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <button type="submit">Add</button>
      </form>
    );
  }