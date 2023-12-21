import React, { useState, useContext, createContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  const closeSidebar = () => {
    setShowSidebar(false);
  };

  const openSidebar = () => {
    setShowSidebar(true);
  };
  return (
    <AppContext.Provider
      value={{
        closeModal,
        setShowModal,
        openModal,
        showModal,
        showSidebar,
        setShowSidebar,
        closeSidebar,
        openSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
