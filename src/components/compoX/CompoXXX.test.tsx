import React from 'react';
import { render, screen } from '@testing-library/react';
import CompoXXX from './CompoXXX';

test.skip('get compo values', () => {
  render(<CompoXXX keyword={"user"} />);
  const textElement = screen.getByText(/learn react/i);
  expect(textElement).toBeInTheDocument();
});
