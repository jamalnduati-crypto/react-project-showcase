import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProjectForm from '../components/ProjectForm';

test('submits the typed values and clears the form', async () => {
  const handleAdd = vi.fn();
  render(<ProjectForm onAddProject={handleAdd} />);

  await userEvent.type(screen.getByLabelText('Title'), 'Logo Design');
  await userEvent.type(screen.getByLabelText('Description'), 'A new logo.');
  await userEvent.click(screen.getByRole('button', { name: /add project/i }));

  expect(handleAdd).toHaveBeenCalledWith(
    expect.objectContaining({ title: 'Logo Design', description: 'A new logo.' })
  );
  expect(screen.getByLabelText('Title')).toHaveValue('');
});

test('does not submit when the fields are empty', async () => {
  const handleAdd = vi.fn();
  render(<ProjectForm onAddProject={handleAdd} />);

  await userEvent.click(screen.getByRole('button', { name: /add project/i }));

  expect(handleAdd).not.toHaveBeenCalled();
});