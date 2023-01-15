import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchField: "",
    };
    console.log("constructor");
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((fetchedUsers) => {
        this.setState(() => {
          return { users: fetchedUsers };
        });
      });
    console.log("component mounted and fetching data");
  }
  onSearchChange = (event) => {
    const searchBoxValue = event.currentTarget.value;
    this.setState(() => {
      return { searchField: searchBoxValue };
    });
  };
  render() {
    const { users, searchField } = this.state;
    const { onSearchChange } = this;
    const filtredUsers = users.filter((user) => {
      return user.name.toLowerCase().includes(searchField);
    });
    return (
      <div className="container">
        <input
          className="search-box"
          type="search"
          placeholder="search monster"
          onChange={onSearchChange}
        />
        <CardList users={filtredUsers} />
      </div>
    );
  }
}

export default App;
