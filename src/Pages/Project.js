import './Project.css'

export const Project = ({title, picture, description, link, githubLink}) => {
    return (
        <a href={link}>
            <div className="project">
                    <h2 className="project-title">{title}</h2>
                    <img className="project-image" src={picture} alt="Something Went Wrong"/>
                    <div className="project-description">
                        <p>{description}</p>
                    </div>
                    <a className="project-github-link" href={githubLink}>
                        <img className="logo" src="GitHub-Mark-Small.svg" alt="GitHub" height="40px" width="40px"></img>
                    </a>
            </div>
        </a>
    );
}