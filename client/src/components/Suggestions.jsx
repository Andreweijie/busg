import React, { Component } from "react";
import Result from "./Result";

class Suggestions extends Component {
  state = {};

  render() {
    return (
      <div className="suggestions">
        {this.props.results.map(e => {
          return <Result result={e} />;
        })}
      </div>
    );
  }
}

export default Suggestions;
