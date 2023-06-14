import {
  House,
  ArrowUpRightCircle,
  ChevronDown,
  Controller,
  Bicycle,
  GraphUpArrow,
  CurrencyBitcoin,
  Tv,
  StarFill,
} from "react-bootstrap-icons";
import CustomButton from "./CustomButton";
import { useSelector } from "react-redux";

const Menu = () => {
  const darkMode = useSelector((state) => state.darkMode);

  return (
    <div
      className={`mt-5 p-4 h-100 w-25 fixed-top d-none d-lg-block z-2 ${
        darkMode ? "bg-dark" : "bg-white"
      }`}
    >
      <p className={`${darkMode && "text-white"}`}>FEED</p>
      <ul
        className={`list-group list-group-flush w-100 ${
          darkMode ? "bg-dark" : "bg-white"
        }`}
      >
        <li className={`list-group-item ${darkMode ? "bg-dark" : "bg-white"}`}>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2 justify-content-start align-items-center">
              <House color={darkMode ? "#fff" : "#000"} />
              <p className={`${darkMode && "text-white"} m-0`}>Principal</p>
            </div>
          </div>
        </li>
        <li className={`list-group-item ${darkMode ? "bg-dark" : "bg-white"}`}>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2 justify-content-start align-items-center">
              <ArrowUpRightCircle color={darkMode ? "#fff" : "#000"} />
              <p className={`${darkMode && "text-white"} m-0`}>Popular</p>
            </div>
          </div>
        </li>
      </ul>
      <p className={`${darkMode && "text-white"} mt-2`}>TEMAS</p>
      <ul
        className={`list-group list-group-flush w-100 ${
          darkMode ? "bg-dark" : "bg-white"
        }`}
      >
        <li className={`list-group-item ${darkMode ? "bg-dark" : "bg-white"}`}>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2 justify-content-start align-items-center">
              <Controller color={darkMode ? "#fff" : "#000"} />
              <p className={`${darkMode && "text-white"} m-0`}>Gaming</p>
            </div>
            <ChevronDown color={darkMode ? "#fff" : "#000"} />
          </div>
        </li>
        <li className={`list-group-item ${darkMode ? "bg-dark" : "bg-white"}`}>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2 justify-content-start align-items-center">
              <Bicycle color={darkMode ? "#fff" : "#000"} />
              <p className={`${darkMode && "text-white"} m-0`}>Sports</p>
            </div>
            <ChevronDown color={darkMode ? "#fff" : "#000"} />
          </div>
        </li>
        <li className={`list-group-item ${darkMode ? "bg-dark" : "bg-white"}`}>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2 justify-content-start align-items-center">
              <GraphUpArrow color={darkMode ? "#fff" : "#000"} />
              <p className={`${darkMode && "text-white"} m-0`}>Business</p>
            </div>
            <ChevronDown color={darkMode ? "#fff" : "#000"} />
          </div>
        </li>
        <li className={`list-group-item ${darkMode ? "bg-dark" : "bg-white"}`}>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2 justify-content-start align-items-center">
              <CurrencyBitcoin color={darkMode ? "#fff" : "#000"} />
              <p className={`${darkMode && "text-white"} m-0`}>Crypto</p>
            </div>
            <ChevronDown color={darkMode ? "#fff" : "#000"} />
          </div>
        </li>
        <li className={`list-group-item ${darkMode ? "bg-dark" : "bg-white"}`}>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2 justify-content-start align-items-center">
              <Tv color={darkMode ? "#fff" : "#000"} />
              <p className={`${darkMode && "text-white"} m-0`}>Television</p>
            </div>
            <ChevronDown color={darkMode ? "#fff" : "#000"} />
          </div>
        </li>
        <li className={`list-group-item ${darkMode ? "bg-dark" : "bg-white"}`}>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2 justify-content-start align-items-center">
              <StarFill color={darkMode ? "#fff" : "#000"} />
              <p className={`${darkMode && "text-white"} m-0`}>Celebrity</p>
            </div>
            <ChevronDown color={darkMode ? "#fff" : "#000"} />
          </div>
        </li>
        <li className={`list-group-item ${darkMode ? "bg-dark" : "bg-white"}`}>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2 justify-content-start align-items-center">
              <h5 className={`${darkMode && "text-white"} mb-2`}>...</h5>
              <p className={`${darkMode && "text-white"} m-0`}>More topics</p>
            </div>
            <ChevronDown color={darkMode ? "#fff" : "#000"} />
          </div>
        </li>
      </ul>
      <hr />
      <div className="w-100 d-flex justify-content-center">
        <CustomButton text="Únete a Reddit" />
      </div>
    </div>
  );
};

export default Menu;
