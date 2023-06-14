import React from "react";

const CustomButton = ({text}) => {

  const buttonStyles = {
    backgroundColor: "#f64208",
    color: "white",
    borderRadius: "5px"
  };

  return (
    <button style={buttonStyles} className="btn">{text}</button>
  );
};

export default CustomButton;