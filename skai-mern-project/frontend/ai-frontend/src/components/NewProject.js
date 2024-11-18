import React, { useState } from 'react';
import './NewProject.css';
import logo from '../components/images/QuesLogo 1.png'; 
import illustration from '../components/images/cuate.png'; 

const NewProject = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName, setProjectName] = useState('');
  const [projects, setProjects] = useState([]); // To manage created projects

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleCreateProject = () => {
    if (!projectName) {
      alert("Project Name can't be empty.");
      return;
    }
    const newProject = {
      name: projectName,
      episodes: 0, // Placeholder for now
      lastEdited: 'Just now',
    };
    setProjects([...projects, newProject]);
    setProjectName('');
    handleCloseModal();
  };

  return (
    <div className="new-project-container">
      <header className="header">
        <img src={logo} alt="Ques.AI Logo" className="logo" />
        <div className="header-icons">
          <span className="icon">⚙️</span>
          <span className="icon">🔔</span> 
        </div>
      </header>

      <main className="main-content">
        <h1>Create a New Project</h1>
        <div className="content-wrapper">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate.
          </p>
          <img src={illustration} alt="Project Illustration" className="illustration" />
        </div>
        <button className="create-button" onClick={handleOpenModal}>
          + Create New Project
        </button>

        {/* Project List */}
        <section className="projects-list">
          <h2>Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-initials">{project.name.slice(0, 2)}</div>
              <div>
                <h3>{project.name}</h3>
                <p>{project.episodes} Episodes</p>
                <small>Last edited {project.lastEdited}</small>
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Create Project</h2>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter Project Name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
              {!projectName && <small className="error-text">Project Name can't be empty</small>}
            </div>
            <div className="modal-actions">
              <button onClick={handleCloseModal} className="cancel-btn">Cancel</button>
              <button onClick={handleCreateProject} className="create-btn">Create</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewProject;
