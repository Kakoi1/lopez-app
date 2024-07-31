// SearchFilter.js
import React from 'react';

export default function SearchFilter({ searchQuery, onSearchChange }){

  return (
    <div>
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );

};


