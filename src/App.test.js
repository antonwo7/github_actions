import { render, screen } from '@testing-library/react';
import App from './App';
import React from "react";
import '@testing-library/jest-dom'

test('renders learn react link', () => {
  render(<App />);
  expect(screen.getByRole('add')).not.toBeDisabled()
});
