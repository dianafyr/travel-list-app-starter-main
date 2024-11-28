import React, { useState } from "react";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Form from "./Form";
import Stats from "./Stats";

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

  const handleEditItem = (id, newDescription, newQuantity) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, description: newDescription, quantity: newQuantity }
          : item
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
        onEditItem={handleEditItem}
        sortItems="id" // You can pass your sorting logic here
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
