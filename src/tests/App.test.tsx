import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../Main';

const scrollIntoView = jest.fn();
beforeAll(() => {
    Element.prototype.scrollIntoView = scrollIntoView;
    window.matchMedia = jest.fn().mockImplementation(() => ({ matches: true }));
});
beforeEach(() => {
    window.history.replaceState(null, '', '/');
    scrollIntoView.mockClear();
});

test('shows the featured projects by default and provides contact and resume links', () => {
    render(<App />);
    expect(screen.getByRole('tab', { name: 'Projects' })).toHaveAttribute('aria-selected', 'true');
    for (const title of ['Hana', 'Poststash', 'Stockatfish']) {
        expect(screen.getByRole('heading', { name: title })).toBeVisible();
    }
    expect(screen.getAllByRole('link', { name: 'Resume' })[0]).toHaveAttribute('href', '/Resume_NHAILAAymen.pdf');
    expect(screen.getByRole('link', { name: 'a.nhaila@aui.ma' })).toHaveAttribute('href', 'mailto:a.nhaila@aui.ma');
});

test('supports keyboard navigation through the background tabs', () => {
    render(<App />);
    const projects = screen.getByRole('tab', { name: 'Projects' });
    fireEvent.keyDown(projects, { key: 'ArrowRight' });
    const experience = screen.getByRole('tab', { name: 'Experience' });
    expect(experience).toHaveFocus();
    expect(experience).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('heading', { name: 'Data Science Intern' })).toBeVisible();
    expect(screen.queryByRole('heading', { name: 'Hana' })).not.toBeInTheDocument();
    fireEvent.keyDown(experience, { key: 'End' });
    expect(screen.getByRole('tab', { name: 'Education' })).toHaveFocus();
    expect(screen.getByRole('heading', { name: 'Al Akhawayn University' })).toBeVisible();
    fireEvent.keyDown(screen.getByRole('tab', { name: 'Education' }), { key: 'Home' });
    expect(projects).toHaveFocus();
    expect(screen.getByRole('heading', { name: 'Hana' })).toBeVisible();
});

test('the projects shortcut returns from a background tab', () => {
    render(<App />);
    window.history.replaceState(null, '', '/#Projects');
    fireEvent.click(screen.getByRole('tab', { name: 'Education' }));
    fireEvent.click(screen.getByRole('link', { name: 'See my projects' }));
    expect(screen.getByRole('tab', { name: 'Projects' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('heading', { name: 'Hana' })).toBeVisible();
});
