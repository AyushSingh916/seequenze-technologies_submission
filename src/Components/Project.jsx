import React from 'react';
import Card from '../UI/Card';

const Project = ({ project }) => {
  return (
    <Card
      imageUrl={project.download_url}
      title={project.author}
      description={"This is a Project."}
    />
  );
}

export default Project;
