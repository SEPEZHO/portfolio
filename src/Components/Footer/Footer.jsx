import React from 'react';

import s from './Footer.module.sass';
import LikeBtn from './LikeBtn.jsx'
import DownMenu from './DownMenu.jsx'
import SideBar from './SideBar.jsx'
import Text from './Text.jsx'
import Comments from './CommentSystem/CommentSystem.jsx'

class Footer extends React.Component {
   constructor() {
        super();
        let Style = {
            top: '20vh',
        }
        this.state = {
            Style: Style,
        }
    }

    componentDidMount = () => {
        let location = window.location.pathname;
        this.setState({
            location: location
        })
    }

        render() {
        	return (
            	<div className={s.Footer} style = {(this.state.location === '/Projects') ? this.state.Style : {}}>
                    	<SideBar />
                    	<Text />
                    	<DownMenu />           
                    	<Comments />
                	    <LikeBtn />
            	</div>
        	)
        }
}

export default Footer;