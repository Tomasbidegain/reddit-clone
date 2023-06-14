import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logoLight from "../assets/Reddit-Logo.wine.png";
import logoDark from "../assets/Reddit-Logo-dark.png";
import qr from "../assets/qr-code.svg";
import { Search } from "react-bootstrap-icons";
import CustomButton from "./CustomButton";
import DarkModeToggle from "./DarkModeToggle";
import { useSelector } from "react-redux";
import UserDropdown from "./UserDropdown";

const Navbar = () => {

  const darkMode = useSelector((state) => state.darkMode);

  return (
    <div className={`fixed-top navbar navbar-expand-lg justify-content-around z-3 ${darkMode ? 'bg-dark' : 'bg-white'} border-bottom border-secondary`}>
      <img style={{ width: "8%" }} src={darkMode ? logoDark : logoLight} alt="Logo reddit" />
      <div className="w-50 input-group rounded-pill ">
        <span className={`input-group-text ${darkMode ? "bg-secondary" : ""}`}>
          <Search color='#444'/>
        </span>
        <input className={`${darkMode ? "bg-secondary" : ""} form-control`} type="text" placeholder="Buscar" />
      </div>
      <div className="d-flex flex-row justify-content-center align-items-center gap-2">
        <DarkModeToggle/>
        <button className="btn btn-light flex-row justify-content-center align-items-center d-none d-lg-flex">
          <img style={{ width: "14%" }} src={qr} alt="QR" />
          <p className="p-0 m-0">Descargar app</p>
        </button>
        <div className="d-none d-lg-flex">
          <CustomButton text="Iniciar Sesión"/>
        </div>
        <UserDropdown/>
      </div>
    </div>
  );
};

export default Navbar;
