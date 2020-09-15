import React from "react";

import Catch from "./CommentCatch.jsx";
import s from "./CommentSystem.module.sass";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valMessage: "",
      valName: ""
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
      alert(this.props.language ? 'Введите сообщение.' : 'Insert message.');
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
      this.setState({
        valMessage: "",
        valName: ""
      })
      alert(this.props.language ? 'Вы оставили комментарий.' : 'You left a comment.');
    } else {
      alert(this.props.language ? 'Введите имя.' : 'Insert your name.');
    }
  }
  render() {
    return (
      <div className={s.Comments}>
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
        <Catch dataChat={this.props.dataChat} />
      </div>
    );
  }
}

export default Comments;
