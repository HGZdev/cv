import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderMockRoot } from '../utils/Components';

describe('Skills Component', () => {
  it('renders skills section with correct title and tags', () => {
    renderMockRoot({ initialEntries: ['/cv/en/skills'] });

    expect(screen.getByText('skills')).toBeInTheDocument();
    // Check for skills tags
    expect(
      screen.getByText(/Versatile Frontend Proficiency/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Backend Experience/i)).toBeInTheDocument();
  });

  it('renders language skills section', () => {
    renderMockRoot({ initialEntries: ['/cv/en/skills'] });

    expect(screen.getByText(/Languages/i)).toBeInTheDocument();
    expect(screen.getByText(/Polish/i)).toBeInTheDocument();
    expect(screen.getByText(/English/i)).toBeInTheDocument();
  });

  it('displays star ratings for language skills', () => {
    renderMockRoot({ initialEntries: ['/cv/en/skills'] });

    // Check for star icons by looking for SVG elements with star-related classes
    const starElements = screen.getAllByRole('img');
    expect(starElements.length).toBeGreaterThan(0);
  });

  it('renders technologies section', () => {
    renderMockRoot({ initialEntries: ['/cv/en/skills'] });

    expect(screen.getByText(/Technologies/i)).toBeInTheDocument();
    expect(screen.getByText(/React/i)).toBeInTheDocument();
    expect(screen.getByText(/JavaScript/i)).toBeInTheDocument();
    expect(screen.getByText(/TypeScript/i)).toBeInTheDocument();
  });

  it('renders tools section', () => {
    renderMockRoot({ initialEntries: ['/cv/en/skills'] });

    expect(screen.getByText(/Tools/i)).toBeInTheDocument();
    // Use getAllByText to handle multiple Git-related elements
    const gitElements = screen.getAllByText(/Git/i);
    expect(gitElements.length).toBeGreaterThan(0);

    const githubElements = screen.getAllByText(/GitHub/i);
    expect(githubElements.length).toBeGreaterThan(0);
  });

  it('applies correct styling classes', () => {
    renderMockRoot({ initialEntries: ['/cv/en/skills'] });

    // Check for the main container with bg-primary class
    const skillsContainer = screen.getByText('skills').closest('div');
    expect(skillsContainer).toHaveClass('bg-primary');
  });
});
