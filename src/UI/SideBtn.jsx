import "./SideBtn.css";

const SideButton = ({ svg, text }) => {

  return (
    <div className="sidebar-btn">
      <button>
        {svg}
        <p>{text}</p>
      </button>
    </div>
  );
};

export default SideButton;
