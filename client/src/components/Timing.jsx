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
        </h2>
        <h2 className="second-time">
          {this.formatToMin(this.props.NextTwo.EstimatedArrival)}{" "}
          {this.formatToMin(this.props.NextTwo.EstimatedArrival) ==
            "Arriving" ||
          this.formatToMin(this.props.NextTwo.EstimatedArrival) == ""
            ? ""
            : "mins"}
        </h2>
      </div>
    );
  }
}

export default Timing;
