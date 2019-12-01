import React from "react";

import s from "./Footer.module.sass";
import SideBar from "./SideBar.jsx";
import LikeBtn from "./LikeBtn.jsx";
import Text from "./Text.jsx";
import Comments from "./CommentSystem/CommentSystem.jsx";

class Footer extends React.Component {
  componentDidMount() {
    fetch("https://sepezho.ru:7777/API/ChatLikes", {
      method: "POST"
    }).then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          dataChatLikes: {
            dataChat: data.Chat,
            dataLikes: data.Likes,
            dataIsLiked: data.IsLiked
          }
        })
      })
      .catch(error => {
        console.log(error);
      });
  }
  renderComLik(){
    if(this.state){
    return (
      <div><LikeBtn likes={this.state.dataChatLikes.dataLikes} dataIsLiked={this.state.dataChatLikes.dataIsLiked}/>
      <Comments dataChat={this.state.dataChatLikes.dataChat}/></div>
    )
  }
}
  render(){
  return (
    <div className={s.FooterMain}>
      <div className={s.Footer}>
        <SideBar />
        <Text />
        {this.renderComLik()}
      </div>
    </div>
  );
}
};

export default Footer;
