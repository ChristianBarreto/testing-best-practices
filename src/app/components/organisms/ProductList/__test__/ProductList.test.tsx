import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ProductList from '..';
import products from '../../../../productsMock.json';

describe('Product List tests', () => {
  test('Product list should show all products', () => {
    render(<ProductList products={products} />);
    const productList = screen.getAllByTestId('product-card');
    expect(productList).toHaveLength(4);
  });

  test('Product list should display all information of the products', () => {
    render(<ProductList products={products} />);
    const productList = screen.getAllByTestId('product-card');
    productList.forEach((product, index) => {
      expect(product).toHaveTextContent(products[index].name);
      expect(product).toHaveTextContent(products[index].description);
      expect(product).toHaveTextContent(`$ ${(products[index].price / 100).toFixed(2)}`);
    })
  });
})

