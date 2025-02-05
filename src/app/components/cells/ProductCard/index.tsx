import { CartItem, CartItems, Product } from "@/app/types";
import { Box, Button, Card, Inset, Text, Strong } from "@radix-ui/themes";
import { useCart } from '../../../context/cartContext';

export default function ProductCard({
  product,
  cartItems,
  setCartItems,
}: {
  product: Product,
  cartItems: CartItems,
  setCartItems: (a: CartItems) => void,
}) {
  const { cart, dispatch } = useCart();
  // const handleAddToCart = () => {
  //   const newItem: CartItem = {
  //     id: product.id,
  //     name: product.name,
  //     price: product.price
  //   }
  //   setCartItems([...cartItems, newItem ])
  // };

  return (
    <div data-cy="product-card" data-testid="product-card">
      <Card>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div data-testid="product-price">
          <p>$ {(product.price /100).toFixed(2)}</p>
        </div>
        <Button
          data-testid="add-to-cart-button"
          // onClick={handleAddToCart}
          onClick={() => dispatch(
            {
              type: 'add',
              newItem: {
                id: product.id,
                name: product.name,
                price: product.price,
              }
            }
          )}
        >
          Add to cart
        </Button>
      </Card>
    </div>
  )
}