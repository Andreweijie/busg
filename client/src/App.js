import React, { Component } from "react";
import "./App.css";
import BusCard from "./components/BusCard";
import Search from "./components/Search";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus } from "@fortawesome/free-solid-svg-icons";

library.add(faBus);

class App extends Component {
  state = {
    userLat: 0,
    userLon: 0
  };
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          userLat: position.coords.latitude,
          userLon: position.coords.longitude
        });
      });
    }
  }

  checkLoc() {
    if (this.state.userLat) {
      return (
        <BusCard userLat={this.state.userLat} userLon={this.state.userLon} />
      );
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="header">
          <FontAwesomeIcon className="icon" icon="bus" />
          BU<span>SG</span>
        </h1>
        <hr />
        <h2 className="header2">
          <Search />
        </h2>
        {this.checkLoc()}
      </div>
    );
  }
}

export default App;
