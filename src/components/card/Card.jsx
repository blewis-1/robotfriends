import React from "react";
import "./card.css";

const Card = (props) => {
  return (
    <div className="card">
      <div>
        <img src={`https://robohash.org/${props.id}?size=200x200`} alt="robot" />
      </div>
      <p>{props.name}</p>
      <p> {props.email}</p>
    </div>
  );
};

export default Card;
