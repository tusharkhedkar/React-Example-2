import React from 'react';
import ProjectLogo from './ProjectLogo';
import SearchComponent from './SearchComponent'
import HeaderComponent from './HeaderComponent'
import ProjectDetailsComponent from './ProjectDetailsComponent'
import './ProjectManagementSystem.css';


class ProjectManagementSystem extends React.Component {
    render() {
        const projects=[
            {
                Id: 1,
                Name: "TCI",
                scrumMasterName: "Tushar",
                teamMemberCount:5

            },
            {
                Id: 2,
                Name: "JD",
                scrumMasterName: "Akshay",
                teamMemberCount:6
            },
            {
                Id: 3,
                Name: "John deere",
                scrumMasterName: "Sagar",
                teamMemberCount:7
            },
            {
                Id: 4,
                Name: "Yash",
                scrumMasterName: "Sanket",
                teamMemberCount:8
            }
        ]
        return (
            
            <div className={"Project"}>
                    <div><ProjectLogo /></div>
                    <div>
                    <SearchComponent/>
                    </div>
                    <div>
                    <HeaderComponent/>
                    </div><br></br>
                    <div>
                    <table style={{margin: 30}}>
                    {
                        projects.map((project)=>{
                           return <ProjectDetailsComponent key={project.Id} project={project}/>
                        })
                    }
                    </table>
                    </div>
                    <div>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                    
                    </div>
        )
    }
}
export default ProjectManagementSystem;