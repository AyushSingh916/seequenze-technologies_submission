import React, { useRef } from "react";
import SideBtn from "../UI/SideBtn";
import "./SideBar.css";

const SideBar = (props) => {
  const dialog = useRef();

  const handleClick = () => {
    dialog.current.showModal();
  };

  return (
    <div className="SideBar">
      <div className="upper-side-bar">
        <img src="/src/assets/Necleo.svg" className="logo"/>
        <hr />
        <SideBtn path={"/src/assets/DB.svg"} text={"My Projects"} />
        <SideBtn
          path={"/src/assets/Sample_Project.svg"}
          text={"Sample Projects"}
        />
        <hr />
        <SideBtn path={"/src/assets/Apps.svg"} text={"Apps"} />
        <SideBtn path={"/src/assets/Play.svg"} text={"Intro to Necleo"} />
      </div>
      <div className="lower-side-bar">
        <SideBtn
          path={"/src/assets/QuestionMark.svg"}
          text={"Help & Support"}
        />
        <SideBtn
          path={"/src/assets/Feedback.svg"}
          text={"Feedback"}
        />
        <SideBtn
          path={"/src/assets/Collapse.svg"}
          text={"Collapse"}
        />
      </div>
    </div>
  );
};

export default SideBar;
