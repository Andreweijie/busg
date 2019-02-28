import React, { Component } from "react";
import "./App.css";
import BusCard from "./components/BusCard";
import Search from "./components/Search";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus } from "@fortawesome/free-solid-svg-icons";
import { withCookies, Cookies } from "react-cookie";
import { instanceOf } from "prop-types";

library.add(faBus);

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);

    const { cookies } = props;
    this.state = {
      name: cookies.get("name") || "Andre",
      favourites: {},
      userLat: 0,
      userLon: 0
    };
  }

  componentDidMount() {
    this.handleNameChange("Andrew");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({
          userLat: position.coords.latitude,
          userLon: position.coords.longitude
        });
      });
    }
  }

  handleNameChange(name) {
    const { cookies } = this.props;

    cookies.set("name", name, { path: "/" });
    this.setState({ name });
  }

  checkLoc() {
    if (this.state.userLat) {
      return (
        <BusCard userLat={this.state.userLat} userLon={this.state.userLon} />
      );
    }
  }

  render() {
    console.log(this.state.name);
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

export default withCookies(App);
