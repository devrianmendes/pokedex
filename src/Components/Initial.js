import React from 'react';
import styles from './Initial.module.css';
import { Link } from 'react-router-dom';
import EachPoke from './EachPoke/EachPoke';
import Loading from './Loading/Loading';
import { GlobalContext } from '../GlobalContext';

const Initial = () => {
  const { homeShow, loading } = React.useContext(GlobalContext);

  if (loading) return <Loading />;
  return (
    <section className={`${styles.mainContainer} container`}>
      <div className={styles.regionWrap}>
        <div className={styles.regionPokes}>
          {homeShow.map((eachPoke, pokeNum) => (
            <Link to="pokemon" key={eachPoke.order}>
              <EachPoke data={eachPoke} pokeNum={pokeNum} key={pokeNum} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initial;
