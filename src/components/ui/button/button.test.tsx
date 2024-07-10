import { fireEvent, render } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { Button } from './button';

describe('test button', () => {
  test('button default variant and size', () => {
    const button = render(<Button></Button>);
    const element = button.getByRole('button');
    expect(element.classList).toContain('bg-primary');
    expect(element.classList).toContain('h-10');
  });

  test('button click event', () => {
    const handleCallback = vi.fn();
    const button = render(<Button onClick={handleCallback}></Button>);
    const element = button.getByRole('button');
    fireEvent.click(element);
    expect(handleCallback).toHaveBeenCalled();
  });

  test('button asChild', () => {
    const button = render(
      <Button asChild>
        <div>Box</div>
      </Button>
    );
    const element = button.getByText('Box');
    expect(element.classList.contains('inline-flex')).toBeTruthy();
  });
});
