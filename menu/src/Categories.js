import React from 'react';

const Categories = ({ filterItems, categories }) => {
  return (
    <div className='btn-container'>
      {categories.map((btn, index) => {
        return (
          <button
            className='filter-btn'
            type='button'
            key={index}
            onClick={() => filterItems(btn)}
          >
            {btn}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
