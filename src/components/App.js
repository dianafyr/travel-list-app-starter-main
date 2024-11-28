import React, { useState } from 'react';
import Logo from './Logo';
import Form from './Form';
import Stats from './Stats';
import PackingList from './PackingList'

function App() {
  const [items, setItems] = useState([]);

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

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAdd} />
      <PackingList
        items={items}
        onDeleteItem={handleDelete}
        onTogglePacked={handleToggle}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;

