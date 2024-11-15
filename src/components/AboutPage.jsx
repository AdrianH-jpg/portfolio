

const AboutPage = () => {
  const aboutData = {
    personalBackground: {
      education: "Computer Systems Analyst",
      additionalTraining:[
        "Full Stack Bootcamp",
        "Backend Course with Java, and Spring Boot"
      ],
      workExperience: ["6 years as a robotics teacher", "6 months as a Programer intern"]
    },
    technicalSkills: {
      programmingLanguages: ["Java", "C#"],
      frameworksAndLibraries: ["React", "Spring Boot"],
      toolsAndTechnologies: ["Git", "MySQL"]
    },
    softSkills: ["Communication", "Problem-Solving", "Teamwork"]
  };

  return (
    <section id="about">
      <h2>About Me</h2>
      <pre>{JSON.stringify(aboutData, null, 2)}</pre>
    </section>
  );
};

export default AboutPage;
