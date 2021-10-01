import { ProjectData } from './ProjectData';
import { Project } from './Project';
import './Projects.css'

export const Projects = () => {
    return(
        <section className="projects">
            <a id="projects">Projects</a>
            <div className = "project-contianer">
                {ProjectData.map((data) => {
                    return (<Project className="project" key={data.key} {...data}/>)
                })}
            </div>
        </section>
    );
}