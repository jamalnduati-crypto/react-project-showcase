import { render, screen } from '@testing-library/react';
import ProjectCard from '../components/ProjectCard';

test('renders the title and description from props', () => {
  render(<ProjectCard title="Brand Identity" description="A modern visual identity." />);

  expect(screen.getByText('Brand Identity')).toBeInTheDocument();
  expect(screen.getByText('A modern visual identity.')).toBeInTheDocument();
});