import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { list } = this.props;
    return (
      <div className="card-list-container">
        {list.map((robot) => {
          const { name, id, email } = robot;
          return (
            <Card name={name} id={id} email={email} />
          );
        })}
      </div>
    );
  }
}

export default CardList;
