import React from "react";
import "./App.css";
import SearchBox from "./components/search-box/search-box.component";
import CardList from "./components/card-list/card-list.component";
import { useState, useEffect } from "react";

function App() {
  const [searchField, setSearchField] = useState("");
  const [robots, setRobots] = useState([]);
  const [filtredRobots, setFiltredRobots] = useState(robots);

  const onSearchChange = (event) => {
    const searchBoxValue = event.target.value.toLocaleLowerCase();
    setSearchField(searchBoxValue);
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((result) => {
        setRobots(result);
      });
  }, []);
  useEffect(() => {
    const newFiltredRobots = robots.filter((robot) => {
      if (robot.name.includes(searchField)) {
        return robot;
      }
    });
    setFiltredRobots(newFiltredRobots);
  }, [searchField, robots]);

  return (
    <div className="container">
      <h1 className="app-title">Robots Rolodex</h1>
      <SearchBox
        className={"search-box"}
        placeholder={"search robots"}
        onChangeHandler={onSearchChange}
      />
      <CardList robots={filtredRobots} />
    </div>
  );
}

export default App;
