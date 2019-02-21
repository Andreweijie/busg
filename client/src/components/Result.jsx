import React, { Component } from "react";
import Modal from "./Modal";
import Routes from "./Routes";
import BusStop from "./BusStop";
class Result extends Component {
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
      <a href="#" onClick={this.toggleModal}>
        <p>{this.props.result}</p>
        <Modal open={this.state.showModal}>
          {this.props.result.length == 5 ? (
            <BusStop stopID={this.props.result} />
          ) : (
            <Routes />
          )}
        </Modal>
      </a>
    );
  }
}

export default Result;
