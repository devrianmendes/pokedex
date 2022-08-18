import React from 'react';
import styles from './Header.module.css';
import PokeballHeader from '../Assets/pokeball-header.png';

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.headerWrapper} container`}>
        <img src={PokeballHeader} alt="Pokeball" />
        <h1>Poke<span>Dex</span></h1>
      </div>
    </header>
  );
};

export default Header;
