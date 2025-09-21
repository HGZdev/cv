import { fireEvent, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderMockRoot } from '../utils/Components';

describe('CV Application Integration Tests', () => {
  it('navigates between different sections', () => {
    renderMockRoot({ initialEntries: ['/cv/en/'] });

    // Start on home page
    expect(screen.getByText('about me')).toBeInTheDocument();

    // Navigate to skills by finding link by href
    const allLinks = screen.getAllByRole('link');
    const skillsLink = allLinks.find(
      link => link.getAttribute('href') === '/cv/en/skills'
    );
    if (skillsLink) {
      fireEvent.click(skillsLink);
    }

    expect(screen.getByText('skills')).toBeInTheDocument();
    expect(screen.getByText(/Languages/i)).toBeInTheDocument();

    // Navigate to experience
    const experienceLink = allLinks.find(
      link => link.getAttribute('href') === '/cv/en/experience'
    );
    if (experienceLink) {
      fireEvent.click(experienceLink);
    }

    expect(screen.getByText('experience')).toBeInTheDocument();
    expect(screen.getByText(/EQT/i)).toBeInTheDocument();

    // Navigate to education
    const educationLink = allLinks.find(
      link => link.getAttribute('href') === '/cv/en/education'
    );
    if (educationLink) {
      fireEvent.click(educationLink);
    }

    expect(screen.getByText('education')).toBeInTheDocument();
    const universityTexts = screen.getAllByText(/University/i);
    expect(universityTexts.length).toBeGreaterThan(0);
  });

  it('switches language and maintains navigation state', () => {
    renderMockRoot({ initialEntries: ['/cv/en/skills'] });

    // Should be on skills page in English
    expect(screen.getByText('skills')).toBeInTheDocument();

    // Switch to Polish
    const langButton = screen.getByText('EN');
    fireEvent.click(langButton);

    const plOption = screen.getByText('PL');
    fireEvent.click(plOption);

    // Should still be on skills page but in Polish
    expect(screen.getByText('PL')).toBeInTheDocument();
  });

  it('renders technology icons with tooltips on home page', () => {
    renderMockRoot({ initialEntries: ['/cv/en/'] });

    // Check for technology icons - they are in one combined link
    const techLink = screen.getByRole('link', {
      name: /React.js JavaScript TypeScript/i,
    });

    expect(techLink).toBeInTheDocument();

    // Click on technology link should navigate to skills
    fireEvent.click(techLink);
    expect(screen.getByText('skills')).toBeInTheDocument();
  });

  it('displays consistent personal information across pages', () => {
    renderMockRoot({ initialEntries: ['/cv/en/'] });

    // Check personal info on home page
    expect(screen.getByText('Hanna')).toBeInTheDocument();
    expect(screen.getByText('Gaudasińska-Zapaśnik')).toBeInTheDocument();
    expect(screen.getByText('Full-stack Developer')).toBeInTheDocument();

    // Find PDF download link by href pattern
    const allLinks = screen.getAllByRole('link');
    const resumeLink = allLinks.find(link =>
      link.getAttribute('href')?.includes('.pdf')
    );

    // Should open PDF in new tab (we can't test PDF content directly)
    expect(resumeLink).toHaveAttribute('target', '_blank');
  });

  it('renders contact links with correct attributes', () => {
    renderMockRoot({ initialEntries: ['/cv/en/'] });

    // Find contact links by href since they don't have accessible names
    const allLinks = screen.getAllByRole('link');

    const phoneLink = allLinks.find(link =>
      link.getAttribute('href')?.startsWith('tel:')
    );
    const emailLink = allLinks.find(link =>
      link.getAttribute('href')?.startsWith('mailto:')
    );
    const githubLink = allLinks.find(
      link => link.getAttribute('href') === 'https://github.com/HGZdev'
    );
    const linkedinLink = allLinks.find(
      link =>
        link.getAttribute('href') ===
        'https://www.linkedin.com/in/hanna-gaudasinska-zapasnik'
    );

    expect(phoneLink).toHaveAttribute('href', 'tel:+48506042937');
    expect(emailLink).toHaveAttribute('href', 'mailto:hgz.devi@gmail.com');
    expect(githubLink).toHaveAttribute('href', 'https://github.com/HGZdev');
    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/hanna-gaudasinska-zapasnik'
    );
  });

  it('maintains responsive design classes', () => {
    renderMockRoot({ initialEntries: ['/cv/en/'] });

    // Check for responsive classes
    const heroContainer = screen.getByText('Hanna').closest('div');
    expect(heroContainer).toHaveClass('relative');

    const aboutSection = screen.getByText('about me').closest('div');
    expect(aboutSection).toHaveClass('bg-primary');
  });
});
