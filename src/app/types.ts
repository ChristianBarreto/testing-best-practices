export type Product = {
  id: string,
  name: string,
  description: string,
  price: number,
}

export type Products = Array<Product>

export type CartItem = {
  id: string,
  name: string,
  price: number,
}

export type CartItems = Array<CartItem>