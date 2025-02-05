import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ShoppingCart from '..';
import { CartItems } from '@/app/types';
import { CartProvider } from '@/app/context/cartContext';
import { ReactElement, ReactNode } from 'react';
import { renderWithProviders } from '@/app/__test__/testUtils';

const itemsMock: CartItems = [
  {id: '1', name: 'product 1', price: 3000},
  {id: '2', name: 'product 2', price: 4000}
];

describe('Shopping cart tests', () => {
  test('Cart should display message if empty', () => {
    renderWithProviders(<ShoppingCart />)
    const emptyMessage = screen.getByText('The shopping cart is empty, you should add some products.');
    expect(emptyMessage).toBeInTheDocument();
  })
  test('Cart should show items if user added products to be purchased', () => {
    renderWithProviders(<ShoppingCart />, itemsMock);
    const cartItems = screen.getAllByTestId('cart-item');
    expect(cartItems).toHaveLength(2);
  })
  test('Cart items display information', () => {
    renderWithProviders(<ShoppingCart />, itemsMock);
    const cartItems = screen.getAllByTestId('cart-item');
    cartItems.forEach((item, index) => {
      expect(item).toHaveTextContent(itemsMock[index].name);
      expect(item).toHaveTextContent(`$ ${(itemsMock[index].price /100).toFixed(2)}`);
    });
  });
});