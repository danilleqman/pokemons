import { Action, applyMiddleware, combineReducers, createStore } from "redux";
import thunk, { ThunkAction } from "redux-thunk";

import { pokemonsReducer } from "./pokemons-reducer";
import { pokemonReducer } from "./pokemon-reducer";

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;
export type InferActionsTypes<T> = T extends {
  [keys: string]: (...args: any[]) => infer U;
}
  ? U
  : never;
export type BaseThunkType<
  A extends Action = Action,
  R = Promise<void>
> = ThunkAction<R, AppStateType, unknown, A>;

const rootReducer = combineReducers({
  pokemons: pokemonsReducer,
  pokemon: pokemonReducer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));
export type InitialStateType = ReturnType<typeof rootReducer>;
