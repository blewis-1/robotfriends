import React from "react";
import Card from "../card/Card";

import "./cardList.css";

const CardList = ({robots}) => {
  return (
    <div className="card-wrapper">
      {robots.map((robot, index) => {
        return (
          <Card
            key={robot.id}
            name={robot.name}
            email={robot.email}
            id={robot.id}
          />
        );
      })}
    </div>
  );
};

export default CardList;
