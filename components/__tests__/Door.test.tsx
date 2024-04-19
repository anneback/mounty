import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import Door from '@/components/Door';

describe('Door', () => {
  it('should render with default label, bg-color and heading', () => {
    render(<Door id={1} />);

    expect(screen.getByRole('heading').textContent).toBe('Door 2');
    expect(screen.getByRole('button').textContent).toBe('Door');
    expect(screen.getByRole('button').getAttribute('class')).toMatch(
      /bg-orange-600 hover:bg-orange-500 text-white/
    );
  });

  it('should render correct bg-color for nothingDoor', () => {
    render(<Door id={1} label='nothing' />);

    expect(screen.getByRole('button').getAttribute('class')).toMatch(
      /bg-slate-600 hover:bg-slate-500/
    );
  });

  it('should render correct text-color for guessedDoor', () => {
    render(<Door id={1} label='guessed' />);

    expect(screen.getByRole('button').getAttribute('class')).toMatch(
      /text-slate-600/
    );
  });
});
