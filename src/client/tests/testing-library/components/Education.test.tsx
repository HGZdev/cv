import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderMockRoot } from '../utils/Components';

describe('Education Component', () => {
  it('renders education section with correct title and tags', () => {
    renderMockRoot({ initialEntries: ['/cv/en/education'] });

    expect(screen.getByText('education')).toBeInTheDocument();
    // Check for education tags - they are rendered in a paragraph with separators
    expect(screen.getByText(/Programming/)).toBeInTheDocument();

    const businessEconomicsTexts = screen.getAllByText(/Business Economics/);
    expect(businessEconomicsTexts.length).toBeGreaterThan(0);

    expect(screen.getByText(/Social and Market Research/)).toBeInTheDocument();
  });

  it('renders education and workshops subsections', () => {
    renderMockRoot({ initialEntries: ['/cv/en/education'] });

    // Check for subsection headers - there are multiple "Education" elements
    const educationHeaders = screen.getAllByText(/Education/i);
    expect(educationHeaders.length).toBeGreaterThan(1);

    expect(screen.getByText(/Workshops/i)).toBeInTheDocument();
  });

  it('displays education data with correct structure', () => {
    renderMockRoot({ initialEntries: ['/cv/en/education'] });

    // Check for education entries - use getAllByText for multiple matches
    const universityTexts = screen.getAllByText(/University/i);
    expect(universityTexts.length).toBeGreaterThan(0);

    const economicsTexts = screen.getAllByText(/Economics/i);
    expect(economicsTexts.length).toBeGreaterThan(0);
  });

  it('displays workshop experience', () => {
    renderMockRoot({ initialEntries: ['/cv/en/education'] });

    // Check for workshop entries
    expect(screen.getByText(/Coders Lab/i)).toBeInTheDocument();
  });

  it('renders date ranges for education entries', () => {
    renderMockRoot({ initialEntries: ['/cv/en/education'] });

    // Check for formatted date ranges - they will be formatted by getDateRangeString
    const dates2005 = screen.getAllByText(/Sep 2005/);
    expect(dates2005.length).toBeGreaterThan(0);

    const dates2012 = screen.getAllByText(/Jul 2012/);
    expect(dates2012.length).toBeGreaterThan(0);
  });

  it('applies correct styling classes', () => {
    renderMockRoot({ initialEntries: ['/cv/en/education'] });

    const educationSection = screen.getByText('education').closest('div');
    expect(educationSection).toHaveClass('bg-primary');
  });

  it('renders education blocks in correct layout', () => {
    renderMockRoot({ initialEntries: ['/cv/en/education'] });

    // Check for multiple education entries
    const universityTexts = screen.getAllByText(/University/i);
    expect(universityTexts.length).toBeGreaterThanOrEqual(2);
  });
});
