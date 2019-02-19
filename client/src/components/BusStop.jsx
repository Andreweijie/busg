import React, { Component } from "react";
import BusData from "./BusData";
import NavBar from "./NavBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faRedoAlt);

class BusStop extends Component {
  constructor() {
    super();
    this.state = {
      BusStopCode: 0,
      Services: [],
      BusStopName: "",
      spin: false
    };
  }
  componentDidMount() {
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
  render() {
    return (
      <div className="bus-stop">
        <div className="bus-head">
          <h1>
            {this.state.BusStopName}
            <h4>{this.state.BusStopCode}</h4>
          </h1>
          <button
            className={this.state.spin ? "refresh spin" : "refresh"}
            onClick={() => this.fetchData()}
            onAnimationStart={() => this.setState({ services: [] })}
            onAnimationEnd={() => this.setState({ spin: false })}
          >
            <FontAwesomeIcon className="refresh-icon" icon="redo-alt" />
          </button>
        </div>

        <hr />
        {this.state.Services.map((e, i) => {
          return (
            <div>
              <BusData key={i} services={e} />
              <hr />
            </div>
          );
        })}
        <hr />
      </div>
    );
  }
}

export default BusStop;
