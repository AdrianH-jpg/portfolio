import React from 'react';

const ProjectsPage = () => {
  const projectsData = [
    {
      title: "Project 1",
      description: "A web application built using React and Node.js.",
      liveDemoLink: "https://example.com/demo1",
      sourceCodeLink: "https://github.com/example/project1",
      screenshots: ["screenshot1.png", "screenshot2.png"]
    },
    {
      title: "Project 2",
      description: "A mobile app created with React Native.",
      liveDemoLink: "https://example.com/demo2",
      sourceCodeLink: "https://github.com/example/project2",
      screenshots: ["screenshot3.png", "screenshot4.png"]
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <pre>{JSON.stringify(projectsData, null, 2)}</pre>
    </section>
  );
};

export default ProjectsPage;
