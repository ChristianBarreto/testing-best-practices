import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';
import user from '@testing-library/user-event';
import { Product } from '@/app/types';
import ProductCard from '..';

const product: Product = {
  id: '1',
  name: 'My product',
  description: 'This is an awesome product',
  price: 3000,
};

describe('Product card tests', () => {
  test('Product card should be visible', () => {
    render(<ProductCard product={product}/>);
    const productCard = screen.getByTestId('product-card');
    expect(productCard).toBeInTheDocument();
  })
  test('Product card should be display the name of the product', () => {
    render(<ProductCard product={product}/>);
    const productName = screen.getByRole('heading', {level: 3});
    expect(productName).toHaveTextContent('My product');
  });
  test('Product card should be display the description of the product', () => {
    render(<ProductCard product={product}/>);
    const productDescription = screen.getByText('This is an awesome product');
    expect(productDescription).toBeInTheDocument();
  });
  test('Product card should be display the price of the product', () => {
    render(<ProductCard product={product}/>);
    const productPrice = screen.getByTestId('product-price');
    expect(productPrice).toHaveTextContent('$ 30.00');
  });
  
  test('Product card should be display the Add to cart button', () => {
    render(<ProductCard product={product}/>);
    const productButton = screen.getByRole('button', {name: "Add to cart"});
    expect(productButton).toHaveTextContent('Add to cart');
  });

  test('Product card should call handler function on button click', async () => {
    user.setup();
    const handleClickMock = jest.fn();
    render(<ProductCard product={product} handleClick={handleClickMock} />);
    const checkButton = screen.getByRole('button', {name: "Check"});
    await user.click(checkButton);
    expect(handleClickMock).toHaveBeenCalledTimes(1);
    // This is an example of a Mocked function.
  });
});

