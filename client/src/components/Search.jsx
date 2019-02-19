import React, { Component } from "react";
import Suggestion from "./Suggestion";

class Search extends Component {
  state = {
    query: "",
    results: []
  };

  ajaxSearch() {
    fetch("/api/search?searchQuery=" + this.state.query)
      .then(response => response.json())
      .then(data =>
        this.setState(
          {
            results: data
          },
          () => {
            console.log(this.state.results);
          }
        )
      );
  }

  handleInputChange() {
    this.setState(
      {
        query: this.search.value
      },
      () => {
        if (this.state.query) {
          this.ajaxSearch();
          console.log("Searching...");
        } else {
          this.setState({
            results: []
          });
        }
      }
    );
  }
  render() {
    return (
      <div className="search container">
        <input
          type="text"
          ref={input => (this.search = input)}
          onChange={() => this.handleInputChange()}
          className="form-control"
          placeholder="Search for buses or bus stops"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
        <Suggestion results={this.state.results} />
      </div>
    );
  }
}

export default Search;
