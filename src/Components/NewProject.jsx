import React, { useState } from "react";
import Card from "../UI/Card";
import Modal from "./Modal";
import "./NewProject.css";

const NewProject = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleSubmit = (formData) => {
    // Handle form submission data here
    console.log("Form Data:", formData);
    setModalOpen(false);
  };

  return (
    <div className="new-project">
      <button onClick={handleModalOpen}>
        <Card
          imageUrl="/public/BG.png"
          title="Create New Project"
          description="Click to create a new project."
        />
      </button>
      {modalOpen && (
        <Modal onClose={handleModalClose} onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default NewProject;
