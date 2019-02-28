import React, { Component } from "react";
import Timing from "./Timing";
import Modal from "./Modal";
import RouteCard from "./RouteCard";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus } from "@fortawesome/free-solid-svg-icons";

library.add(faBus);

class BusData extends Component {
  state = {
    showModal: false
  };
  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    });
  };
  render() {
    return (
      <div className="bus-data">
        <h2 className="bus-number" onClick={this.toggleModal}>
          <FontAwesomeIcon className="icon" icon="bus" />{" "}
          {this.props.services.ServiceNo}
        </h2>
        {this.state.showModal ? (
          <Modal open={this.state.showModal} onClose={this.toggleModal}>
            <RouteCard serviceNo={this.props.services.ServiceNo} />
          </Modal>
        ) : null}
        <Timing
          NextOne={this.props.services.NextBus}
          NextTwo={this.props.services.NextBus2}
        />
      </div>
    );
  }
}

export default BusData;
