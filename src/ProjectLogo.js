import React from 'react';
import logo from './yash.jpg';
import './ProjectLogo.css'

class ProjectLogo extends React.Component{
    render(){
        return(
           <span>
                <img className="logo" src={logo} alt="logo"></img>
                </span>
        )
    }

}
export default ProjectLogo;