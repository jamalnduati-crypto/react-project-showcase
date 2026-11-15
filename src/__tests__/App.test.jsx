import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

// App uses routing hooks, so it must be rendered inside a router
function renderApp() {
  return render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
}

test('shows the initial projects on the landing page', () => {
  renderApp();
  expect(screen.getByText('Brand Identity')).toBeInTheDocument();
  expect(screen.getByText('Website Design')).toBeInTheDocument();
});

test('filters projects as the user types in the search box', async () => {
  renderApp();

  await userEvent.type(screen.getByPlaceholderText('Search projects...'), 'web');

  expect(screen.getByText('Website Design')).toBeInTheDocument();
  expect(screen.queryByText('Brand Identity')).not.toBeInTheDocument();
});

test('shows a message when nothing matches the search', async () => {
  renderApp();

  await userEvent.type(screen.getByPlaceholderText('Search projects...'), 'zzz');

  expect(screen.getByText('No projects match your search.')).toBeInTheDocument();
});

test('navigates to the form, adds a project, and returns to the list', async () => {
  renderApp();

  await userEvent.click(screen.getByRole('link', { name: 'Add Project' }));
  expect(screen.getByRole('heading', { name: /add a project/i })).toBeInTheDocument();

  await userEvent.type(screen.getByLabelText('Title'), 'Packaging Design');
  await userEvent.type(screen.getByLabelText('Description'), 'Boxes and labels.');
  await userEvent.click(screen.getByRole('button', { name: /add project/i }));

  expect(await screen.findByText('Packaging Design')).toBeInTheDocument();
});