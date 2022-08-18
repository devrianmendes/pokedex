import React from 'react';
import { GET_DEXS, GET_POKEMON } from './Fetch';

export const GlobalContext = React.createContext();

export const PokemonStorage = ({ children }) => {
  const [region1, setRegion1] = React.useState({});
  const [region2, setRegion2] = React.useState({});
  const [region3, setRegion3] = React.useState({});
  const [region4, setRegion4] = React.useState({});
  const [region5, setRegion5] = React.useState({});
  const [region6, setRegion6] = React.useState({});
  const [region7, setRegion7] = React.useState({});
  const [region8, setRegion8] = React.useState({});
  const [national, setNational] = React.useState([]);
  const [homeShow, setHomeShow] = React.useState([]);
  let [index, setIndex] = React.useState(0);
  let [stop, setStop] = React.useState(false);
  const [infinite, setInfinite] = React.useState(true);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    const fullDex = async () => {
      let titles = [];
      const { pokemon_entries } = await GET_DEXS(1);
      titles.push(
        'kanto',
        'johto',
        'hoenn',
        'sinnoh',
        'unova',
        'kalos',
        'alola',
        'galar',
      );
      // setGenTitle(titles);

      setRegion1({ name: 'kanto', dex: pokemon_entries.slice(0, 151) });
      setRegion2({ name: 'johto', dex: pokemon_entries.slice(151, 251) });
      setRegion3({ name: 'hoenn', dex: pokemon_entries.slice(251, 386) });
      setRegion4({ name: 'sinnoh', dex: pokemon_entries.slice(386, 493) });
      setRegion5({ name: 'unova', dex: pokemon_entries.slice(493, 649) });
      setRegion6({ name: 'kalos', dex: pokemon_entries.slice(649, 721) });
      setRegion7({ name: 'alola', dex: pokemon_entries.slice(721, 809) });
      setRegion8({ name: 'galar', dex: pokemon_entries.slice(809, 898) });
    };
    fullDex();
  }, []);

  React.useEffect(() => {
    setNational([
      { region1 },
      { region2 },
      { region3 },
      { region4 },
      { region5 },
      { region6 },
      { region7 },
      { region8 },
    ]);
  }, [region1, region2, region3, region4, region5, region6, region7, region8]);

  React.useEffect(() => {
    let links = [];
    const getGenDex = async () => {
      national[index][`region${index + 1}`].dex.map((eachPoke) =>
        links.push(GET_POKEMON(eachPoke.entry_number)),
      );
      const fetchedDex = await Promise.all(links);
      setHomeShow((oldState) => [...oldState, ...fetchedDex]);
      setLoading(false);
    };
    getGenDex();
  }, [national, index]);

  React.useEffect(() => {
    const infiniteScroll = async () => {
      if (infinite) {
        let scroll = window.scrollY;
        let height = document.documentElement.scrollHeight - window.innerHeight;
        if (scroll > height * 0.99 && !stop) {
          setStop(true);
          setIndex(index + 1);
          setTimeout(() => {
            setStop(false);
          }, 2000);
        }
      }
    };
    if (index === 8) setInfinite(false);
    window.addEventListener('scroll', infiniteScroll);
    window.addEventListener('wheel', infiniteScroll);

    return () => {
      window.removeEventListener('scroll', infiniteScroll);
      window.removeEventListener('wheel', infiniteScroll);
    };
  }, [index, stop, infinite]);

  if(national.length === 0) return null;
  return (
    <GlobalContext.Provider value={{ homeShow, loading }}>
      {children}
    </GlobalContext.Provider>
  );
};
