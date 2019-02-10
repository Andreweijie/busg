import React, { Component } from "react";

class Search extends Component {
  state = {};

  ajaxSearch(queryString) {
    fetch("/api/search?query=" + queryString).then();
  }
  render() {
    return (
      <div className="search container">
        <input
          type="text"
          className="form-control"
          placeholder="Search for Buses or Bus Stops"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
    );
  }
}

export default Search;
