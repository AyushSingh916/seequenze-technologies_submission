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
        <div className="trial">
          <a href="#">
            <strong>Free Trial |</strong> 2 days left
          </a>
          <p style={{ fontWeight: "bold", color: "orange" }}>
            Extend Free Trial
          </p>
        </div>
        <img src="public/user.jpg" alt="user-image" />
        <button onClick={toggleDropdown}>
          <svg
            width="12"
            height="6"
            viewBox="0 0 12 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.41421 0C1.52331 0 1.07714 1.07714 1.70711 1.70711L5.29289 5.29289C5.68342 5.68342 6.31658 5.68342 6.70711 5.29289L10.2929 1.70711C10.9229 1.07714 10.4767 0 9.58579 0H2.41421Z"
              fill="black"
            />
          </svg>
        </button>
        {showDropdown && <Dropdown onClose={toggleDropdown} />}
      </div>
    </div>
  );
}
