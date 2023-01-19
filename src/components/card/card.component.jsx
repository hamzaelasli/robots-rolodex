import React, { Component } from "react";
import "./card.styles.css";

class Card extends Component {
  // constructor() {
  //     state
  // }
  render() {
    const { user } = this.props;
    return (
      <div  className={`card card-${user.id}`}>
        <img
          src={`https://robohash.org/${user.id}?set=set3`}
          alt="robot picture"
        />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    );
  }
}
export default Card;
