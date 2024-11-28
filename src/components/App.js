import React, { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import Stats from './Stats';
import PackingList from './PackingList'

function App() {
  const [items, setItems] = useState([]);
  const [sortItems, setSortItems] = useState('id'); // Default to 'id' for input order

  const handleAdd = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleDelete = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleToggle = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleSortChange = (sortBy) => {
    setSortItems(sortBy); // Update sort order when user selects an option
  };

  // Function to clear all items
  const handleClearAll = () => {
    const confirmClear = window.confirm("Are you sure you want to clear all items?");
    if (confirmClear) {
      setItems([]); // Clear all items
    }
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAdd} onSortChange={handleSortChange} onClearAll={handleClearAll} />
      <PackingList
        items={items}
        onDeleteItem={handleDelete}
        onTogglePacked={handleToggle}
        sortItems={sortItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;

