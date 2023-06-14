import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/actions";
import ToggleButton from "./ToggleButton";

const Filter = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  const darkMode = useSelector((state) => state.darkMode);

  const handleFilterChange = (text) => {
    dispatch(setFilter(text));
  };
  const filterButtons = [
    { text: "Destacando", value: "hot" },
    { text: "Más nuevos", value: "new" },
    { text: "En alza", value: "rising" },
  ];

  return (
    <div>
      <h6 className={`${darkMode && "text-white"}`}>Publicaciones populares</h6>
      <div className={`w-100 d-flex justify-content-around p-3 rounded shadow-sm ${darkMode ? "bg-dark" : "bg-white"}`}>
        {filterButtons.map((button) => (
          <ToggleButton
            key={button.value}
            text={button.text}
            value={button.value}
            active={currentFilter === button.value}
            onClick={handleFilterChange}
          />
        ))}
      </div>
    </div>
  );
};

export default Filter;
