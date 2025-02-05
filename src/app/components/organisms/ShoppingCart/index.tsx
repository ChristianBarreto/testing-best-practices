import { CartItems } from "@/app/types";
import { Box, Card, Flex, Section, Text } from "@radix-ui/themes";
import CartItem from "../../cells/CartItem";
import { useCart } from "@/app/context/cartContext";

export default function ShoppingCart({
  items
}: {
  items?: CartItems
}) {
  const { cart, dispatch } = useCart();

  const totalPrice = cart?.reduce((acc, item) => {
    return acc + item.price;
  }, 0);

  return (
    <div data-cy="shopping-cart" data-testid="shopping-cart">
      <Section>
        {!cart?.length ? (
          <p>The shopping cart is empty, you should add some products.</p>
        ): (
          <Flex gap="2">
            {cart?.map((item) => (
              <CartItem cartItem={item} key={item.id}/>
            ))}
          </Flex> 
        )}
        <Card data-testid="cart-total">
          <Text weight="bold">
            Total: $ {(totalPrice / 100).toFixed(2)}
          </Text>
        </Card>
      </Section>
    </div>
  )
}