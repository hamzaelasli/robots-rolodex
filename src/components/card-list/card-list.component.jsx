import React from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

function CardList({ robots }) {
  return (
    <div className="card-list-container">
      {robots.map((robot) => {
        return <Card  key={robot.id}robot={robot} />;
      })}
    </div>
  );
}

export default CardList;
