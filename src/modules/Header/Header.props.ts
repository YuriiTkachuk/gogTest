import { Cart } from "src/shared/cart.model";

export type HeaderProps = {
    shopCarts: Cart[],
    clearAll: () => void,
    removeGame: (id: number) => () => void
}

