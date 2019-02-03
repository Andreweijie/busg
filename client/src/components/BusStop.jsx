import React, { Component } from "react";
import BusData from "./BusData";
import NavBar from "./NavBar";

class BusStop extends Component {
  constructor() {
    super();
    this.state = {
      BusStopCode: 0,
      Services: [],
      BusStopName: ""
    };
  }
  componentDidMount() {
    /*let headers = {
      AccountKey: "xGVgRkvQRJK7Mr6RGYiLLQ==",
      Accept: "application/json"
    };*/
    //fetch("/ltaodataservice/BusArrivalv2?BusStopCode=" + this.props.stopID)
    fetch("/api/busdata?buscode=" + this.props.stopID)
      .then(response => response.json())
      .then(data =>
        this.setState({
          BusStopCode: data.BusStopCode,
          Services: data.Services
          //BusStopName: this.getName(this.props.stopID)
        })
      );

    fetch("/api/busname?buscode=" + this.props.stopID)
      .then(response => response.json())
      .then(data =>
        this.setState({
          BusStopName: data[0].Description
        })
      );
  }
  render() {
    return (
      <div className="bus-stop">
        <h1>
          {this.state.BusStopName}
          <h4>{this.state.BusStopCode}</h4>
        </h1>
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
