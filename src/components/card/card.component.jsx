import React from "react";
import "./card.styles.css";
function Card({ robot }) {
  const { id, name, email } = robot;
  return (
    <div className="card">
      <img src={`https://robohash.org/${id}?set=set7`} alt="robot image" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;
