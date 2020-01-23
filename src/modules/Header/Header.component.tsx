import React from 'react';
import './Header.scss';
import logo from 'src/images/logo.png' ;
import { ShopCart } from '../ShopCart/ShopCart.component';
import { HeaderProps } from './Header.props';

const Header: React.FC<HeaderProps> = ({
    shopCarts,
    clearAll,
    removeGame
}) => {
    return (
        <div className="header">
            <div className="header-menu">
                <img src={logo} className="header-logo" alt="logo" />
                <ShopCart shopCarts={shopCarts} clearAll={clearAll} removeGame={removeGame} />
            </div>
            
        </div>
    )
}

export { Header };