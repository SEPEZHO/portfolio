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
            location: '/Main'
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
    }

    render() {
        return (
            <div>
                <div style = {(this.props.path === '/Main') ? this.state.StyleForMenu : this.state.StyleForMenuForContact} className ={s.Menu}>
                    <div className={s.MenuMax}>
                        <div className={s.Contact} onClick={() => {this.props.pathMain('/Contact')}}><div></div><span>Контакт</span></div>
                        <div className={s.Main} onClick={() => {this.props.pathMain('/Main')}}><div></div><span>Главная</span></div>
                        <div className={s.Projects} onClick={() => {this.props.pathMain('/Projects')}}><div></div><span>Проекты</span></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;