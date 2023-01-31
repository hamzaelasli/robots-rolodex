import { Component } from "react";
import "./card.styles.css";
class Card extends Component {
  render() {
    const { id, name, email } = this.props.list;
    // console.log(id);
    return (
      <div className="card">
        <img src={`https://robohash.org/${id}?set=set7`} alt="robot image" />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
