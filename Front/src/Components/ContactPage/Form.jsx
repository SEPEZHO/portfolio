import React from "react";

import s from "./ContactPage.module.sass";

class FormArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueName: "",
      valueEmail: "",
      valueSubject: "",
      valueMessage: "",
      errorName: "",
      errorEmail: "",
      errorSubject: "",
      errorMessage: "",
      paddingClose: { padding: 0 },
      paddingOpen: {
        paddingTop: "2.5px",
        paddingBottom: "2.5px",
        paddingLeft: "5px",
        paddingRight: "5px"
      },
      alertMessage: "",
      alertStyle: {
        opacity: 0
      }
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangeSubject = this.handleChangeSubject.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({ valueName: event.target.value });
  }
  handleChangeEmail(event) {
    this.setState({ valueEmail: event.target.value });
  }
  handleChangeSubject(event) {
    this.setState({ valueSubject: event.target.value });
  }
  handleChangeMessage(event) {
    this.setState({ valueMessage: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    let error = false;
    if (this.state.valueName === "") {
      this.setState({ errorName: this.props.language ? 'Введите имя.' : 'Insert your name.' });
      error = true;
    } else {
      this.setState({
        errorName: ""
      });
    }
    if (this.state.valueEmail === "") {
      this.setState({ errorEmail: this.props.language ? 'Введите почту.' : 'Insert your mail.' });
      error = true;
    } else if (!~this.state.valueEmail.indexOf("@")) {
      this.setState({ errorEmail: this.props.language ? 'Вы забыли знак "@".' : 'You forgot "@".' });
      error = true;
    } else {
      this.setState({
        errorEmail: ""
      });
    }
    if (this.state.valueSubject === "") {
      this.setState({ errorSubject: this.props.language ? 'Введите тему.' : 'Insert your theme.' });
      error = true;
    } else {
      this.setState({
        errorSubject: ""
      });
    }
    if (this.state.valueMessage === "") {
      this.setState({ errorMessage: this.props.language ? 'Введите coобщение.' : 'Insert your message.' });
      error = true;
    } else {
      this.setState({
        errorMessage: ""
      });
    }
    if (!error) {
      let data = {
        name: this.state.valueName,
        email: this.state.valueEmail,
        subject: this.state.valueSubject,
        message: this.state.valueMessage
      };
      fetch("https://sepezho.com:7777/API/MailSnd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(data)
      })
      .then(response => {
          return response.json();
        })
        .then(dataRes => {
          if (dataRes.status) {
            let m = this.props.language ? 'Почта отправлена.' : 'Your message has been sent.';
            this.setState({alertMessage: m});
            this.setState({alertStyle: {opacity: 1}});
            setTimeout(()=>{
              this.setState({alertStyle: {opacity: 0}});
            }, 5000)
            this.setState({
              valueName: "",
              valueEmail: "",
              valueSubject: "",
              valueMessage: ""
            })
          } else {
            let m = this.props.language ? 'Произошла ошибка.' : 'Some error here.';
            this.setState({alertMessage: m});
            this.setState({alertStyle: {opacity: 1}});
            setTimeout(()=>{
              this.setState({alertStyle: {opacity: 0}});
            }, 5000)
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  render() {
    return (
      <div className={s.Form}>
        <div className={s.Alert} style={this.state.alertStyle}>
          {this.state.alertMessage}
        </div>
        <form className={s.FormArea}>
          <label>
            <p>{this.props.language ? 'Имя' : 'Name'}:</p>
            <input
              type="text"
              value={this.state.valueName}
              onChange={this.handleChangeName}
            />
          </label>
          <div
            className={s.errors}
            style={
              this.state.errorName === ""
                ? this.state.paddingClose
                : this.state.paddingOpen
            }
          >
            {this.state.errorName}
          </div>
          <label>
            <p>{this.props.language ? 'Ваш' : 'Your'} email:</p>
            <input
              type="text"
              value={this.state.valueEmail}
              onChange={this.handleChangeEmail}
            />
          </label>
          <div
            className={s.errors}
            style={
              this.state.errorEmail === ""
                ? this.state.paddingClose
                : this.state.paddingOpen
            }
          >
            {this.state.errorEmail}
          </div>
          <label>
            <p>{this.props.language ? 'Тема' : 'Theme'}:</p>
            <input
              type="text"
              value={this.state.valueSubject}
              onChange={this.handleChangeSubject}
            />
          </label>
          <div
            className={s.errors}
            style={
              this.state.errorSubject === ""
                ? this.state.paddingClose
                : this.state.paddingOpen
            }
          >
            {this.state.errorSubject}
          </div>
          <label>
            <p>{this.props.language ? 'Сообщение' : 'Message'}:</p>
            <textarea
              type="text"
              value={this.state.valueMessage}
              onChange={this.handleChangeMessage}
            />
          </label>
          <div
            className={s.errors}
            style={
              this.state.errorMessage === ""
                ? this.state.paddingClose
                : this.state.paddingOpen
            }
          >
            {this.state.errorMessage}
          </div>
          <button
            onClick={this.handleSubmit}
            className={s.InputSubmit}
          >
            {this.props.language ? 'Отправить' : 'Sent'}
          </button>
        </form>
        <span>sepezho@gmail.com</span>
    </div>
    );
  }
}

export default FormArea
