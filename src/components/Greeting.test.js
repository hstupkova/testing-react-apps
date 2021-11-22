import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders "hello world"', () => {
    // Arrange
    render(<Greeting />);
  
    // Act (eg. clicking a button)
    // ...nothing
  
    // Assert
    const helloWorldElement = screen.getByText('hello world', { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders 'it's good to see you' if the button was NOT clicked", () => {
    render(<Greeting />);
    const goodToSeeYouElement = screen.getByText("It's good to see you.");
    expect(goodToSeeYouElement).toBeInTheDocument();
  });

  test("renders 'changed!' if the button was clicked", () => {
    // Arrange
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    // Assert
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });

  test("does NOT render 'it's good to see you' if the button was clicked", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    const outputElement = screen.queryByText("It's good to see you.", { exact: false });
    expect(outputElement).toBeNull();
  });
});


