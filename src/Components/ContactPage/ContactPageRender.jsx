import React from 'react';

import Form from './Form.jsx'
import s from './ContactPage.module.css'


const ContactPage = () => {
  return (
    <div className={s.ContactPage}>
        <h1>Contact Form</h1>
		<Form />
    </div>
  );
}

export default ContactPage;