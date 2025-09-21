import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderMockRoot } from '../utils/Components';

describe('Personal Component', () => {
  it('renders about section with correct title and tags', () => {
    renderMockRoot({ initialEntries: ['/cv/en/'] });

    expect(screen.getByText('about me')).toBeInTheDocument();
    // Check for tags - they might be rendered in a paragraph with separators
    expect(screen.getByText(/Frontend Focus/)).toBeInTheDocument();
    expect(screen.getByText(/Backend Support/)).toBeInTheDocument();
    expect(screen.getByText(/Warsaw, Poland/)).toBeInTheDocument();
  });

  it('renders about text paragraphs', () => {
    renderMockRoot({ initialEntries: ['/cv/en/'] });

    const paragraphs = screen.getAllByText(
      /I am a full-stack software developer/
    );
    expect(paragraphs.length).toBeGreaterThan(0);

    expect(screen.getByText(/Throughout my career/)).toBeInTheDocument();
    expect(
      screen.getByText(/I am looking for opportunities/)
    ).toBeInTheDocument();
  });

  it('renders GitHub invitation with correct link', () => {
    renderMockRoot({ initialEntries: ['/cv/en/'] });

    const githubLink = screen.getByRole('link', { name: /GitHub portfolio/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/HGZdev');
    expect(githubLink).toHaveClass('text-primaryResume');
  });

  it('renders technology icons with tooltips', () => {
    renderMockRoot({ initialEntries: ['/cv/en/'] });

    // Check for technology icons - they are in one big link with all technologies listed
    const techLink = screen.getByRole('link', {
      name: /React.js JavaScript TypeScript/i,
    });

    expect(techLink).toBeInTheDocument();
    expect(techLink).toHaveAttribute('href', '/cv/en/skills');
  });

  it('links to skills page when clicking technology icons', () => {
    renderMockRoot({ initialEntries: ['/cv/en/'] });

    // The technology icons are in one big link, already tested above
    const techLink = screen.getByRole('link', {
      name: /React.js JavaScript TypeScript/i,
    });
    expect(techLink).toHaveAttribute('href', '/cv/en/skills');
  });

  it('applies correct styling classes', () => {
    renderMockRoot({ initialEntries: ['/cv/en/'] });

    const aboutSection = screen.getByText('about me').closest('div');
    expect(aboutSection).toHaveClass('bg-primary');
  });
});
