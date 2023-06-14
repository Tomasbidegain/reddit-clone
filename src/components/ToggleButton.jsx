import { Fire, GraphUpArrow, GearWide } from "react-bootstrap-icons";

const ToggleButton = ({ text, value, active, onClick }) => {
  const handleClick = () => {
    if (!active) {
      onClick(value);
    }
  };

  return (
    <button
      className={`btn ${active ? "btn-primary" : "btn-secondary"} d-flex justify-content-center align-items-center`}
      onClick={handleClick}
    >
      <div className="px-2 d-flex justify-content-center">
        {value === 'hot' ? <Fire/> : value === 'new' ? <GearWide/> : <GraphUpArrow/>}
      </div>
      {text}
    </button>
  );
};
 
export default ToggleButton;
