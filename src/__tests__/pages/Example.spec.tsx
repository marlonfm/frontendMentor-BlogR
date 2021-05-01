import { render, screen } from '@testing-library/react';

import Page from '../../pages/Page/index';

describe('Page Page', () => {
  it('should be able to render Page text', () => {
    render(<Page />);

    expect(screen.getByText('Page')).toBeInTheDocument();
  });
});

export {};
