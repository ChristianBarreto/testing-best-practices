'use client';
import { Box, Container } from "@radix-ui/themes";
import ProductList from "./components/organisms/ProductList";
import products from './productsMock.json';
import ShoppingCart from "./components/organisms/ShoppingCart";
import { useState } from "react";
import { CartItems } from "./types";

export default function Home() {
  const [cartItems, setCartItems] = useState<CartItems>([]);

  return (
    <Container>
      <h1>Shopping</h1>
      <ProductList products={products} setCartItems={setCartItems} cartItems={cartItems}/>
      <ShoppingCart items={cartItems} />
    </Container>
  );
}
