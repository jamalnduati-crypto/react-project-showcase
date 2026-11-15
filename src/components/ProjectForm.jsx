import { useState } from 'react';

// ProjectForm
// Collects a title and description for a new project.
// Field values are local state because only this form needs them.
// On submit it calls onAddProject so App can add the project to its list.
// Props: onAddProject (function).
function ProjectForm({ onAddProject }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(event) {
    event.preventDefault(); // stop the browser from reloading the page

    // Ignore empty or whitespace-only input
    if (!title.trim() || !description.trim()) return;

    onAddProject({
      id: Date.now(), // simple unique id
      title: title.trim(),
      description: description.trim(),
    });

    setTitle('');
    setDescription('');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 max-w-lg bg-white border border-gray-200 rounded-xl p-6"
    >
      <h2 className="text-2xl font-bold mb-2">Add a Project</h2>

      <label htmlFor="title" className="font-semibold">Title</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="e.g. Brand Identity"
        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
      />

      <label htmlFor="description" className="font-semibold">Description</label>
      <textarea
        id="description"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="Describe the project..."
        rows={4}
        className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500"
      />

      <button
        type="submit"
        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg py-3 cursor-pointer"
      >
        Add Project
      </button>
    </form>
  );
}

export default ProjectForm;
