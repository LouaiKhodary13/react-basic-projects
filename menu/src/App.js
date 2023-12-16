import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, SetMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      SetMenuItems(items);
      return;
    }

    const newItems = [
      ...new Set(items.filter((item) => item.category === category)),
    ];

    SetMenuItems(newItems);
  };
  return (
    <main>
      <section className='menu-section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories
          filterItems={filterItems}
          items={items}
          categories={categories}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
