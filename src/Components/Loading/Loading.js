import React from 'react';
import styles from './Loading.module.css';
// import { ReactComponent as Gif } from '../../Assets/pokemon-pokeball.gif';
import loadingGif from '../../Assets/loading.gif'

const Loading = () => {
  return (
    <div className={styles.loading}>
      <img src={loadingGif} alt="" />
    </div>
  );
};

export default Loading;
