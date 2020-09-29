import React from "react";

import Form from "./Form.jsx";
import s from "./ContactPage.module.sass";

class ContactPage extends React.Component {
  render() {
    return (
      <div className={s.ContactPage}>
        <h1>{this.props.language ? 'Сообщение' : 'Message'}</h1>
        <Form language={this.props.language} />
      </div>
    );
  }
};

export default ContactPage;
