import '@testing-library/jest-dom';
import user from '@testing-library/user-event';
import { screen, render } from '@testing-library/react';
import Home from '../page';
import { renderWithProviders } from './testUtils';

describe('Main page', () => {
  test("Main page title should exists", () => {
    render(<Home />);
    const title = screen.getByRole('heading', {
      level: 1
    });
    expect(title.textContent).toBe('Shopping')
  });

  test("Main page should display product list", () => {
    render(<Home />);
    const productList = screen.getByTestId('product-list');
    expect(productList).toBeInTheDocument();
  })
  
  test("Main page should display products list fullfiled by products", () => {
    render(<Home />);
    const productCards = screen.getAllByTestId('product-card');
    expect(productCards).toHaveLength(4);
  })

  test("Main page should display shopping cart", () => {
    render(<Home />);
    const shoppingCart = screen.getByTestId('shopping-cart');
    expect(shoppingCart).toBeInTheDocument();
  })

  test("If user adds a product to the cart, the product should appear on the shopping cart", async () => {
    user.setup();
    renderWithProviders(<Home />)
    const addButtons = screen.getAllByTestId('add-to-cart-button')
    await user.click(addButtons[0]);

    const cartItems = screen.getAllByTestId('cart-item');
    expect(cartItems).toHaveLength(1);

    const cartTotal = screen.getByTestId('cart-total');
    expect(cartTotal).toHaveTextContent('$ 30.00')

  })
})