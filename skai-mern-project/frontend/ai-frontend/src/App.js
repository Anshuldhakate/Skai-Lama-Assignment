import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import NewProject from './components/NewProject';
import ProjectsPage from './components/ProjectsPage';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path='/newProject' element={<NewProject/>} />
      <Route path='/projectPage' element={<ProjectsPage/>} />
      {/* Add additional routes as needed */}
    </Routes>
  );
};

export default App;
