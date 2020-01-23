import React from 'react';
import './Card.scss';
import classNames from 'classnames';
import data from 'src/config/cards.json';
import { images } from 'src/shared/images';
import { Cart } from 'src/shared/cart.model';
import { CardProps } from './Card.props';

const isAlreadyAdded = (shopCarts: Cart[], game: Cart) => {
    return shopCarts.some(cart => cart.id === game.id);
} 

const Card: React.FC<CardProps> = ({
    addToCart,
    shopCarts
}) => {
    return (
        <div className="cards">
            {data.cards.map(card => (
                <div className="card" key={card.img}>
                    <img src={images(card.img)} alt={card.img} />
                    <div className={
                        classNames(
                        "card-body",
                        { "card-disabled": card.isOwned }
                    )}>
                        <span className="card-title">{card.text}</span>

                        <div className="card-footer">
                            {!card.isOwned && !isAlreadyAdded(shopCarts, card) && !!card.discount && (
                                <span className="card-discount">{card.discount}</span>
                            )}
                            {!card.isOwned && !isAlreadyAdded(shopCarts, card) && !!card.cost && (
                                <span onClick={addToCart(card)} className="card-button">${card.cost}</span>
                            )}
                            {isAlreadyAdded(shopCarts, card) && (
                                <span className="card-button">IN CART</span>
                            )}
                            {card.isOwned && (
                                <span className="card-button">OWNED</span>
                            )}
                        </div>
                    </div>
                </div>
            ))} 
        </div>
    )
}

export { Card };