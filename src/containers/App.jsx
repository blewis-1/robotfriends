import React, { Component } from "react";
import CardList from "../components/cardList/CardList";
import SearchInput from "../components/searchInput/SearchInput";
import Scroll from "../components/scroll/Scroll";
import "./app.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfeild: "",
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => this.setState({ robots: users }));
  }

  onchangeSearch = (event) => {
    this.setState({ searchfeild: event.target.value });
  };

  render() {
    // destructure to avoid using this.state every where..
    const { robots, searchfeild } = this.state;

    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfeild.toLowerCase());
    });

    return !robots.length ? (
      <h1> Loading ... </h1>
    ) : (
      <div className="app">
        <h1> Robot Friends </h1>
        <SearchInput onchangeSearch={this.onchangeSearch} />

        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
