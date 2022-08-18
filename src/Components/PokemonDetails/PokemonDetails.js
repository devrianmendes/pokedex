import React from 'react';
import styles from './PokemonDetails.module.css';
import { GlobalContext } from '../../GlobalContext';
import { GET_POKEMONDETAILS } from '../../Fetch';
import Loading from '../Loading/Loading';

const PokemonDetails = () => {
  const [male, setMale] = React.useState(null); //Percentual do gênero masculino
  const [details, setDetails] = React.useState({}); //mais detalhes do poke
  const [female, setFemale] = React.useState(null); //Percentual do gênero feminino
  const [loading, setLoading] = React.useState(false)
  const { homeShow } = React.useContext(GlobalContext); //Pegando a lista de poke do contexto global
  let selected = homeShow[window.localStorage.getItem('poke') - 1]; //Pegando o Poke clicado da lista do contexto global

  React.useEffect(() => {
    setLoading(true)
    //Pegando detalhes extras do pokemon clicado
    const details = async () => {
      const data = await GET_POKEMONDETAILS(
        window.localStorage.getItem('name'),
      );
      console.log(data, 'json retornado no pokedetails')
      setDetails(data);
      setLoading(false)
    };
    details();
  }, []);

  React.useEffect(() => {
    //Definindo a porcentagem do sexo
    function handleGender() {
      const multiplier = 12.5;
      setFemale(details.gender_rate * multiplier);
      setMale(100 - female);
    }
    handleGender();
  }, [details, female]);

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

  if (loading) return <Loading />;
  if (details.habitat)
  return (
    <div className={styles.containerDetails}>
      <div className={styles.selectedPokemon}>
        <h1 className={styles.selectedName}>
          <span>#{selected.id}</span>{' '}
          {selected.name}
        </h1>
        <div className={styles.selectedInfo}>
          <div className={styles.selectedSprites}>
            <div className={styles.selectedPrimaryImage}>
              <img
                src={selected.sprites.other['official-artwork'].front_default}
                alt=""
              />
              <p>Arte oficial</p>
            </div>
            <div className={styles.selectedOtherImages}>
              <div>
                <h5>Normal</h5>
                <img src={selected.sprites.front_default} alt="" />
                <img src={selected.sprites.back_default} alt="" />
              </div>
              <div>
                <h5>Shiny</h5>
                <img src={selected.sprites.front_shiny} alt="" />
                <img src={selected.sprites.back_shiny} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.selectedData}>
            <div className={styles.selectedTypes}>
              <h3>Tipos:</h3>
              <div className={styles.selectedTypesImg}>
                {selected.types.map((eachType) => (
                  <div>
                    <img
                      className="pokeTypeImg"
                      width="70px"
                      height="70px"
                      src={require(`../../Assets/${eachType.type.name}.svg`)}
                      alt=""
                    />
                    <p>
                      {eachType.type.name}
                    </p>
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
                      {`${handleDecimal(selected.height)} metros`}
                    </span>
                  </li>
                  <li>
                    <span className={styles.selectedAttributesTitle}>Peso</span>
                    <span
                      className={styles.selectedAttributesValue}
                    >{`${handleDecimal(selected.weight)} KG`}</span>
                  </li>
                  <li>
                    <span className={styles.selectedAttributesTitle}>Sexo</span>
                    <div className={styles.selectedAttributesValue}>
                      <span className={styles.selectedFemale}>♀ {female}%</span>
                      <span className={styles.selectedMale}>♂ {male}%</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className={styles.selectedAttributesRight}>
                <ul>
                  <li>
                    <span className={styles.selectedAttributesTitle}>
                      Habitat
                    </span>
                    <span className={styles.selectedAttributesValue}>
                      {details.habitat.name}
                    </span>
                  </li>
                  <li>
                    <span className={styles.selectedAttributesTitle}>
                      Habilidades
                    </span>
                    {selected.abilities.map((eachAbility) => (
                      <span
                        className={`${styles.selectedAttributesValue} abilities`}
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
                  {selected.stats[0].stat.name}
                </li>
                <li>{selected.stats[0].base_stat}</li>
              </ul>
              <div className={styles.selectedStatsWrapper}>
                <div className={styles.selectedStatsLeft}>
                  <ul>
                    <li>
                      <ul>
                        <li className={styles.statsName}>
                          {selected.stats[1].stat.name}
                        </li>
                        <li>{selected.stats[1].base_stat}</li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li className={styles.statsName}>
                          {selected.stats[2].stat.name}
                        </li>
                        <li>{selected.stats[2].base_stat}</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className={styles.selectedStatsRight}>
                  <ul>
                    <li>
                      <ul>
                        <li className={styles.statsName}>
                          {selected.stats[3].stat.name}
                        </li>
                        <li>{selected.stats[3].base_stat}</li>
                      </ul>
                    </li>
                    <li>
                      <ul>
                        <li className={styles.statsName}>
                          {selected.stats[4].stat.name}
                        </li>
                        <li>{selected.stats[4].base_stat}</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
              <ul className={styles.hp}>
                <li className={styles.statsName}>
                  {selected.stats[5].stat.name}
                </li>
                <li>{selected.stats[5].base_stat}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
