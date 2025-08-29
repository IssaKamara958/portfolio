import React, { useEffect, useState } from "react";
import "./Projects.css";
import { getAllProjects } from "../../database"; // Import the function to get all projects

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsData = await getAllProjects();
      setProjects(projectsData);
    };

    fetchProjects();
  }, []);

  return (
    <section className="projects" id="projects">
      <h2>Projets</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.url}
            className="project"
            style={{ backgroundImage: `url(${project.image_url})` }}
            aria-label={`Visiter ${project.title}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
