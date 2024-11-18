import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation to retrieve state
import NewProject from './NewProject'; // Ensure NewProject is imported
import './ProjectsPage.css';

const ProjectsPage = () => {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Sample Project', episodes: 4, lastEdited: 'a week ago' },
  ]);
  const location = useLocation();  // Use location to access the passed state
  const newProjectName = location.state?.projectName;  // Get the project name passed via state

  // Add project to the list
  const addProject = (name) => {
    setProjects((prevProjects) => [
      ...prevProjects,
      {
        id: prevProjects.length + 1,
        name,
        episodes: 0,
        lastEdited: 'just now',
      },
    ]);
  };

  // If there’s a new project name, add it to the list after navigation
  useEffect(() => {
    if (newProjectName) {
      addProject(newProjectName);
    }
  }, [newProjectName]);  // Runs only when newProjectName changes

  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="projects-page">
      <header className="header">
        <h1>Projects</h1>
        <div className="header-icons">
          <span>⚙️</span>
          <span>🔔</span>
        </div>
        <button className="create-new-btn" onClick={() => setIsModalOpen(true)}>
          + Create New Project
        </button>
      </header>

      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-initials">
              {project.name[0].toUpperCase()}
            </div>
            <div className="project-details">
              <h3>{project.name}</h3>
              <p>{project.episodes} Episodes</p>
              <p>Last edited {project.lastEdited}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal to create a new project */}
      {isModalOpen && (
        <NewProject
          addProject={addProject}  // Pass addProject function as a prop
          closeModal={() => setIsModalOpen(false)}  // Close modal function
        />
      )}
    </div>
  );
};

export default ProjectsPage;
