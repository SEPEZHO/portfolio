import React from 'react';

import s from './Footer.module.sass';

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
                fetch('/likes', {
                    method: 'POST'
                })
                let Likes = this.state.Likes;
                Likes++
                this.setState({
                    background: '#ff6b61',
                    Likes: Likes,
                    isLiked: true
                })
            }
        } else {
            this.setState({
                opacity: 1
            })
            setTimeout(() => {
                this.setState({
                    opacity: 0
                })
            }, 2000)
        }
    }

    componentDidMount() {
        fetch('/API/likes/num', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => { return response.json() })
            .then(data => {
                this.setState({
                    Likes: data.Likes,
                    IsLikedServ: data.IsLiked
                })
                if (data.IsLiked) {
                    this.setState({
                        background: '#ff6b61'

                    })
                }
            })
    }

    render() {
        return (
            <div>
                <div className={s.LikeMess} style={{opacity: this.state.opacity}}>U already liked from this device.</div>
            <div className={s.LikeBtn} style={{background: this.state.background}}onClick={this.Like}>
                <span>
                    Likes:{this.state.Likes}
                </span>
            </div>
            </div>

        )
    }
}

export default LikeBtn;