import React from 'react';
import styles from './Header.module.css';
import PokeballHeader from '../Assets/pokeball-header.png';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <div className='container'>
        <Link to="/">
          <div className={`${styles.headerWrapper}`}>
            <img src={PokeballHeader} alt="Pokeball" />
            <h1>
              Poke<span>Dex</span>
            </h1>
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
