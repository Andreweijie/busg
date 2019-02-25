import React, { Component } from "react";
import Modal from "./Modal";
import BusStop from "./BusStop";
class Inner extends Component {
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
      <div>
        <h4 onClick={this.toggleModal}>{this.props.stopID}</h4>
        {this.state.showModal ? (
          <Modal open={this.state.showModal} onClose={this.toggleModal}>
            <BusStop stopID={this.props.stopID} />
          </Modal>
        ) : null}
      </div>
    );
  }
}

export default Inner;
