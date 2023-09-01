import React, { useState, useEffect } from "react";

function Filter({ onCategoryChange, onSearchChange, search }) {
  
  const [searchText, setSearchText] =useState(search);

  useEffect(() => {
    setSearchText(search)
  }, [search])
  
  const handleSearch = (event) => {
    const newText = event.target.value
    setSearchText(newText)
    onSearchChange(newText)
  }
  return (
    <div className="Filter">
      <input type="text" value={searchText} onChange={handleSearch} name="search" placeholder="Search..." />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
