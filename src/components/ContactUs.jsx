import React, {useRef , useState} from 'react';
import emailjs from '@emailjs/browser';
import Linkedin from '../assets/LinkedIn';
import Gmail from '../assets/Gmail';
import GitHub from '../assets/GitHub';
import X from '../assets/X';
import './ContactUs.css';

const ContactUs= () => {
 const refForm = useRef();
 const [statusMessage, setStatusMessage] = useState({ text: '', isSuccess: false });

 const handleSubmit = (event) => {
    event.preventDefault();
    const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
    const apiKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
    .then(result => {console.log(result.text);
        setStatusMessage({ text: 'Message sent successfully!', isSuccess: true });
        refForm.current.reset(); // Limpiar el formulario solo si se envía con éxito
        closeStatusMessageAfterDelay();
    })
    .catch( error => {console.error(error);
        setStatusMessage({ text: 'Failed to send message. Please try again.', isSuccess: false });
        closeStatusMessageAfterDelay();
    })
 };

 const closeStatusMessage = () => {
    setStatusMessage({ text: '', isSuccess: false });
  };

  const closeStatusMessageAfterDelay = () => {
    setTimeout(() => {
      closeStatusMessage();
    }, 5000); // Cierra el mensaje automáticamente después de 5 segundos
  };

  const handleNavigation = (url) => {
    window.open(url, '_blank');
  };

  const copyToClipboard = () => {
    const email = 'adriandario3@gmail.com';
    navigator.clipboard.writeText(email)
      .then(() => {
        setStatusMessage({ text: 'Email copied successfully!', isSuccess: true });
        closeStatusMessageAfterDelay();
      })
      .catch(err => {
        console.error('Error al copiar al portapapeles: ', err);
        setStatusMessage({ text: 'Failed to copy Email. Please try again.', isSuccess: false });
        closeStatusMessageAfterDelay();
      });
  };

    return(
        <div className="contact-page">
            <form ref={refForm} action='' onSubmit={handleSubmit}>
                <label >Name</label>
                <input type="text" name="user_name" required  />
                <label >Subjet</label>
                <input type="text" name="subject" required  />
                <label>Email</label>
                <input type="email" name="user_email" required  />
                <label>Message</label>
                <textarea name="message" required />
                <input type="submit" value="Send" />
            </form>
            {statusMessage.text && (
                 <div className={`status-message ${statusMessage.isSuccess ? 'success show' : 'error show'}`}>
                 {statusMessage.text}
                 <button  onClick={closeStatusMessage} className="close-button">X</button>
               </div>
            )}
            <div className="social-links">
                <svg 
                onClick={() => handleNavigation('https://www.linkedin.com/in/adrian-hahn/')}
                style={{ cursor: 'pointer' }}><Linkedin/></svg>
                <svg onClick={() => handleNavigation('https://www.github.com/AdrianH-jpg')}
                style={{ cursor: 'pointer' }}><GitHub/></svg>
                <svg onClick={() => handleNavigation('https://x.com/Adrian_Darioo')}
                style={{ cursor: 'pointer' }}><X/></svg>
                <svg onClick={copyToClipboard} style={{ cursor: 'pointer' }}><Gmail/></svg>
            </div>
        </div>
    );
};
export default ContactUs;