import React from 'react';
import ToTop from '../../Static/Images/ToTop.png';

import s from './Menu.module.css';

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'none',
      display: 'none'

    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', () => {
    	if(window.scrollY > (document.documentElement.clientHeight)*0.2){
        console.log();
      	 this.setState({
      		background: 'white',
          display: 'block'
     	 })
  		}else{
  			this.setState({
      		background: 'none',
          display: 'none'
     	 })
  		}
    });
  };
  ToTop = () =>{
    window.scrollTo(window.scrollTo, 0);
  }
  render() {
    return (
      <div>
	      <div style={{ background: this.state.background }} className ={s.Menu}>
    	 	  <div className={s.Contact}><div></div><a href='/Contact'>Contact</a></div>
    		  <div className={s.Main}><div></div><a href='/'>Main</a></div>
    		  <div className={s.Projects}><div></div><a href='/Projects'>Projects</a></div>
        </div>
        <img alt='' src={ToTop} className={s.ToTop} onClick={this.ToTop} style={{ display: this.state.display }} />
    	</div>
    );
  }
}
export default Menu;