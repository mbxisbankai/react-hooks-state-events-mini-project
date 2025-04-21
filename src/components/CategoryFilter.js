import React, {useState} from "react";

function CategoryFilter({ categories, onChange, selectedCategory }) {
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => (
        <button key={index} className={selectedCategory === category ? "selected" : ""} onClick={() => onChange(category)}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
