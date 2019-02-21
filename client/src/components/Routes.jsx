import React, { Component } from "react";

class Routes extends Component {
  state = {
    routes: []
  };

  componentDidMount() {
    fetch("/api/routes?serviceno=10")
      .then(response => response.json())
      .then(data =>
        this.setState(
          {
            routes: data
          },
          () => {
            console.log(this.state.routes);
          }
        )
      );
  }

  render() {
    return (
      <div>
        {this.state.routes.map(e => {
          return (
            <div>
              <h1>{e.BusStopCode}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Routes;
