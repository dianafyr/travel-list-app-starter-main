import React from 'react';

function Item({ item, onDeleteItem, onTogglePacked }) {
    function handleDelete() {
      const confirmDelete = window.confirm(
        `Are you sure you want to remove ${item.description}?`
      );
      if (confirmDelete) {
        onDeleteItem(item.id);
      }
    }
  
    return (
      <li>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onTogglePacked(item.id)}
        />
        <span
          style={{
            textDecoration: item.packed ? "line-through" : "none",
          }}
        >
          {item.description} ({item.quantity})
        </span>
        <button onClick={handleDelete}>❌</button>
      </li>
    );
  }
  
export default function PackingList({ items, onDeleteItem, onTogglePacked }) {
    return (
      <div className="list">
        <ul>
          {items.map((item) => (
            <Item
              key={item.id}
              item={item}
              onDeleteItem={onDeleteItem}
              onTogglePacked={onTogglePacked}
            />
          ))}
        </ul>
      </div>
    );
  }
  