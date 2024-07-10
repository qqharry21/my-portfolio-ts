import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { Badge } from './badge';

describe('Badge', () => {
  test('renders the badge component with the default variant', () => {
    render(<Badge>Default Badge</Badge>);
    const badgeElement = screen.getByText('Default Badge');
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass('bg-primary');
  });
});
