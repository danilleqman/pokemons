import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../../redux/pokemon-reducer";
import { InitialStateType } from "../../redux/store";
import "./PagePokemon.scss";
import { Link } from "react-router-dom";
import { ButtonBack } from "../../components/ButtonBack/ButtonBack";

export const PagePokemon = ({ id, history }: { id: string; history: any }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemon(id));
  }, []);

  const pokemon = useSelector(
    (state: InitialStateType) => state.pokemon.pokemon
  );
  return (
    <div className={"pokemon"}>
      {pokemon.name ? (
        <>
          <h1 className={"header"}>{pokemon.name}</h1>
          <div className={"img"}>
            <img alt={pokemon.name} src={pokemon.sprites.front_default} />
          </div>
          <div className={"specifications"}>
            <p>Specifications</p>
            <p>Id: {pokemon.id}</p>
            <p>Base experience: {pokemon.base_experience}</p>
            <p>Weight: {pokemon.weight}</p>
          </div>
          <div className={"abilities"}>
            <p>Ability</p>
            {pokemon.abilities.map((ability) => {
              const id = ability.ability.name;
              return (
                <Link key={id} to={`/ability/${id}`}>
                  <button className={"ability-button"}>
                    {ability.ability.name}
                  </button>
                </Link>
              );
            })}
          </div>
          <ButtonBack goBack={history.goBack} />
        </>
      ) : (
        "Loading"
      )}
    </div>
  );
};
