import React, { Component } from "react";

class Suggestion extends Component {
  state = {};
  render() {
    return (
      <div className="suggestions">
        {this.props.results.map(e => {
          return (
            <a href="#">
              <p>{e.ServiceNo}</p>
            </a>
          );
        })}
      </div>
    );
  }
}

export default Suggestion;
