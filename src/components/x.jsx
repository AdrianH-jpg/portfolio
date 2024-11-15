

const ContactPage = () => {
  const contactData = {
    fields: ["Name", "Email", "Subject", "Message"],
    socialMediaLinks: ["LinkedIn", "GitHub", "Twitter"],
    emailAddress: "john.doe@example.com"
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <pre>{JSON.stringify(contactData, null, 2)}</pre>
    </section>
  );
};

export default ContactPage;
