import React from "react";
import { Dropdown } from "react-bootstrap";
import { ChevronDown, Person, InfoCircle, QuestionCircle, JournalText, BoxArrowInRight } from "react-bootstrap-icons";
import { useSelector } from "react-redux";


const UserDropdown = () => {
  const darkMode = useSelector((state) => state.darkMode);

  return (
    <Dropdown>
      <Dropdown.Toggle variant="btn btn-light" id="dropdown-button">
        <Person color="black" size={24} />
      </Dropdown.Toggle>
      <Dropdown.Menu className={darkMode && "bg-dark"}>
        <Dropdown.Item>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2 justify-content-start align-items-center">
              <QuestionCircle color={darkMode ? "#fff" : "#000"} />
              <p className={`${darkMode && "text-white"} m-0`}>Centro de ayuda</p>
            </div>
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
        <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2 justify-content-start align-items-center">
              <InfoCircle color={darkMode ? "#fff" : "#000"} />
              <p className={`${darkMode && "text-white"} m-0`}>Más</p>
            </div>
            <ChevronDown color={darkMode ? "#fff" : "#000"} />
          </div>
        </Dropdown.Item>
        <Dropdown.Item>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2 justify-content-start align-items-center">
              <JournalText color={darkMode ? "#fff" : "#000"} />
              <p className={`${darkMode && "text-white"} m-0 text-truncate`}>Terminos y condiciones</p>
            </div>
            <ChevronDown color={darkMode ? "#fff" : "#000"} />
          </div>
        </Dropdown.Item>
        <hr />
        <Dropdown.Item>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2 justify-content-start align-items-center">
              <BoxArrowInRight color={darkMode ? "#fff" : "#000"} />
              <p className={`${darkMode && "text-white"} m-0 text-truncate`}>Iniciar sesión</p>
            </div>
          </div>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserDropdown;
