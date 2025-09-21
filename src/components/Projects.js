
// src/components/Projects.js

import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const { data, error: supabaseError } = await supabase
          .from('projects')
          .select('*')
          .order('created_at', { ascending: false });

        if (supabaseError) {
          throw supabaseError;
        }

        if (data) {
          setProjects(data);
        }

      } catch (err) {
        // CORRECTION : On stocke uniquement le message de l'erreur, qui est une chaîne de caractères.
        setError(err.message);
        console.error("Erreur détaillée lors de la récupération des projets:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Chargement des projets...</div>;
  }

  if (error) {
    // Affiche maintenant le message d'erreur correct à l'utilisateur
    return <div>Erreur : {error}</div>;
  }

  return (
    <div className="projects-container">
      <h1>Mes Projets</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img 
              src={process.env.PUBLIC_URL + project.image_url} 
              alt={`Image pour ${project.title}`} 
              className="project-image"
            />
            <div className="project-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
                Voir le projet
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
