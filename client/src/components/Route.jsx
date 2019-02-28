import React, { Component } from "react";

import Inner from "./Inner";

class Route extends Component {
  render() {
    return (
      <div className="routelist">
        <div className="destination" style={{ height: "3em" }}>
          TO: {this.props.start}
        </div>
        {this.props.routes.map(e => {
          return (
            <div>
              <h4>{e.Description}</h4>
              <Inner stopID={e.BusStopCode} />
              <hr />
            </div>
          );
        })}
      </div>
    );
  }
}

export default Route;
