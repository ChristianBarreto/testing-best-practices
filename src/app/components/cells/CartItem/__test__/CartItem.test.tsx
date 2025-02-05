import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CartItem from '..';

const cartItemMock = {
  id: '1',
  name: 'my product',
  price: 3000,
};

describe("Cart item tests", () => {
  test("Cart should be visible", () => {
    render(<CartItem cartItem={cartItemMock} />);
    const cartItem = screen.getByTestId('cart-item');
    expect(cartItem).toBeInTheDocument();
  });
  
  test("Cart item should show all product information", () => {
    render(<CartItem cartItem={cartItemMock} />);
    const cartItem = screen.getByTestId('cart-item');
    expect(cartItem).toHaveTextContent('my product');
    expect(cartItem).toHaveTextContent('$ 30.00');
  })
})