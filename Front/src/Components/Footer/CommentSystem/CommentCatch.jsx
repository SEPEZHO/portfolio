import React from "react";
import dayjs from "dayjs";

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
              {dayjs(message.Date).format('MMM DD, YYYY h:mm A')}
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
