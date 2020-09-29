import React from "react";

import s from "./CommentSystem.module.sass";

class CommentCatch extends React.Component {
  componentDidMount() {
    this.handleMessage()
  }

  componentWillReceiveProps(){
    this.handleMessage()
  }

  handleMessage() {
    let i = 0;
    const Comments = this.props.dataChat.map(message => {
      return (
        <div key={i++}>
          <hr />
          <div className={s.Message}>
            <hr />
            <div className={`${s.Name} ${s.Block}`}>
              <span>{message.Name}</span>
            </div>
            <div className={`${s.Date} ${s.Block}`}>
              {Number(message.Date.substring(11).slice(0, -5).split(':')[0]) + 3 + ':' + message.Date.substring(11).slice(0, -5).split(':')[1]} {(message.Date.substring(0, 10)+'').replaceAll('-', '.')}
            </div>
            <div className={`${s.MessageText} ${s.Block}`}>
              {message.Message}
            </div>
          </div>
        </div>
      );
    });
    this.setState({ Comments });
  }
  render() {
    if (this.state) {
      return <div className={s.Catch}>{this.state.Comments}</div>;
    } else {
      return <p style={{ padding: "40px" }}>Loading...</p>;
    }
  }
}
export default CommentCatch;
