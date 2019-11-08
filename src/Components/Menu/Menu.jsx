import React from 'react';

import s from './Menu.module.sass';

class Menu extends React.Component {
    constructor() {
        super();
        let StyleForMenu = {
            background: 'none',
            boxShadow: '0 0 10px black'
        }
        let StyleForMenuForContact = {
            background: 'white',
            boxShadow: '0 0 10px black'
        }
        this.state = {
            StyleForMenu: StyleForMenu,
            StyleForMenuForContact: StyleForMenuForContact,
        }
    }

    componentDidMount = () => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > (document.documentElement.clientHeight) * 0.2) {
                this.setState({
                    StyleForMenu: {
                        background: 'white',
                        boxShadow: '0 0 10px black'
                    }
                })
            } else {
                this.setState({
                    StyleForMenu: {
                        background: 'none',
                        boxShadow: '0 0 10px black'
                    }
                })
            }
        })
        let location = window.location.pathname;
        this.setState({
            location: location
        })
    }

    render() {
        return (
            <div>
                <div style = {(this.state.location === '/') ? this.state.StyleForMenu : this.state.StyleForMenuForContact} className ={s.Menu}>
                    <div className={s.MenuMax}>
                        <a href='/Contact'><div className={s.Contact}><div></div><span>Contact</span></div></a>
                        <a href='/'><div className={s.Main}><div></div><span>Main</span></div></a>
                        <a href='/Projects'><div className={s.Projects}><div></div><span>Projects</span></div></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;