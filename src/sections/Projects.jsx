import projects from "../data/projects";

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>

            <div className="project-list">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p className="tech">{project.tech}</p>

                        {project.liveLink && (
                            <a 
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Live Demo
                            </a>
                        )}
                    </div>
                ))}
            </div>
            
        </section>
    )
}

export default Projects;