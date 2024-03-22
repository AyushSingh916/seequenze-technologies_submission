import "./SideBtn.css";

const SideButton = ({ path, text }) => {

  return (
    <div className="sidebar-btn">
      <button>
        <img src={path}></img>
        <p>{text}</p>
      </button>
    </div>
  );
};

export default SideButton;
