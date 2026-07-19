import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders homepage overview', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const role = screen.getByText(/Senior Software Engineer at Bloom Energy/i);
  expect(role).toBeTruthy();
});
