import React from 'react';

import s from './Footer.module.css';

class LikeBtn extends React.Component {
    constructor() {
        super();
        this.state = {
            isLiked: false,
        };
    }

    Like = () => {
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
        }else{
            this.setState({
                
            })
        }
    }

    componentDidMount() {
        fetch('/likes/num', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => { return response.json() })
            .then(data => {
                this.setState({ Likes: data })
            })
    }

    render() {
        return (
            <div className={s.LikeBtn} style={{background: this.state.background}}onClick={this.Like}>
                <span>
                    Likes:{this.state.Likes}
                </span>
            </div>
        )
    }
}

export default LikeBtn;