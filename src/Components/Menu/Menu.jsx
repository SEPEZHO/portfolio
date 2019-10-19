import React from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';

import ToTop from '../../Static/Images/ToTop.png';

import s from './Menu.module.css';

class Menu extends React.Component {
    constructor() {
        super();
        let StyleForMenu = {
            background: 'none',
            boxShadow: '0 0 0.5vw black'
        }
        let StyleForMenuForContact = {
            background: 'white',
            boxShadow: '0 0 0.5vw black'
        }
        let StyleForToTop = {
            display: 'none'
        }
        this.state = {
            StyleForToTop: StyleForToTop,
            StyleForMenu: StyleForMenu,
            StyleForMenuForContact: StyleForMenuForContact,
        }
    }

    componentDidMount = () => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > (document.documentElement.clientHeight) * 0.2) {
                this.setState({
                    StyleForToTop: {
                        display: 'block'
                    },
                    StyleForMenu: {
                        background: 'white',
                        boxShadow: '0 0 0.5vw black'
                    }
                })
            } else {
                this.setState({
                    StyleForToTop: {
                        display: 'none',
                    },
                    StyleForMenu: {
                        background: 'none',
                        boxShadow: '0 0 0.5vw black'
                    }
                })
            }
        })
        let location = window.location.pathname;
        this.setState({
            location: location
        })
    }

    ToTop = () => {
        window.scrollTo(window.scrollTo, 0);
    }

    render() {
        return (
            <div>
          <div style = {(this.state.location === '/') ? this.state.StyleForMenu : this.state.StyleForMenuForContact} className ={s.Menu}>
          <div className={s.Contact}><div></div><a href='/Contact'>Contact</a></div>
          <div className={s.Main}><div></div><a href='/'>Main</a></div>
          <div className={s.Projects}><div></div><a href='/Projects'>Projects</a></div>
          <img alt='' src={ToTop} className={s.ToTop} onClick={this.ToTop} style={(this.state.location === '/') ? this.state.StyleForToTop: {display: 'none'}}/>
        </div>
        </div>
        );
    }
}

export default Menu;