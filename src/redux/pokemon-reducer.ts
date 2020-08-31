import { pokemonAPI } from "./api";
import { BaseThunkType, InferActionsTypes } from "./store";

export type InitialStatePokemonType = typeof initialState;
type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType>;
type PokemonType = {
  name: string;
  sprites: {
    front_default: string;
  };
  weight: number;
  id: number;
  base_experience: number;
  abilities: AbilityType[];
};
type AbilityType = {
  ability: {
    name: string;
  };
};
type SelectedAbilityType = {
  id: number;
  name: string;
  effect_entries: {
    effect: string;
  }[];
};

//reducer
const initialState = {
  pokemon: { name: "" } as PokemonType,
  selectedAbility: { name: "" } as SelectedAbilityType,
};
export const pokemonReducer = (
  state = initialState,
  action: ActionsType
): InitialStatePokemonType => {
  switch (action.type) {
    case "POKEMON/SET_POKEMON": {
      return {
        ...state,
        pokemon: action.pokemon,
      };
    }
    case "POKEMON/SET_ABILITY": {
      return {
        ...state,
        selectedAbility: action.ability,
      };
    }
    default:
      return state;
  }
};
//actions
export const actions = {
  setPokemon: (pokemon: PokemonType) => {
    return { type: "POKEMON/SET_POKEMON", pokemon } as const;
  },
  setAbility: (ability: SelectedAbilityType) => {
    return { type: "POKEMON/SET_ABILITY", ability } as const;
  },
};
// thunk
export const getPokemon = (id: string): ThunkType => async (dispatch) => {
  const { data }: any = await pokemonAPI.getPokemon(id);
  dispatch(actions.setPokemon(data));
};
export const getAbility = (id: string): ThunkType => async (dispatch) => {
  const { data }: any = await pokemonAPI.getAbility(id);
  dispatch(actions.setAbility(data));
};
