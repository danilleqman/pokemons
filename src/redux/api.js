import axios from "axios";

const instance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export const pokemonAPI = {
  getPokemons() {
    return instance.get(`pokemon?limit=20`);
  },
  getPokemon(id) {
    return instance.get(`pokemon/${id}`);
  },
  getAbility(id) {
    return instance.get(`ability/${id}`);
  },
};
