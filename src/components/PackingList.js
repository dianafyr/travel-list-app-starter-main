import React, { useState } from 'react';
import Item from './Item'; 

export default function PackingList({items, onDeleteItem, onTogglePacked, onEditItem, sortItems}) {

  const [editId, setEditId] = useState(null);
  const [editedDescription, setEditedDescription] = useState("");
  const [editedQuantity, setEditedQuantity] = useState(1);

  const sortedItems = [...items].sort((a, b) => {
    if (sortItems === "description") {
      return a.description.localeCompare(b.description);
    } else if (sortItems === "packed") {
      return a.packed === b.packed ? 0 : a.packed ? -1 : 1;
    }
    return a.id - b.id; 
  });

  const handleEditClick = (item) => {
    setEditId(item.id);
    setEditedDescription(item.description);
    setEditedQuantity(item.quantity);
  };

  const handleSaveEdit = (id) => {
    onEditItem(id, editedDescription, editedQuantity);
    setEditId(null);
  };

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onTogglePacked={onTogglePacked}
            onEditItem={onEditItem}
            editId={editId}
            setEditId={setEditId}
            setEditedDescription={setEditedDescription}
            setEditedQuantity={setEditedQuantity}
            editedDescription={editedDescription}
            editedQuantity={editedQuantity}
            handleEditClick={handleEditClick}
            handleSaveEdit={handleSaveEdit}
          />
        ))}
      </ul>
    </div>
  );
}
