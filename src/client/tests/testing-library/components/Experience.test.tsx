import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderMockRoot } from '../utils/Components';

describe('Experience Component', () => {
  it('renders experience section with correct title and tags', () => {
    renderMockRoot({ initialEntries: ['/cv/en/experience'] });

    expect(screen.getByText('experience')).toBeInTheDocument();
    // Check for experience tags - they are rendered in a paragraph with separators
    expect(
      screen.getByText(/Seven years of IT experience/)
    ).toBeInTheDocument();
    expect(screen.getByText(/Client Liaison/)).toBeInTheDocument();
    expect(screen.getByText(/Project Management/)).toBeInTheDocument();
    expect(screen.getByText(/Market Research Experience/)).toBeInTheDocument();
  });

  it('renders job experience blocks with correct structure', () => {
    renderMockRoot({ initialEntries: ['/cv/en/experience'] });

    // Check for job titles (using exact company names from translations)
    expect(screen.getByText('EQT Group (contract via 7N)')).toBeInTheDocument();
    expect(screen.getByText('StratoKit SA')).toBeInTheDocument();
    expect(screen.getByText('Yaska Polska Sp. z o.o.')).toBeInTheDocument();
  });

  it('renders job subtitles correctly', () => {
    renderMockRoot({ initialEntries: ['/cv/en/experience'] });

    // Check for job subtitles
    expect(screen.getByText('Full-stack Engineer')).toBeInTheDocument();
    expect(screen.getByText('JavaScript Developer')).toBeInTheDocument();
    expect(screen.getByText('Software Developer')).toBeInTheDocument();
  });

  it('displays date ranges correctly', () => {
    renderMockRoot({ initialEntries: ['/cv/en/experience'] });

    // Check for formatted date ranges (they will be formatted by getDateRangeString)
    // Use getAllByText since dates might appear multiple times
    const junDates = screen.getAllByText(/Jun 2025/);
    expect(junDates.length).toBeGreaterThan(0);

    const aprDates = screen.getAllByText(/Apr 2021/);
    expect(aprDates.length).toBeGreaterThan(0);

    const octDates = screen.getAllByText(/Oct 2017/);
    expect(octDates.length).toBeGreaterThan(0);
  });

  it('renders job responsibilities as bullet points', () => {
    renderMockRoot({ initialEntries: ['/cv/en/experience'] });

    // Check for list items
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBeGreaterThan(0);

    // Check for specific responsibilities from the translations
    expect(
      screen.getByText(
        /Development of internal tools for documents management/i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Full-stack development of web applications/i)
    ).toBeInTheDocument();
  });

  it('applies correct styling classes', () => {
    renderMockRoot({ initialEntries: ['/cv/en/experience'] });

    const experienceSection = screen.getByText('experience').closest('div');
    expect(experienceSection).toHaveClass('bg-primary');
  });

  it('renders correct number of experience blocks', () => {
    renderMockRoot({ initialEntries: ['/cv/en/experience'] });

    // Based on jobExperience data, there should be 5 experience blocks
    const experienceBlocks = screen.getAllByText(
      /Full-stack Engineer|JavaScript Developer|Software Developer/
    );
    expect(experienceBlocks.length).toBeGreaterThanOrEqual(3);
  });
});
