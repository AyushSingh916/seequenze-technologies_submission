import React, { useEffect, useState } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase'; 

import Project from './Project';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsCollection = collection(db, 'projects');
        const querySnapshot = await getDocs(projectsCollection);
        const projectsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProjects(projectsData);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const addProject = async (newProject) => {
    try {
      // Add the new project to Firestore
      const docRef = await addDoc(collection(db, 'projects'), newProject);
      // Set the new project with its generated ID
      const projectWithId = { id: docRef.id, ...newProject };
      // Update the state with the new project added
      setProjects(prevProjects => [...prevProjects, projectWithId]);
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };  

  const onUpdate = async (updatedProject, action) => {
    if (action === 'DELETE') {
      // If action is DELETE, filter out the deleted project from the state
      setProjects(projects.filter(project => project.id !== updatedProject.id));
    }
    if (action === 'UPDATE') {
      // If action is UPDATE, update the state with the modified project
      setProjects(projects.map(project => project.id === updatedProject.id ? updatedProject : project));
    }
  };

  const onDelete = async (projectId) => {
    try {
      // Perform delete operation (e.g., delete project from the database)
      await deleteDoc(doc(db, 'projects', projectId));
      // Once delete is successful, refetch projects
      const updatedProjects = projects.filter(project => project.id !== projectId);
      setProjects(updatedProjects);
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div className="project-list">
        {projects.map((project) => (
          <Project key={project.id} project={project} onUpdate={onUpdate} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
