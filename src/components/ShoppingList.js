import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, handleNewItemSubmit, handleNewItemChange }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  let filterBoolian = false;

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    console.log(itemsFilterSearch);
  };

  const itemsFilterSearch = items.filter((item) => {
    if (search === `${item.name}`) {
      filterBoolian = !filterBoolian;
      return item.name === search;
    }
  });

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      {/* <ItemForm onItemFormSubmit={handleSubmit} /> */}
      <ItemForm
        onItemFormSubmit={handleNewItemSubmit}
        handleNewItemChange={handleNewItemChange}
      />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
      />
      <ul className="Items">
        {filterBoolian
          ? itemsFilterSearch.map((item) => (
              <Item key={item.id} name={item.name} category={item.category} />
            ))
          : itemsToDisplay.map((item) => (
              <Item key={item.id} name={item.name} category={item.category} />
            ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
