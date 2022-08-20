import React from 'react';
import { GlobalContext } from '../../GlobalContext';
import styles from './EachPoke.module.css';

const EachPoke = ({ data, pokeNum }) => {
  const { setSelected } = React.useContext(GlobalContext);

  return (
    <div className={styles.pokeContainer} onClick={(()=> setSelected(data.id))}>
      <img
        className={styles.pokeImg}
        src={
          data.sprites.other['official-artwork'].front_default === null
            ? require(`../../Assets/interrogacao.jpg`)
            : data.sprites.other['official-artwork'].front_default
        }
        alt="Imagem oficial do pokemon"
      />
      <div className={styles.details}>
        <span className={styles.pokeNumber}>#{pokeNum + 1}</span>
        <div className={styles.types}>
          {data.types.map((eachType) => (
            <img
              className="pokeTypeImg"
              width="20px"
              height="20px"
              src={require(`../../Assets/${eachType.type.name}.svg`)}
              alt=""
              key={eachType.type.name}
            />
          ))}
        </div>
      </div>
      <h4 className={styles.pokeName}>
        {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
      </h4>
    </div>
  );
};

export default EachPoke;
