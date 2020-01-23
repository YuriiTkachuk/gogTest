import React, { useCallback } from 'react';
import './ShopCart.scss';
import { ShopTruck } from './shopTruck';
import { images } from 'src/shared/images';
import { Cart } from 'src/shared/cart.model';
import { ShopCartProps } from './ShopCart.props';

const ShopCart: React.FC<ShopCartProps> = ({
    shopCarts,
    clearAll,
    removeGame
}) => {
    const sum = useCallback(() => shopCarts.reduce((a: number, b: Cart) => a + parseFloat(b.cost), 0).toFixed(2), [shopCarts]);
    return (
        <div className="shopCart">
            <div className="shopCart-truck">
                <ShopTruck />
                <span>{shopCarts.length}</span>
            </div> 

            <div className="shopCart-block">
                {!shopCarts.length && <span className="shopCart-empty">YOUR CART IS EMPTY</span>}
                {!!shopCarts.length && (
                    <>
                        <div className="shopCart-head">
                            <span>{shopCarts.length} ITEMS IN CART</span>
                            <div className="shopCart-clear">
                                <span className="shopCart-sum">
                                    ${sum()}
                                </span>
                                <span onClick={clearAll} className="shopCart-clearAll">
                                    CLEAR CART
                                </span>
                            </div>
                        </div>
                        {shopCarts.map((cart: Cart) => (
                            <div className="shopCart-game" key={cart.img} onClick={removeGame(cart.id)}>
                                <img src={images(cart.img)} alt={cart.img} />
                                <div className="shopCart-game-body">
                                    <div className="shopCart-game-name">
                                        <span>
                                            {cart.text}
                                        </span>
                                    </div>
                                    <span className="shopCart-game-remove">
                                        Remove
                                    </span>
                                </div>
                                <span  className="shopCart-game-cost">
                                    ${cart.cost}
                                </span>
                            </div>
                        ))}
                    </>
                )}
            </div>
        </div>
    )
}

export { ShopCart };