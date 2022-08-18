const API_URL = 'https://pokeapi.co/api/v2/';

export async function GET_DEXS(dex) {
  const fetchPokemon = await fetch(API_URL + `pokedex/${dex}/`);
  const jsonPokemon = await fetchPokemon.json();
  return jsonPokemon;
}

export async function GET_POKEMON(pokemon) {
  const fetchPokemon = await fetch(API_URL + `pokemon/${pokemon}/`);
  const jsonPokemon = await fetchPokemon.json();
  return jsonPokemon;
}

export async function GET_POKEMONDETAILS(pokemon) {
  const fetchPokemon = await fetch(API_URL + `pokemon-species/${pokemon}/`);
  console.log(fetchPokemon, 'responpse retornado no feth')
  const jsonPokemon = await fetchPokemon.json();
  console.log(jsonPokemon, 'json retornado no fetch')
  return jsonPokemon;
}
