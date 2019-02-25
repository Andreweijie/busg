import React, { Component } from "react";
import Result from "./Result";

class Suggestions extends Component {
  render() {
    return (
      <div className="suggestions">
        {this.props.results.map(e => {
          return <Result query={this.props.query} result={e} />;
        })}
      </div>
    );
  }
}

export default Suggestions;
