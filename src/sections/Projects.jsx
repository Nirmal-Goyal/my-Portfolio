const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>

            <div className="project-list">
                <div className="project-card">
                    <h3>Prime Number Checker</h3>
                    <p>
                        A lightweight web application to determine whether a number is prime, built with a focus on clean UI and simple logic.
                    </p>
                    <p className="tech">HTML, CSS, JavaScript</p>
                    <a href="https://prime-number-checker-six.vercel.app/" target="_blank">
                        Live Demo
                    </a>
                </div>

                <div className="project-card">
                    <h3>Cricket Score Prediction</h3>
                    <p>
                        A machine learning system that predicts cricket match scores using historical match data and regression models.
                    </p>
                    <p className="tech">Python, Pandas, NumPy, Scikit-learn</p>
                </div>
            </div>
        </section>
    )
}

export default Projects;