import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from '../components/SearchBar';

test('shows the current search term', () => {
  render(<SearchBar searchTerm="web" onSearchChange={() => {}} />);
  expect(screen.getByPlaceholderText('Search projects...')).toHaveValue('web');
});

test('calls onSearchChange when the user types', async () => {
  const handleChange = vi.fn();
  render(<SearchBar searchTerm="" onSearchChange={handleChange} />);

  await userEvent.type(screen.getByPlaceholderText('Search projects...'), 'a');

  expect(handleChange).toHaveBeenCalledWith('a');
});