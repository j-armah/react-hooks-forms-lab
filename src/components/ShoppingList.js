import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchString, setSearchString] = useState("")
  let itemsToDisplay = [...items]


  const appendItem = (newItem) => {
    console.log(newItem)
    itemsToDisplay = [...items, newItem]
    console.log(itemsToDisplay)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const handleSearchChange = (event) => {
    setSearchString(event.target.value)
  }


  if (searchString !== "") {
    itemsToDisplay = items.filter(item => item.name.toLowerCase().includes(searchString.toLowerCase()))
  }

  if (selectedCategory !== "All") {
    itemsToDisplay = items.filter((item) => {
      if (selectedCategory === "All") return true;

      return item.category === selectedCategory;
    });
  }



  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={searchString}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category}/>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
