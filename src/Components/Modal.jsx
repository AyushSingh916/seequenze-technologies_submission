import React, { useState } from 'react';
import './Modal.css';
import { db } from '../config/firebase'; // Import the Firebase Firestore instance
import {
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore";

const Modal = ({ onClose }) => {
  const [imageUrl, setImageUrl] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [description, setDescription] = useState('');

  const handleImageUrlChange = (e) => {
    setImageUrl(e.target.value);
  };

  const handleAuthorNameChange = (e) => {
    setAuthorName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Add the project data to Firestore
      await addDoc(collection(db, 'projects'), {
        download_url: imageUrl,
        author: authorName,
        description,
      });
  
      onClose(); // Close the modal after submission
      window.location.reload();
    } catch (error) {
      console.error('Error adding project to Firestore:', error);
    }
  };  
  
  // Function to generate a random ID (replace with your own logic if needed)
  const generateRandomId = () => {
    // Generate a random string of characters
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 10; // Adjust the length of the ID as needed
    let randomId = '';
    for (let i = 0; i < length; i++) {
      randomId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomId;
  };
  
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>Close</button>
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Image URL"
              value={imageUrl}
              onChange={handleImageUrlChange}
            />
            {imageUrl && <img src={imageUrl} alt="Preview" style={{ maxWidth: '100%', maxHeight: '200px' }} />}
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
