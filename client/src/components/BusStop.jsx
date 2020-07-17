import React, { Component } from "react";
import BusData from "./BusData";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedoAlt, faHeart } from "@fortawesome/free-solid-svg-icons";
import ls from "local-storage";

library.add(faRedoAlt);
library.add(faHeart);

class BusStop extends Component {
  state = {
    BusStopCode: 0,
    Services: [],
    BusStopName: "",
    spin: false,
    favourited: false
  };
  componentDidMount() {
    if (ls.get("favourites")) {
      let currFav = ls.get("favourites").split(",");
      if (currFav.includes(this.props.stopID)) {
        this.setState({ favourited: true });
      }
    }

    this.fetchData();
    fetch("/api/busname?buscode=" + this.props.stopID)
      .then(response => response.json())
      .then(data =>
        this.setState({
          BusStopName: data[0].Description
        })
      );
  }

  fetchData() {
    console.log("fetching...");
    this.setState({
      spin: true
    });
    fetch("/api/busdata?buscode=" + this.props.stopID)
      .then(response => response.json())
      .then(data =>
        this.setState({
          BusStopCode: data.BusStopCode,
          Services: data.Services
          //BusStopName: this.getName(this.props.stopID)
        })
      );
  }

  toggleFav() {
    if (ls.get("favourites")) {
      let currentls = ls.get("favourites").split(",");
      if (this.state.favourited) {
        let newls = currentls.filter(e => {
          return e != this.props.stopID;
        });
        ls.set("favourites", newls.toString());
        this.setState({ favourited: false });
      } else {
        currentls.push(this.props.stopID);
        let newls = currentls;
        ls.set("favourites", newls.toString());
        this.setState({ favourited: true });
      }
    } else {
      ls.set("favourites", this.props.stopID);
      this.setState({ favourited: true });
    }
  }
  render() {
    return (
      <div className="bus-stop fade">
        <div className="bus-head">
          <h1>
            {this.state.BusStopName}
            <h4>{this.state.BusStopCode}</h4>
          </h1>
          <div className="fav-box">
            <button className="refresh" onClick={() => this.toggleFav()}>
              <FontAwesomeIcon
                className={
                  this.state.favourited ? "fav-icon favourited" : "fav-icon"
                }
                icon="heart"
              />
            </button>
            <button
              className={this.state.spin ? "refresh spin" : "refresh"}
              onClick={() => this.fetchData()}
              onAnimationStart={() => this.setState({ services: [] })}
              onAnimationEnd={() => this.setState({ spin: false })}
            >
              <FontAwesomeIcon className="refresh-icon" icon="redo-alt" />
            </button>
          </div>
        </div>

        <div className="bus-data-list">
          {this.state.Services.map((e, i) => {
            return (
              <div>
                <BusData key={i} services={e} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default BusStop;
