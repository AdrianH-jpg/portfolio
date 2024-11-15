import React, { useState } from 'react';
import emailjs from '@emailjs/browser';





const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(import.meta.env.VITE_APP_EMAILJS_SERVICE_ID, import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, e.current, {publicKey:
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY},
      ).then(
      (result) => {
        console.log('Email enviado:', result.text);
        
        alert('Email enviado con éxito');
        setFormData({ name: '', email: '', subject: '', message: '' });
      },
      (error) => {
        console.error('Error al enviar:', error.text);
        alert('Hubo un problema al enviar el email');
        console.log('publicKey:', import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY);
      }
    );
  };

  return (
    <div className="contact-page">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="user_name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="user_email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactPage;
