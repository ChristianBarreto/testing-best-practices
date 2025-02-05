import { ReactElement, ReactNode } from "react";
import { CartProvider } from "../context/cartContext";
import { CartItems } from "../types";
import { render } from "@testing-library/react";

export function renderWithProviders(
  children: ReactElement,
  cartInit: CartItems = [],
) {
  const wrapper = ({ children }:{ children: ReactNode }) => (
    <CartProvider initCart={cartInit}>
      {children as ReactElement}
    </CartProvider>
  )

  return render(children, {wrapper})
}