import React from 'react';

import ProjectsTable from './ProjectsTable.jsx'
import ProjectsText from './ProjectsText.jsx'
import ViewMore from '../../Static/Images/Icons/ViewMore.png';

import s from './Projects.module.css'

class Projects extends React.Component {
	constructor() {
        super();
        let styleForImg = {

		}
        this.state = {
            renderTimes: 10,
            styleForImg: styleForImg,
            tableOpen: false
        }
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }
	handleButtonClick = () => {
        if (this.tableOpen){
        	this.tableOpen = !this.tableOpen;
        	let styleForImg = {
    			transform: 'translate(-50%, 50%) rotate(180deg)',
    			'transform-origin': '50% 50%'
			}
        	this.setState ({
            	renderTimes: 100,
            	styleForImg: styleForImg
        	})
        }else{
        	this.tableOpen = !this.tableOpen;
        	let styleForImg = {
    			transform: 'translate(-50%, 25%) rotate(0deg)',
    			'transform-origin': '50% 50%'
			}
        	this.setState ({
            	renderTimes: 10,
            	styleForImg: styleForImg
        	})
        }
	}
  	render() {
  		return (
    		<div className={s.Projects}>
    			<div className={s.ProjectsTableMain}>
        			<h1>Activites </h1>
    				<ProjectsTable times={this.state.renderTimes}/>
   					<img className={s.ViewMore} src={ViewMore} style={this.state.styleForImg} alt='#' onClick={this.handleButtonClick}/>
    			</div>
				<ProjectsText/>
    		</div>
  		);
	}
}

export default Projects;