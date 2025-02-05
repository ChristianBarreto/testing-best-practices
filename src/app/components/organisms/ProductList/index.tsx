import { CartItems, Products } from "@/app/types"
import ProductCard from "../../cells/ProductCard"
import { Flex } from "@radix-ui/themes"

export default function ProductList({
  products,
  cartItems,
  setCartItems
}: {
  products: Products
  cartItems: CartItems,
  setCartItems: (a: CartItems) => void,
}) {

  return (
    <div data-cy="product-list" data-testid="product-list">
      <Flex gap="4">
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        ))}
      </Flex>
    </div>
  )
}