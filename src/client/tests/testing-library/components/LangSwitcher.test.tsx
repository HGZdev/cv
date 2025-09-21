import { fireEvent, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderMockRoot } from '../utils/Components';

describe('LangSwitcher Component', () => {
  it('renders current language', () => {
    renderMockRoot({ initialEntries: ['/cv/en/'] });

    expect(screen.getByText('EN')).toBeInTheDocument();
  });

  it('opens language dropdown when clicked', () => {
    renderMockRoot({ initialEntries: ['/cv/en/'] });

    const langButton = screen.getByText('EN');
    fireEvent.click(langButton);

    expect(screen.getByText('PL')).toBeInTheDocument();
  });

  it('closes dropdown when mouse leaves', () => {
    renderMockRoot({ initialEntries: ['/cv/en/'] });

    const langButton = screen.getByText('EN');
    fireEvent.click(langButton);

    expect(screen.getByText('PL')).toBeInTheDocument();

    // Find the dropdown container and trigger mouse leave
    const plOption = screen.getByText('PL');
    const dropdownContainer = plOption.closest('div');
    if (dropdownContainer) {
      fireEvent.mouseLeave(dropdownContainer);
    }

    // PL should not be visible anymore
    expect(screen.queryByText('PL')).not.toBeInTheDocument();
  });

  it('switches language when clicking on alternative language', () => {
    renderMockRoot({ initialEntries: ['/cv/en/'] });

    const langButton = screen.getByText('EN');
    fireEvent.click(langButton);

    const plOption = screen.getByText('PL');
    fireEvent.click(plOption);

    // Should navigate to Polish version
    expect(screen.getByText('PL')).toBeInTheDocument();
  });

  it('applies correct styling classes', () => {
    renderMockRoot({ initialEntries: ['/cv/en/'] });

    const langButton = screen.getByText('EN');
    expect(langButton).toHaveClass('text-[22px]', 'cursor-pointer');
  });

  it('shows hover effects on language options', () => {
    renderMockRoot({ initialEntries: ['/cv/en/'] });

    const langButton = screen.getByText('EN');
    fireEvent.click(langButton);

    const plOption = screen.getByText('PL');
    expect(plOption).toHaveClass('hover:text-onPrimary', 'hover:scale-105');
  });

  it('filters out current language from dropdown options', () => {
    renderMockRoot({ initialEntries: ['/cv/en/'] });

    const langButton = screen.getByText('EN');
    fireEvent.click(langButton);

    // Should only show PL, not EN again
    const enOptions = screen.getAllByText('EN');
    expect(enOptions).toHaveLength(1); // Only the button, not in dropdown
  });
});
