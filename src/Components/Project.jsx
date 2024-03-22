import React, { useState } from 'react';
import Card from '../UI/Card';
import Modal from '../UI/EditModal'; // Import your modal component
import './Project.css';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

const Project = ({ project, onUpdate }) => { // Pass onUpdate as prop
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedProject, setEditedProject] = useState({ ...project });

  const handleEdit = () => {
    setIsModalOpen(true); // Open the modal for editing
  };

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, 'projects', project.id)); // Delete the project from Firestore
      console.log('Project deleted successfully');
      onUpdate(editedProject, "DELETE"); // Update UI after deletion
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close the modal
  };

  const handleSaveChanges = async () => {
    try {
      await updateDoc(doc(db, 'projects', project.id), editedProject); // Update the project in Firestore
      console.log('Project updated successfully');
      setIsModalOpen(false); // Close the modal after saving changes
      onUpdate(editedProject, "UPDATE"); // Update UI after updating
    } catch (error) {
      console.error('Error updating project:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedProject((prevProject) => ({
      ...prevProject,
      [name]: value,
    }));
  };

  return (
    <div>
      <button className="project-btn" onClick={handleEdit}>
        <Card
          imageUrl={project.download_url}
          title={project.author}
          description={"This is a Project."}
        />
      </button>
      {/* Modal for editing project */}
      {isModalOpen && (
        <Modal onClose={handleModalClose}>
          <h2>Edit Project</h2>
          <label>
            Image URL:
            <input
              type="text"
              name="download_url"
              value={editedProject.download_url}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Author:
            <input
              type="text"
              name="author"
              value={editedProject.author}
              onChange={handleInputChange}
            />
          </label>
          <button onClick={handleSaveChanges}>Save Changes</button>
          <button onClick={handleDelete}>Delete Project</button>
        </Modal>
      )}
    </div>
  );
};

export default Project;
