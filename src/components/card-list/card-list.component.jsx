import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";
class CardList extends Component {
  // constructor() {
  //   super();
  // }
  render() {
    // console.log("render from card list");
    const { users } = this.props;

    console.log(users);
    return (
      <div className="users">
        <div className="cards-container">
          {users.map((user) => {
            return (
              // <div key={user.id} className="card">
              //   {/* <img
              //     src={`https://robohash.org/${user.id}?set=set3`}
              //     alt="robot img"
              //   />
              //   <h2>{user.name}</h2>
              //   <p>{user.email}</p> */}
              //   <card user={user} />
              // </div>
              <Card user={user} key={user.id} />
            );
          })}
        </div>
      </div>
    );
  }
}

export default CardList;
