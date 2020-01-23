import { Cart } from "src/shared/cart.model";

export type ShopCartProps = {
    shopCarts: Cart[],
    clearAll: () => void,
    removeGame: (id: number) => () => void
}

