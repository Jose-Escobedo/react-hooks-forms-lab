import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";
import { v4 as uuid } from "uuid";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [formCategory, setFormCategory] = useState("Produce");

  function handleNewItemChange(e) {
    console.log(formCategory);
    setFormCategory(e.target.value);
  }

  function handleNewItemSubmit(e) {
    e.preventDefault();

    const newItemArr = [...items];
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: e.target.name.value,
      category: e.target.category.value,
    };

    setItems([...newItemArr, newItem]);

    console.log(items);
  }

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList
        items={items}
        handleNewItemSubmit={handleNewItemSubmit}
        handleNewItemChange={handleNewItemChange}
      />
    </div>
  );
}

export default App;
