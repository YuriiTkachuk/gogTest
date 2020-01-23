import React, { useState } from 'react';
import './App.scss';
import { Header } from './modules/Header/Header.component'
import witcher from 'src/images/witcher.jpg' ;
import { Card } from './modules/Card/Card.component';
import { Cart } from './shared/cart.model';

const App: React.FC = () => {
  const [carts, setCart] = useState([] as Cart[]);

  const addToCart = (game: Cart) => () => {
    const newSet = [...carts, game];
    setCart(newSet);
  }

  const clearAll = () => {
    setCart([]);
  }

  const removeGame = (id: number) => () => {
    const newSet = carts.filter((cart: Cart) => cart.id !== id);
    setCart(newSet);
  }

  return (
    <div className="app">
      <Header shopCarts={carts} clearAll={clearAll} removeGame={removeGame} />
      <div className="app-content">
        <h3 className="app-title">GAME OF THE WEEK</h3>
        <img src={witcher} className="app-weekGame" alt="week game" />
        <Card addToCart={addToCart} shopCarts={carts} />
      </div>
    </div>
  );
}

export default App;
