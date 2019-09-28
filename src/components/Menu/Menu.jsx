import React from 'react';
import s from './Menu.module.css';

class QuestionListItem extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'none',
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', () => {
    	if(window.scrollY){
      	 this.setState({
      		background: 'white',
     	 })
  		}else{
  			this.setState({
      		background: 'none',
     	 })
  		}
    });
  };

  render() {
    return (
	    <div style={{ background: this.state.background }} className ={s.Menu}>
    		<div className={s.Contact}><div></div><a href='/Contact'>Contact</a></div>
    		<div className={s.Main}><div></div><a href='/Main'>Main</a></div>
    		<div className={s.Projects}><div></div><a href='/Projects'>Projects</a></div>
    	</div>
    );
  }
}
export default QuestionListItem;