import React, { Component } from "react";
import Timing from "./Timing";

class BusData extends Component {
  render() {
    return (
      <div className="bus-data">
        <h2 className="bus-number">Bus {this.props.services.ServiceNo}</h2>
        <Timing
          NextOne={this.props.services.NextBus}
          NextTwo={this.props.services.NextBus2}
        />
      </div>
    );
  }
}

export default BusData;
