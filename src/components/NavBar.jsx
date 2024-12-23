// NavBar.js
import { Link } from 'react-router-dom';
import './NavBar.css'; // Importa el archivo de CSS

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="icon-container">
        <img src="/src/assets/logo circular.png" alt="Profile Icon" className="profile-icon" />
      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/resume">Resume</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
