import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders hello world', () => {
  // Arrange
  render(<Greeting />);

  // Act (eg. clicking a button)
  // ...nothing

  // Assert
  const helloWorldElement = screen.getByText('hello world', { exact: false });
  expect(helloWorldElement).toBeInTheDocument();
});
