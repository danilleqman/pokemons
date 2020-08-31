import React from "react";

import "./ButtonBack.scss";

export const ButtonBack = (props: { goBack: Function }) => {
  return (
    <button
      className={"button "}
      onClick={() => {
        props.goBack();
      }}
    >
      ←
    </button>
  );
};
