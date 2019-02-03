import React, { Component } from "react";
import BusStop from "./BusStop";

class BusCard extends Component {
  state = {
    nearbyCode: []
  };

  componentDidMount() {
    fetch(
      "/api/nearby?userLat=" +
        this.props.userLat +
        "&userLon=" +
        this.props.userLon
    )
      .then(response => response.json())
      .then(data => {
        let sortable = [];
        for (let distance in data) {
          sortable.push([distance, data[distance]]);
        }

        sortable.sort(function(a, b) {
          return a[1] - b[1];
        });

        let nearbyCode = sortable.map(e => {
          return e[0];
        });

        this.setState({
          nearbyCode: nearbyCode
        });
      });
  }
  render() {
    return (
      <div className="container bus-card">
        {this.state.nearbyCode.map(e => {
          return <BusStop stopID={e} />;
        })}
      </div>
    );
  }
}

export default BusCard;
