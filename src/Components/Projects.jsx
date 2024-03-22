import React from 'react';
import useFetchData from '../hooks/useFetchData.js';
import Project from './Project';
import "./Projects.css";
import { useDispatch } from 'react-redux';
import { addProject, updateProject, deleteProject } from '../store/projectSlice';

const Projects = () => {
  const dispatch = useDispatch();

  const handleAddProject = () => {
    dispatch(addProject({ id: 1, name: 'New Project' }));
  };

  const handleUpdateProject = () => {
    dispatch(updateProject({ id: 1, updatedProject: { name: 'Updated Project' } }));
  };

  const handleDeleteProject = () => {
    dispatch(deleteProject(1));
  };

  const { data: projects, isLoading, error } = useFetchData('https://picsum.photos/v2/list?page=1&limit=6');

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  {console.log(projects)}

  return (
    <div>
      <div className="project-list">
        {projects && projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
