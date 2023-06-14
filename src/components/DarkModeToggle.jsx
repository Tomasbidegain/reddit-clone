import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../redux/actions';
import { SunFill, MoonFill } from "react-bootstrap-icons";


const DarkModeToggle = () => {
  const dispatch = useDispatch();

  const handleToggleClick = () => {
    dispatch(toggleDarkMode());
  };

  const darkMode = useSelector((state) => state.darkMode);

  return (
    <div>
      <button className="btn btn-light d-flex justify-content-center align-items-center" onClick={handleToggleClick}>
        {darkMode ? (<MoonFill/>):(<SunFill/>)}
      </button>
    </div>
  );
};

export default DarkModeToggle;