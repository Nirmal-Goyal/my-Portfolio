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
                        <ul>
                            {project.highlights.map((point, i)=> (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                        <p className="tech">
                            <strong>Tech:</strong> {project.tech}
                        </p>

                        <div className="project-links">
                            {project.repoLink && (
                                <a
                                    href={project.repoLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Github
                                </a>
                            )}

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
                    </div>
                ))}
            </div>
            
        </section>
    )
}

export default Projects;