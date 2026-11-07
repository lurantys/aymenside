import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../Main';

jest.mock('../markside_components/Wooperdex', () => () => null);

beforeEach(() => {
  window.history.replaceState({}, '', '/');
});

test('shows the bio and switches between portfolio sections', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'Who am I?' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Data Science Intern' })).toBeInTheDocument();

  fireEvent.click(screen.getByText('Education'));
  expect(screen.getByRole('link', { name: 'Eikei University of Hiroshima' })).toBeInTheDocument();
  expect(screen.queryByRole('link', { name: 'Data Science Intern' })).not.toBeInTheDocument();

  fireEvent.click(screen.getByText('Projects & Achievements'));
  expect(screen.getByRole('link', { name: 'Hana' })).toBeInTheDocument();

  fireEvent.click(screen.getByText('Experience'));
  expect(screen.getByRole('link', { name: 'Data Science Intern' })).toBeInTheDocument();
});

test.each(['/missing-page', '/not_available'])('shows a fallback at %s and lets visitors return home', (path) => {
  window.history.replaceState({}, '', path);
  render(<App />);

  expect(screen.getByRole('heading', { name: 'Page not found' })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('link', { name: 'Back to home' }));
  expect(window.location.pathname).toBe('/');
  expect(screen.getByRole('heading', { name: 'Who am I?' })).toBeInTheDocument();
});
