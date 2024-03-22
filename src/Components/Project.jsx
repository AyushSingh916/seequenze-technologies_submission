import React, { useState } from 'react';
import Card from '../UI/Card';
import Modal from '../UI/EditModal'; // Import your modal component
import './Project.css';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

const Project = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedProject, setEditedProject] = useState({ ...project });

  const handleEdit = () => {
    // Open the modal for editing
    setIsModalOpen(true);
  };

  const handleDelete = async () => {
    try {
      // Delete the project from Firestore
      await deleteDoc(doc(db, 'projects', project.id));
      console.log('Project deleted successfully');
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  const handleModalClose = () => {
    // Close the modal
    setIsModalOpen(false);
  };

  const handleSaveChanges = async () => {
    try {
      // Update the project in Firestore
      await updateDoc(doc(db, 'projects', project.id), editedProject);
      console.log('Project updated successfully');
      // Close the modal after saving changes
      setIsModalOpen(false);
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
