import React, { Component } from "react";
import Timing from "./Timing";
import Modal from "./Modal";
import RouteCard from "./RouteCard";

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
          Bus {this.props.services.ServiceNo}
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
