const ResumePage = () => {
  const resumeData = {
    downloadLink: "https://example.com/resume.pdf"
  };

  return (
    <section id="resume">
      <h2>Resume</h2>
      <a href={resumeData.downloadLink} download>Download Resume</a>
      <pre>{JSON.stringify(resumeData, null, 2)}</pre>
    </section>
  );
};

export default ResumePage;
