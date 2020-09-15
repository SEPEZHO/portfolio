import React from "react";

import s from "./Footer.module.sass";

class LikeBtn extends React.Component {
  constructor() {
    super();
    this.state = {
      isLiked: false,
      opacity: 0
    };
  }

  Like = () => {
    if (!this.state.IsLikedServ) {
      if (!this.state.isLiked) {
        fetch("https://sepezho.com:7777/API/likes", {
          method: "POST"
        });
        let Likes = this.state.Likes;
        Likes++;
        this.setState({
          background: "#ff6b61",
          Likes: Likes,
          isLiked: true
        });
      }
    } else {
      this.setState({
        opacity: 1
      });
      setTimeout(() => {
        this.setState({
          opacity: 0
        });
      }, 2000);
    }
  };

  componentDidMount() {
    this.setState({
      Likes: this.props.likes,
      IsLikedServ: this.props.dataIsLiked
    });
    if (this.props.dataIsLiked) {
      this.setState({
        background: "#ff6b61"
      });
    }
  }

  render() {
    return (
      <div>
        <div className={s.LikeMess} style={{ opacity: this.state.opacity }}>
        {this.props.language ? 'Вы уже лайкали с этого устройства.' : 'You already liked from this device.'}
        </div>
        <div
          className={s.LikeBtn}
          style={{ background: this.state.background }}
          onClick={this.Like}
        >
          <span>{this.props.language ? 'Лайки' : 'Likes'}: {this.state.Likes}</span>
        </div>
      </div>
    );
  }
}

export default LikeBtn;
