
import { Link } from 'react-router-dom';
const Homepage = () => {
  const data = {
    name: "Adrian Hahn",
    title: "Backend Developer",
    navigationLinks: ["Home", "About", "Projects", "Blog", "Contact"],
    bio: "I am a Computer Systems Analyst, backend developer, and robotics teacher with experience in building web applications.",
    callToAction: "View My Work"
  };

  return (
    <section id="home">
      <h1>{data.name}</h1>
      <h2>{data.title}</h2>
      <p>{data.bio}</p>
      <Link to="/projects">
        <button>{data.callToAction}</button>
      </Link>
      
    </section>
  );
};

export default Homepage;
