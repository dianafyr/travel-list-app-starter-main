import React from 'react';

export default function Item({item, onDeleteItem, onTogglePacked, onEditItem, editId, setEditId, setEditedDescription, setEditedQuantity, editedDescription, editedQuantity, handleEditClick, handleSaveEdit,}) {

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
      {editId === item.id ? (
        <>
          <input
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
          <input
            type="number"
            value={editedQuantity}
            onChange={(e) => setEditedQuantity(Number(e.target.value))}
          />
          <button onClick={() => handleSaveEdit(item.id)}>Save</button>
        </>
      ) : (
        <>
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
          <button onClick={() => handleEditClick(item)}>✏️</button>
        </>
      )}
    </li>
  );
}