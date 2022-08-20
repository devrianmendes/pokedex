import React from 'react';
import styles from './Loading.module.css';
// import { ReactComponent as Gif } from '../../Assets/pokemon-pokeball.gif';
import loadingGif from '../../Assets/gengar.gif'

const Loading = () => {
  return (
    <div className={styles.loading}>
      <img src={loadingGif} alt="" />
      <h3>Carregando...</h3>
    </div>
  );
};

export default Loading;
