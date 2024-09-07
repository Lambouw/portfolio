// Import Components
import ProjectCard from "../components/ProjectCard";

// Import Styles
import "../styles/css/projects.css";

// Import Data
import projects from "../assets/data/projects.json";

function Projects() {
  return (
    <div className="projects">
      <h1 className="projects--heading">Projects</h1>
      <div className="height-sm"></div>
      <div className="projects--container">
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
