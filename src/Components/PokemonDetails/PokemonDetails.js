import React from 'react';
import styles from './PokemonDetails.module.css';
import { GlobalContext } from '../../GlobalContext';
import Loading from '../Loading/Loading';

const PokemonDetails = () => {
  const { loading, selectedLoaded, homeShow, selected, male, female } =
    React.useContext(GlobalContext);

  function handleDecimal(char) {
    const raw = char.toString();
    const splitedRaw = raw.split('');
    if (splitedRaw.length === 1) {
      return '0.' + splitedRaw[0];
    } else {
      splitedRaw.splice(splitedRaw.length - 1, 0, '.');
      return splitedRaw.join('');
    }
  }

  // selectedLoaded && console.log(selectedLoaded)
  // homeShow[selected - 1] && console.log(homeShow[selected - 1])
  if (loading) return <Loading />;
  if (selectedLoaded === null) return <Loading />;
  return (
    <div className={`${styles.containerDetails} container`}>
      <div className={styles.selectedPokemon}>
        <h1 className={styles.selectedName}>
          <span>#{homeShow[selected - 1].id}</span>{' '}
          {homeShow[selected - 1].name}
        </h1>
        <div className={styles.selectedInfo}>
          <div className={styles.selectedSprites}>
            <div className={styles.selectedPrimaryImage}>
              <img
                src={
                  homeShow[selected - 1].sprites.other['official-artwork']
                    .front_default
                }
                alt=""
              />
              <p>Arte oficial</p>
            </div>
            <div className={styles.selectedOtherImages}>
              <div>
                <h5>Normal</h5>
                <img
                  src={homeShow[selected - 1].sprites.front_default}
                  alt=""
                />
                <img src={homeShow[selected - 1].sprites.back_default} alt="" />
              </div>
              <div>
                <h5>Shiny</h5>
                <img src={homeShow[selected - 1].sprites.front_shiny} alt="" />
                <img src={homeShow[selected - 1].sprites.back_shiny} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.selectedData}>
            <div className={styles.selectedTypes}>
              <h3>Tipos:</h3>
              <div className={styles.selectedTypesImg}>
                {homeShow[selected - 1].types.map((eachType) => (
                  <div className={styles.selectedTypesEachImg} key={eachType.type.name}>
                    <img
                      className="pokeTypeImg"
                      width="70px"
                      height="70px"
                      src={require(`../../Assets/${eachType.type.name}.svg`)}
                      alt=""
                    />
                    <p>{eachType.type.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.selectedAttributes}>
              <div className={styles.selectedAttributesLeft}>
                <ul>
                  <li>
                    <span className={styles.selectedAttributesTitle}>
                      Altura
                    </span>
                    <span className={styles.selectedAttributesValue}>
                      {`${handleDecimal(homeShow[selected - 1].height)} metros`}
                    </span>
                  </li>
                  <li>
                    <span className={styles.selectedAttributesTitle}>Peso</span>
                    <span
                      className={styles.selectedAttributesValue}
                    >{`${handleDecimal(
                      homeShow[selected - 1].weight,
                    )} KG`}</span>
                  </li>
                  <li>
                    <span className={styles.selectedAttributesTitle}>Sexo</span>
                    {selectedLoaded.gender_rate === -1 ? (
                      'Sexo desconhecido'
                    ) : (
                      <div className={styles.selectedAttributesValue}>
                        <span className={styles.selectedFemale}>
                          ♀ {female}%
                        </span>
                        <span className={styles.selectedMale}>♂ {male}%</span>
                      </div>
                    )}
                  </li>
                </ul>
              </div>
              <div className={styles.selectedAttributesRight}>
                <ul>
                  <li>
                    <span className={styles.selectedAttributesTitle}>
                      Habitat
                    </span>
                    {selectedLoaded.habitat ? (
                      <span className={styles.selectedAttributesValue}>
                        {selectedLoaded.habitat.name}
                      </span>
                    ) : (
                      <span>Desconhecido</span>
                    )}
                  </li>
                  <li>
                    <span className={styles.selectedAttributesTitle}>
                      Habilidades
                    </span>
                    {homeShow[selected - 1].abilities.map((eachAbility) => (
                      <span
                        className={`${styles.selectedAttributesValue} abilities`}
                        key={eachAbility.ability.name}
                      >
                        {eachAbility.ability.name}
                      </span>
                    ))}
                  </li>
                  <li>
                    <span className={styles.selectedAttributesTitle}></span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.selectedStats}>
              <ul className={styles.hp}>
                <li className={styles.statsName}>
                  {homeShow[selected - 1].stats[0].stat.name}
                </li>
                <li>{homeShow[selected - 1].stats[0].base_stat}</li>
              </ul>
              <div className={styles.selectedStatsWrapper}>
                <div className={styles.selectedStatsLeft}>
                  <ul>
                    <li>
                      <ul>
                        <li className={styles.statsName}>
                          {homeShow[selected - 1].stats[1].stat.name}
                        </li>
                        <li>{homeShow[selected - 1].stats[1].base_stat}</li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li className={styles.statsName}>
                          {homeShow[selected - 1].stats[2].stat.name}
                        </li>
                        <li>{homeShow[selected - 1].stats[2].base_stat}</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className={styles.selectedStatsRight}>
                  <ul>
                    <li>
                      <ul>
                        <li className={styles.statsName}>
                          {homeShow[selected - 1].stats[3].stat.name.replace('special-attack', 'sp-attack')}
                        </li>
                        <li>{homeShow[selected - 1].stats[3].base_stat}</li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li className={styles.statsName}>
                          {homeShow[selected - 1].stats[4].stat.name.replace('special-defense', 'sp-defense')}
                        </li>
                        <li>{homeShow[selected - 1].stats[4].base_stat}</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <ul className={styles.hp}>
                <li className={styles.statsName}>
                  {homeShow[selected - 1].stats[5].stat.name}
                </li>
                <li>{homeShow[selected - 1].stats[5].base_stat}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
