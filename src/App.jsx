import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import ResumePage from './components/ResumePage';
import NavBar from './components/NavBar';
import './App.css'; // Asegúrate de importar el CSS

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/resume" element={<ResumePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
