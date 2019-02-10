import React, { Component } from "react";

class Timing extends Component {
  state = {};

  formatToMin(time) {
    let data = parseFloat(Date.parse(time) - Date.now()) / 60000;
    if (data < 1) {
      return "Arriving";
    } else if (isNaN(data)) {
      return "";
    } else {
      return Math.floor(data);
    }
  }

  sinOrDoub(type) {
    if (type == "SD") {
      return "Single";
    } else if (type == "DD") {
      return "Double";
    } else {
      return "";
    }
  }
  render() {
    return (
      <div class="timing">
        <h2 className="first-time">
          {this.formatToMin(this.props.NextOne.EstimatedArrival)}{" "}
          {this.formatToMin(this.props.NextOne.EstimatedArrival) ==
            "Arriving" ||
          this.formatToMin(this.props.NextOne.EstimatedArrival) == ""
            ? ""
            : "mins"}
          <h3>{this.sinOrDoub(this.props.NextOne.Type)}</h3>
        </h2>
        <h2 className="second-time">
          {this.formatToMin(this.props.NextTwo.EstimatedArrival)}{" "}
          {this.formatToMin(this.props.NextTwo.EstimatedArrival) ==
            "Arriving" ||
          this.formatToMin(this.props.NextTwo.EstimatedArrival) == ""
            ? ""
            : "mins"}
          <h3>{this.sinOrDoub(this.props.NextTwo.Type)}</h3>
        </h2>
      </div>
    );
  }
}

export default Timing;
