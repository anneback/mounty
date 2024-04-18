import { render } from '@testing-library/react';
import Door from '../Door';

describe('Door', () => {
  it('should render with default label and h3', () => {
    const actual = render(<Door id={1} />);

    expect(actual).toBe(null);
  });
});
