import { Component } from "react";

class CardList extends Component {
  constructor() {
    super();
  }
  render() {
    const { users } = this.props;
    return (
      <div className="users">
        {users.map((user) => {
          return <h2 key={user.id}>{user.name}</h2>;
        })}
      </div>
    );
  }
}

export default CardList;
