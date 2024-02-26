import DownMenu from "./DownMenu";
import { useState } from "react";

const DropDownButton = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={handleToggle}>
        Show Options
      </button>
      {isOpen && (
        <DownMenu options={options} onSelect={onSelect} />
      )}
    </div>
  );
};

export default DropDownButton;