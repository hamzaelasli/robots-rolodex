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
    // console.log(robots);
    // console.log(searchField);
    const filtredRobots = robots.filter((robot) => {
      const robotName = robot.name.toLocaleLowerCase();
      // console.log(robotName.includes(searchField));
      if (robotName.includes(searchField)) {
        return robot;
      }
    });
    console.log(filtredRobots);
    return (
      <div className="container">
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
