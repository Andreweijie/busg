import React, { Component } from "react";
import Route from "./Route";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus } from "@fortawesome/free-solid-svg-icons";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

library.add(faBus);
class RouteCard extends Component {
  state = {
    route1: [],
    route2: [],
    route1name: "",
    route2name: ""
  };

  componentDidMount() {
    fetch("/api/routes?serviceno=" + this.props.serviceNo)
      .then(response => response.json())
      .then(data =>
        this.setState(
          {
            route1: data.filter(e => {
              return e.Direction == 1;
            }),
            route2: data.filter(e => {
              return e.Direction == 2;
            })
          },
          () => {
            this.setState({
              route1name: this.state.route1[this.state.route1.length - 1]
                .Description,
              route2name: this.checkLoop(this.state.route2)
            });
          }
        )
      );
  }
  checkLoop(a) {
    if (a.length != 0) {
      return a[a.length - 1].Description;
    } else {
      return [];
    }
  }
  render() {
    return (
      <div className="route-card">
        <h1>
          <FontAwesomeIcon className="icon" icon="bus" /> {this.props.serviceNo}
        </h1>
        <hr />
        <Tabs>
          <TabList>
            <Tab>{this.state.route1name.toUpperCase()}</Tab>
            {this.state.route2.length != 0 ? (
              <Tab>{this.state.route2name.toUpperCase()}</Tab>
            ) : null}
          </TabList>

          <TabPanel>
            <Route routes={this.state.route1} />
          </TabPanel>
          {this.state.route2.length != 0 ? (
            <TabPanel>
              <Route routes={this.state.route2} />
            </TabPanel>
          ) : null}
        </Tabs>
      </div>
    );
  }
}

export default RouteCard;
