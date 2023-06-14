import React from 'react';
import { useSelector } from 'react-redux';
import './App.css'

import LayoutPost from './layout/LayoutHome';
import Navbar from './components/Navbar';
import Menu from './components/Menu';

const App = () => {
  const darkMode = useSelector((state) => state.darkMode);

  return (
    <div className={`App ${darkMode ? 'bg-black' : 'bg-body-secondary'}`}>
    <Navbar />
    <div className='w-100 h-100 d-flex flex-row justify-content-center'>
      <div className='d-none d-lg-block col-lg-3'>
        <Menu />
      </div>
      <div className='col-lg-9'>
        <LayoutPost />
      </div>
    </div>
  </div>
  );
};

export default App;
