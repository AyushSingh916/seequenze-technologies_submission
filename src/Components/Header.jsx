import Dropdown from "./Dropdown";
import { useState } from "react";

import "./Header.css";

export default function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div className="nav">
      <div className="nav-right">
      <a href="#"><strong>Free Trial |</strong> 2 days left</a>
        <img src="src\assets\Ellipse 1.png"/>
        <button onClick={toggleDropdown}>
          <img src="src\assets\Core.svg" />
        </button>
        {showDropdown && <Dropdown onClose={toggleDropdown} />}
      </div>
      <p className="orange-text">Extend Free Trial</p>
    </div>
  );
}
