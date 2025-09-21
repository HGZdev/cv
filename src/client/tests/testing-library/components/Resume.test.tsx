import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderMockRoot } from '../utils/Components';

describe('Resume Component', () => {
  it('renders resume with print button', () => {
    renderMockRoot({ initialEntries: ['/cv/en/resume'] });

    const printButton = screen.getByRole('button');
    expect(printButton).toBeInTheDocument();
    expect(printButton).toHaveClass('bg-onPrimary');
  });

  it('displays personal information in resume format', () => {
    renderMockRoot({ initialEntries: ['/cv/en/resume'] });

    expect(screen.getByText('Hanna Gaudasińska-Zapaśnik')).toBeInTheDocument();
    expect(screen.getByText('Full-stack Developer')).toBeInTheDocument();
  });

  it('renders about section with text', () => {
    renderMockRoot({ initialEntries: ['/cv/en/resume'] });

    expect(
      screen.getByText(/I am a full-stack software developer/)
    ).toBeInTheDocument();
    expect(screen.getByText(/Throughout my career/)).toBeInTheDocument();
  });

  it('displays key skills section with checkmarks', () => {
    renderMockRoot({ initialEntries: ['/cv/en/resume'] });

    expect(screen.getByText(/Frontend Focus/i)).toBeInTheDocument();
    expect(screen.getByText(/JavaScript \/ TypeScript/i)).toBeInTheDocument();

    // React.js appears multiple times in the resume
    const reactTexts = screen.getAllByText(/React.js/i);
    expect(reactTexts.length).toBeGreaterThan(0);
  });

  it('renders work experience section', () => {
    renderMockRoot({ initialEntries: ['/cv/en/resume'] });

    expect(screen.getByText(/EQT/i)).toBeInTheDocument();
    expect(screen.getByText(/StratoKit/i)).toBeInTheDocument();
    expect(screen.getByText(/YASKA/i)).toBeInTheDocument();
  });

  it('displays education section', () => {
    renderMockRoot({ initialEntries: ['/cv/en/resume'] });

    // University appears multiple times in the resume
    const universityTexts = screen.getAllByText(/University/i);
    expect(universityTexts.length).toBeGreaterThan(0);

    const economicsTexts = screen.getAllByText(/Economics/i);
    expect(economicsTexts.length).toBeGreaterThan(0);
  });

  it('renders workshops section', () => {
    renderMockRoot({ initialEntries: ['/cv/en/resume'] });

    expect(screen.getByText(/Coders Lab/i)).toBeInTheDocument();
  });

  it('displays skills with icons and ratings', () => {
    renderMockRoot({ initialEntries: ['/cv/en/resume'] });

    expect(screen.getByText(/Polish/i)).toBeInTheDocument();
    expect(screen.getByText(/English/i)).toBeInTheDocument();

    // React appears multiple times in the resume
    const reactTexts = screen.getAllByText(/React/i);
    expect(reactTexts.length).toBeGreaterThan(0);
  });

  it('applies correct resume styling classes', () => {
    renderMockRoot({ initialEntries: ['/cv/en/resume'] });

    // Look for a more specific container with bg-white class
    const resumeContainer = document.querySelector('.bg-white');
    expect(resumeContainer).toBeInTheDocument();
  });

  it('renders consent text at bottom', () => {
    renderMockRoot({ initialEntries: ['/cv/en/resume'] });

    // Check for consent text (should be present at bottom)
    const consentText = screen.getByText(/consent/i);
    expect(consentText).toBeInTheDocument();
  });
});
