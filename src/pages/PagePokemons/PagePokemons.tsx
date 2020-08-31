import React, { useEffect } from "react";
import { Card } from "../../components/Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../../redux/pokemons-reducer";
import { InitialStateType } from "../../redux/store";
import "./PagePokemons.scss";
import { Link } from "react-router-dom";

export const PagePokemons = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPokemons());
    console.log(1);
  }, []);

  const pokemons = useSelector(
    (state: InitialStateType) => state.pokemons.pokemons
  );

  pokemons.sort((n1, n2) => {
    if (n1.name > n2.name) {
      return 1;
    }
    if (n1.name < n2.name) {
      return -1;
    }
    return 0;
  });

  return (
    <div className={"pokemons"}>
      {pokemons.length
        ? pokemons.map((pokemon) => {
            // const id = pokemon.url.slice(34);
            const id = pokemon.name;

            return (
              <Link key={id} to={`/pokemon/${id}`}>
                <Card item={pokemon} />
              </Link>
            );
          })
        : "Loading..."}
    </div>
  );
};
