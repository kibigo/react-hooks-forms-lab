import React, { useEffect, useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState('');
  const [showItem, setShowItem] = useState(items)
  
  useEffect (() => {
    setShowItem(items);
  },[items])
  
  const handleSearch = (searchText) => {
    setSearch(searchText)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    const categoryMatches = selectedCategory === "All" || item.category === selectedCategory;
    const searchMatches = item.name.toLowerCase().includes(search.toLowerCase());
    return categoryMatches && searchMatches
  })

  const handleItemFormSubmit = (newItem) => {
    const updateItem = [...showItem, newItem]
    setShowItem(updateItem)
  }
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit = {handleItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearch}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
