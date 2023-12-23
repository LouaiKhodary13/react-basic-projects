import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const containerRef = useRef(null);

  const [columns, setColumns] = useState('col-2');
  useEffect(() => {
    const submenu = containerRef.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
    let columns = 'col-2';
    if (links.length === 3) columns = 'col-3';
    if (links.length > 3) columns = 'col-4';
    setColumns(columns);
  }, [location]);
  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={containerRef}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link;
          return (
            <a href={url} key={index}>
              {icon} {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
