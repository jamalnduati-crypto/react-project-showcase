// SearchBar
// A controlled input: its value comes from App's state, and typing
// calls onSearchChange so App can update that state.
// Props: searchTerm (string), onSearchChange (function).
function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search projects..."
      value={searchTerm}
      onChange={(event) => onSearchChange(event.target.value)}
      className="w-full max-w-md border border-gray-300 rounded-lg px-4 py-3 mb-8 focus:outline-none focus:border-orange-500"
    />
  );
}

export default SearchBar;
