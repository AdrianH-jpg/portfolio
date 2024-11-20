
import { Link } from 'react-router-dom';
import './ContactUs.css';
const Homepage = () => {
  const data = {
    name: "Adrian Hahn",
    title: "Backend Developer",
    navigationLinks: ["Home", "About", "Projects", "Blog", "Contact"],
    bio: "I am a Computer Systems Analyst, backend developer, and robotics teacher with experience in building web applications.",
    callToAction: "View My Work"
  };

  return (
    <section id="home" className="home-page">
      <div className="form">
      <h1>{data.name}</h1>
      <h2>{data.title}</h2>
      <p>{data.bio}</p>
      <Link to="/projects">
        <button>{data.callToAction}</button>
      </Link>
      </div>
    </section>
  );
};

export default Homepage;
