import "./Dropdown.css";

const Dropdown = ({ onClose }) => {
  return (
    <div className="dropdown">
      <ul className="dropdown-menu">
        <li><a href="#" onClick={onClose}>My Profile</a></li> 
        <li><a href="#" onClick={onClose}>Settings</a></li>  
        <li><a href="#" onClick={onClose}>Upgrade</a></li> 
        <li className="divider"></li> 
        <li><a href="#" onClick={onClose}>Log Out</a></li>  
      </ul>
    </div>
  );
};

export default Dropdown;
