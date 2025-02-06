import { ReactElement, ReactNode } from "react";
import { CartProvider } from "../context/cartContext";
import { CartItems } from "../types";
import { render, RenderOptions } from "@testing-library/react";
import React from 'react'

// This is a way of wrapping a component to a context
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

// // This is a recommended way to create a custom render, but I don't know how to pass a custom initCart
// const AllTheProviders = ({children}: {children: React.ReactNode}) => {
//   return (
//     <CartProvider initCart={[]}>
//       {children as ReactElement}
//     </CartProvider>
//   )
// }

// const customRender = (
//   ui: ReactElement,
//   options?: Omit<RenderOptions, 'wrapper'>,
// ) => render(ui, {wrapper: AllTheProviders, ...options})

// export * from '@testing-library/react'
// export {customRender as render}