import React from "react";

import "./Card.scss";

type CardProps = {
  item: {
    name: string;
    url: string;
  };
};

export const Card = ({ item }: CardProps) => {
  return (
    <div className="card">
      <h1>{item.name}</h1>
      <img alt={"img"} src={"https://via.placeholder.com/200.png/09f/fff\n"} />
    </div>
  );
};
