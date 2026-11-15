import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/ProjectForm';

// Starting data for the portfolio
const initialProjects = [
  { id: 1, title: 'Brand Identity', description: 'A modern visual identity created for a growing creative business.' },
  { id: 2, title: 'Website Design', description: 'A clean and responsive website designed for a modern brand.' },
  { id: 3, title: 'Product Photography', description: 'Creative product photography and visual storytelling.' },
];

// App
// Owns the shared state: the list of projects and the search text.
// Passes data down as props and receives new projects through a callback.
function App() {
  const [projects, setProjects] = useState(initialProjects);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Add the new project, then return to the list
  function handleAddProject(newProject) {
    setProjects((prev) => [...prev, newProject]);
    navigate('/');
  }

  // Derived data: recalculated on each render, not stored in state.
  // Matches the search text against title or description, ignoring case.
  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // The list view, shared by "/" and "/projects"
  const projectsView = (
    <section className="px-8 py-12" id="home">
      <h1 className="text-4xl font-bold mb-4">Our Creative Work</h1>
      <p className="text-gray-500 mb-6">
        Explore some of our latest projects and creative ideas.
      </p>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ProjectList projects={filteredProjects} />
    </section>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Routes>
        <Route path="/" element={projectsView} />
        <Route path="/projects" element={projectsView} />
        <Route
          path="/add"
          element={
            <section className="px-8 py-12">
              <ProjectForm onAddProject={handleAddProject} />
            </section>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
