import React from 'react';

import Catch from './CommentCatch.jsx'
import ForComments from '../../../Static/Images/ForComments.png'
import s from './CommentSystem.module.css';

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valMessage: '',
            valName: '',
            nameStyle: {
                opacity: 0,
                bottom: 0,
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
        if (this.state.valMessage !== '') {
            this.setState({
                nameStyle: {
                    opacity: 1,
                    top: '7%',
                }
            })
        } else {
            alert('Введите сообщение')
        }
    }
    handleSubmitName(event) {
        if (this.state.valName !== '') {
            fetch('/API/Chat', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify({
                    valMessage: this.state.valMessage,
                    valName: this.state.valName
                })
            })
            this.setState({
                nameStyle: {
                    opacity: 0,
                    bottom: 0,
                }
            });
        } else {
            alert('Введите имя')
        }
    }
    render() {
        return (
            <div className={s.Comments}>
                <h1>Comments</h1>
                <img src={ForComments} alt="#" />
                <div className={s.FormAreaName} style = {this.state.nameStyle}>
                        <input className={s.InputName} type="text" value={this.state.valName} placeholder="Name" onChange={this.handleChangeName}/>
                        <button onClick={this.handleSubmitName} className={s.InputSubmitName}>Send</button>
                </div>
                <div className={s.FormAreaMessage}>
                        <input className={s.InputMessage} type="text" value={this.state.valMessage} placeholder="Ur message" onChange={this.handleChangeMessage} />
                        <button onClick={this.handleSubmitMessage} className={s.InputSubmitMessage}>Send</button>
                </div>
                <Catch/>
            </div>
        )
    }
}

export default Comments;