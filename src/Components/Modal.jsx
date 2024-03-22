import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './Modal.css';
import { addProject } from '../store/projectSlice'; // Assuming cart-slice.js is where your Redux slice is defined

const Modal = ({ onClose }) => {
  const dispatch = useDispatch();

  const [image, setImage] = useState(null);
  const [authorName, setAuthorName] = useState('');
  const [description, setDescription] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleAuthorNameChange = (e) => {
    setAuthorName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch action to add project to Redux store
    dispatch(addProject({ image, authorName, description }));
    onClose(); // Close the modal after submission
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>Close</button>
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleImageChange} />
            <input
              type="text"
              placeholder="Author Name"
              value={authorName}
              onChange={handleAuthorNameChange}
            />
            <textarea
              placeholder="Description (optional)"
              value={description}
              onChange={handleDescriptionChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
