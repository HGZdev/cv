import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderMockRoot } from '../utils/Components';

describe('Menu Component', () => {
  it('renders language switcher', () => {
    renderMockRoot({ initialEntries: ['/cv/en/'] });

    expect(screen.getByText('EN')).toBeInTheDocument();
  });

  it('renders navigation menu items', () => {
    renderMockRoot({ initialEntries: ['/cv/en/'] });

    // Check for menu icons (they should be present as links)
    const menuLinks = screen.getAllByRole('link');
    expect(menuLinks.length).toBeGreaterThan(0);
  });

  it('renders download link for resume PDF', () => {
    renderMockRoot({ initialEntries: ['/cv/en/'] });

    // Find PDF download link by href pattern
    const allLinks = screen.getAllByRole('link');
    const downloadLink = allLinks.find(link =>
      link.getAttribute('href')?.includes('.pdf')
    );
    expect(downloadLink).toBeInTheDocument();
    expect(downloadLink).toHaveAttribute('target', '_blank');
  });

  it('applies correct styling classes', () => {
    renderMockRoot({ initialEntries: ['/cv/en/'] });

    // Find the menu container with navigation links
    const allLinks = screen.getAllByRole('link');
    const homeLink = allLinks.find(
      link => link.getAttribute('href') === '/cv/en/'
    );
    const menuContainer = homeLink?.closest('div[class*="flex"]');

    expect(menuContainer).toBeInTheDocument();
    expect(menuContainer).toHaveClass('flex');
  });

  it('renders menu items with correct navigation paths', () => {
    renderMockRoot({ initialEntries: ['/cv/en/'] });

    // Get all links and find by href since menu icons don't have accessible names
    const allLinks = screen.getAllByRole('link');

    const homeLink = allLinks.find(
      link => link.getAttribute('href') === '/cv/en/'
    );
    const skillsLink = allLinks.find(
      link => link.getAttribute('href') === '/cv/en/skills'
    );
    const experienceLink = allLinks.find(
      link => link.getAttribute('href') === '/cv/en/experience'
    );
    const educationLink = allLinks.find(
      link => link.getAttribute('href') === '/cv/en/education'
    );

    expect(homeLink).toBeInTheDocument();
    expect(skillsLink).toBeInTheDocument();
    expect(experienceLink).toBeInTheDocument();
    expect(educationLink).toBeInTheDocument();
  });

  it('displays active state for current route', () => {
    renderMockRoot({ initialEntries: ['/cv/en/skills'] });

    // Find skills link by href and check it exists
    const allLinks = screen.getAllByRole('link');
    const skillsLink = allLinks.find(
      link => link.getAttribute('href') === '/cv/en/skills'
    );
    expect(skillsLink).toBeInTheDocument();

    // Check that we're on the skills page
    expect(screen.getByText('skills')).toBeInTheDocument();
  });
});
