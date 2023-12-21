import React, { useContext } from 'react';
import { useGlobalContext } from './context';
import { FaBars } from 'react-icons/fa';

const Home = () => {
  const { openModal, openSidebar, showSidebar } = useGlobalContext();
  return (
    <main>
      <button className='sidebar-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
      <button className='btn' onClick={openModal}>
        SHow Modal
      </button>
    </main>
  );
};

export default Home;
