import { Component } from "react";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((robotsObjArr) => {
        this.setState(() => {
          return { robots: robotsObjArr };
        });
      });
  }
  onSearchChange = (event) => {
    const searchBoxValue = event.target.value.toLocaleLowerCase();
    this.setState({ searchField: searchBoxValue });
  };
  render() {
    const { robots, searchField } = this.state;
    const { onSearchChange } = this;
    const filtredRobots = robots.filter((robot) => {
      const robotName = robot.name.toLocaleLowerCase();
      if (robotName.includes(searchField)) {
        return robot;
      }
    });
    return (
      <div className="container">
        <h1 className="app-title">Robots Rolodex</h1>
        <SearchBox
          className={"search-box"}
          placeholder={"search robots"}
          onChangeHandler={onSearchChange}
        />
        <CardList list={filtredRobots} />
      </div>
    );
  }
}

export default App;
