import React from "react";

import Catch from "./CommentCatch.jsx";
import s from "./CommentSystem.module.sass";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valMessage: "",
      valName: "",
      alertMessage: "",
      alertStyle: {
        opacity: 0
      }
    };
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSubmitMessage = this.handleSubmitMessage.bind(this);
    this.handleSubmitName = this.handleSubmitName.bind(this);
  }
  handleChangeMessage(event) {
    this.setState({ valMessage: event.target.value });
  }
  handleChangeName(event) {
    this.setState({ valName: event.target.value });
  }
  handleSubmitMessage(event) {
    if (this.state.valMessage !== "") {
      this.handleSubmitName();
    } else {
      let m = this.props.language ? 'Введите сообщение.' : 'Insert message.'
      this.setState({alertMessage: m});
      this.setState({alertStyle: {opacity: 1}});
      setTimeout(()=>{
        this.setState({alertStyle: {opacity: 0}});
      }, 5000)
    }
  }
  handleSubmitName(event) {
    if (this.state.valName !== "") {
      fetch("https://sepezho.com:7777/API/Chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify({
          valMessage: this.state.valMessage,
          valName: this.state.valName
        })
      });

      this.props.dataChat.unshift({
        Date: new Date().toISOString(),
        Id: this.props.dataChat.length + 1,
        Message: this.state.valMessage,
        Name: this.state.valName
      });

      this.setState({
        valMessage: "",
        valName: ""
      })

      let m = this.props.language ? 'Вы оставили комментарий.' : 'You left a comment.';
      this.setState({alertMessage: m})
      this.setState({alertStyle: {opacity: 1}});
      setTimeout(()=>{
        this.setState({alertStyle: {opacity: 0}});
      }, 5000)

    } else {
      let m = this.props.language ? 'Введите имя.' : 'Insert your name.';
      this.setState({alertMessage: m});
      this.setState({alertStyle: {opacity: 1}});
      setTimeout(()=>{
        this.setState({alertStyle: {opacity: 0}});
      }, 5000)
    }
  }
  render() {
  return (
      <div className={s.Comments}>
        <div className={s.Alert} style={this.state.alertStyle}>
          {this.state.alertMessage}
        </div>
        <div className={s.FormAreaName}>
          <input
            className={s.InputName}
            type="text"
            value={this.state.valName}
            placeholder= {this.props.language ? 'Имя' : 'Name'}
            onChange={this.handleChangeName}
          />
          <button
            onClick={this.handleSubmitMessage}
            className={s.InputSubmitName}
          >
          {this.props.language ? 'Отправить' : 'Sent'}
          </button>
        </div>
        <div className={s.FormAreaMessage}>
          <input
            className={s.InputMessage}
            type="text"
            value={this.state.valMessage}
            placeholder={this.props.language ? 'Комментарий' : 'Comment'}
            onChange={this.handleChangeMessage}
          />
        </div>
        <Catch dataChat={this.props.dataChat} message={this.state.valMessage} name={this.state.name} />
      </div>
    );
  }
}

export default Comments;
