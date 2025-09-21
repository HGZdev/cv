import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderMockRoot } from '../utils/Components';

describe('Hero Component', () => {
  it('renders personal information correctly', () => {
    renderMockRoot({ initialEntries: ['/cv/en/'] });

    expect(screen.getByText('Hanna')).toBeInTheDocument();
    expect(screen.getByText('Gaudasińska-Zapaśnik')).toBeInTheDocument();
    expect(screen.getByText('Full-stack Developer')).toBeInTheDocument();
  });

  it('renders contact links with correct attributes', () => {
    renderMockRoot({ initialEntries: ['/cv/en/'] });

    // Get all links and find by href
    const allLinks = screen.getAllByRole('link');

    // Check phone link
    const phoneLink = allLinks.find(
      link => link.getAttribute('href') === 'tel:+48506042937'
    );
    expect(phoneLink).toBeInTheDocument();
    expect(phoneLink).toHaveAttribute('href', 'tel:+48506042937');

    // Check email link
    const emailLink = allLinks.find(
      link => link.getAttribute('href') === 'mailto:hgz.devi@gmail.com'
    );
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:hgz.devi@gmail.com');

    // Check GitHub link by name
    const githubLink = screen.getByRole('link', { name: 'GitHub portfolio' });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/HGZdev');

    // Check LinkedIn link
    const linkedinLink = allLinks.find(
      link =>
        link.getAttribute('href') ===
        'https://www.linkedin.com/in/hanna-gaudasinska-zapasnik'
    );
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/hanna-gaudasinska-zapasnik'
    );
  });

  it('opens contact links in new tab', () => {
    renderMockRoot({ initialEntries: ['/cv/en/'] });

    const allLinks = screen.getAllByRole('link');

    // Check LinkedIn link
    const linkedinLink = allLinks.find(
      link =>
        link.getAttribute('href') ===
        'https://www.linkedin.com/in/hanna-gaudasinska-zapasnik'
    );
    expect(linkedinLink).toHaveAttribute('target', '_blank');

    // Check phone link
    const phoneLink = allLinks.find(
      link => link.getAttribute('href') === 'tel:+48506042937'
    );
    expect(phoneLink).toHaveAttribute('target', '_blank');

    // Check email link
    const emailLink = allLinks.find(
      link => link.getAttribute('href') === 'mailto:hgz.devi@gmail.com'
    );
    expect(emailLink).toHaveAttribute('target', '_blank');

    // Check GitHub link in Hero section (has target="_blank")
    const githubHeroLink = allLinks.find(
      link =>
        link.getAttribute('href') === 'https://github.com/HGZdev' &&
        link.getAttribute('target') === '_blank'
    );
    expect(githubHeroLink).toBeInTheDocument();
    expect(githubHeroLink).toHaveAttribute('target', '_blank');
  });

  it('applies correct CSS classes for styling', () => {
    renderMockRoot({ initialEntries: ['/cv/en/'] });

    const heroContainer = screen.getByText('Hanna').closest('div');
    expect(heroContainer).toHaveClass('relative');
  });
});
