import { pokemonAPI } from "./api";
import { BaseThunkType, InferActionsTypes } from "./store";

export type InitialStatePokemonsType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType>;
type PokemonsType = {
  name: string;
  url: string;
};

//reducer
const initialState = {
  pokemons: [] as Array<PokemonsType>,
};
export const pokemonsReducer = (
  state = initialState,
  action: ActionsType
): InitialStatePokemonsType => {
  switch (action.type) {
    case "POKEMON/SET_POKEMONS": {
      return {
        ...state,
        pokemons: action.pokemons,
      };
    }
    default:
      return state;
  }
};
//actions
export const actions = {
  setPokemons: (pokemons: PokemonsType[]) => {
    return { type: "POKEMON/SET_POKEMONS", pokemons } as const;
  },
};
// thunk
export const getPokemons = (): ThunkType => async (dispatch) => {
  const { data }: any = await pokemonAPI.getPokemons();
  dispatch(actions.setPokemons(data.results));
};
