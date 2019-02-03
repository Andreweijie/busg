import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <div className="bus-nav">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            BUSG
          </a>
        </nav>
      </div>
    );
  }
}

export default NavBar;
