import { CartItem as CartItemType } from "@/app/types";
import { Card, Text } from "@radix-ui/themes";

export default function CartItem({
  cartItem
}: {
  cartItem: CartItemType
}) {
  return (
    <div data-testid="cart-item" data-cy="cart-item">
      <Card>
        <Text as="p">{cartItem.name}</Text>
        <Text weight="light">$ {(cartItem.price / 100).toFixed(2)}</Text>
      </Card>
    </div>
  )
}