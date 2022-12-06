import React from 'react';
import './Contact.css';
import ContactForm from '../../components/Layout/ContactForm';
import Loader from 'react-loaders';
 function Contact() {
  return (
    <div>
      <br/>   
      <br/> 
      <br/> 
      
      <br/>   
      <br/> 
      
      <ContactForm />
      <Loader type="line-scale" color="grey" width={500} />
    </div>
  )
}
export default Contact;