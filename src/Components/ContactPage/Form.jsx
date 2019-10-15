import React from 'react';

import s from './ContactPage.module.css'

class FormArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	valueName: '',
    	valueEmail: '',
    	valueSubject: '',
    	valueReason: '',
    	valueMessage: ''
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeSubject = this.handleChangeSubject.bind(this);
    this.handleChangeReason = this.handleChangeReason.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({valueName: event.target.value});
  }handleChangeEmail(event) {
    this.setState({valueEmail: event.target.value});
  }handleChangeSubject(event) {
    this.setState({valueSubject: event.target.value});
  }handleChangeReason(event) {
    this.setState({valueReason: event.target.value});
  }handleChangeMessage (event) {
    this.setState({valueMessage: event.target.value});
  }

  handleSubmit(event) {
    console.log('Data: ' + JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.FormArea}>
        <label>
          Имя:<br />
          <input type="text" value={this.state.valueName} onChange={this.handleChangeName} />
        </label><br /><br />
        <label>
          Email:<br />
          <input type="text" value={this.state.valueEmail} onChange={this.handleChangeEmail} />
        </label><br /><br />
        <label>
          Subject:<br />
          <input type="text" value={this.state.valueSubject} onChange={this.handleChangeSubject} />
        </label><br /><br />
        <label>
          Reason:<br />
          <input type="text" value={this.state.valueReason} onChange={this.handleChangeReason} />
        </label><br /><br />
        <label>
          Message:<br />
          <textarea type="text" value={this.state.valueMessage} onChange={this.handleChangeMessage} />
        </label><br /><br />
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}

const Form = () => {
  return (
    <div className={s.Form}>
    	Form
    	<FormArea />
    </div>
  );
}

export default Form;