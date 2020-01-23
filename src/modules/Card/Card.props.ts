import { Cart } from "src/shared/cart.model";

export type CardProps = {
    addToCart: (data: Cart) => () => void,
    shopCarts: Cart[]
}