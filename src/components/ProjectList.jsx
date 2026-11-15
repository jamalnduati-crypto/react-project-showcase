import ProjectCard from './ProjectCard';

// ProjectList
// Renders one ProjectCard per project, or a message if there are none.
// Props: projects (array).
function ProjectList({ projects }) {
  // Empty state: shown when the search matches nothing
  if (projects.length === 0) {
    return <p className="text-gray-500">No projects match your search.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
        />
      ))}
    </div>
  );
}

export default ProjectList;
