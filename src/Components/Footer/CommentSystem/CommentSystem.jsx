import React from 'react';

import s from './CommentSystem.module.css';

class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            val: '',
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ val: event.target.value });
    }
    handleSubmit(event) {
        fetch('/API/Chat', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
      				'Content-Type': 'application/json'
                },
                body: JSON.stringify({val: this.state.val})
            })
        event.preventDefault();
    }
    render() {
        return (
            <div className={s.Comments}>
      			<h1>Comments</h1>
      			<form onSubmit={this.handleSubmit} className={s.FormArea}>
          			<input className={s.InputText} type="text" value={this.state.val} onChange={this.handleChange} />
        			<input className={s.InputSubmit} type="submit" value="Отправить" />
      			</form>
        	</div>
        )
    }
}

export default Comments;