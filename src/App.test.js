/**
 * File:    App.test.js
 * Author:  Scott Mitting
 * Date:    12/3/2024
 * Project: TucsonLovesMusic
 * Abstract:
 *   Test file for the React app prototype admin website.
 */
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
