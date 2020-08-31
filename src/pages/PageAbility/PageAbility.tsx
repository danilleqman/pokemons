import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAbility } from "../../redux/pokemon-reducer";
import { InitialStateType } from "../../redux/store";
import "./PageAbility.scss";
import { ButtonBack } from "../../components/ButtonBack/ButtonBack";

export const PageAbility = ({ id, history }: { id: string; history: any }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAbility(id));
  }, []);

  const selectedAbility = useSelector(
    (state: InitialStateType) => state.pokemon.selectedAbility
  );
  return (
    <div className={"ability"}>
      {selectedAbility.name ? (
        <>
          <h1 className={"header"}>{selectedAbility.name}</h1>
          <div className={"abilities"}>
            <p>Specifications</p>
            <p>Id: {selectedAbility.id}</p>
            <p>Effect entries</p>
            {selectedAbility.effect_entries.map((effect) => {
              return <p> {effect.effect} </p>;
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
