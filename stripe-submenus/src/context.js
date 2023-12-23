import React, { useState, useContext, createContext } from 'react';
import sublinks from './data';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({ page: '', links: [] }); //[page,links]

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };
  const openSubmenu = (text, cord) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(cord);
    setIsSubmenuOpen(true);
  };
  return (
    <AppContext.Provider
      value={{
        openSidebar,
        openSubmenu,
        closeSidebar,
        closeSubmenu,
        isSubmenuOpen,
        isSidebarOpen,
        location,
        page,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
