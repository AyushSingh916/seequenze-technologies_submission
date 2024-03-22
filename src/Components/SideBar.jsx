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
        <img src="/public/Necleo.svg" className="logo"/>
        <hr />
        <SideBtn path={"/public//DB.svg"} text={"My Projects"} />
        <SideBtn
          path={"/public/Sample_Project.svg"}
          text={"Sample Projects"}
        />
        <hr />
        <SideBtn path={"/public/Apps.svg"} text={"Apps"} />
        <SideBtn path={"/public/Play.svg"} text={"Intro to Necleo"} />
      </div>
      <div className="lower-side-bar">
        <SideBtn
          path={"/public/QuestionMark.svg"}
          text={"Help & Support"}
        />
        <SideBtn
          path={"/public/Feedback.svg"}
          text={"Feedback"}
        />
        <SideBtn
          path={"/public/Collapse.svg"}
          text={"Collapse"}
        />
      </div>
    </div>
  );
};

export default SideBar;
