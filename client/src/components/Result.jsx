import React, { Component } from "react";
import Modal from "./Modal";
import Routes from "./RouteCard";
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
      <a href="#">
        <p
          onClick={this.toggleModal}
          className={this.props.query == this.props.result ? "match" : "test"}
        >
          {this.props.result}
        </p>
        {this.state.showModal ? (
          <Modal open={this.state.showModal} onClose={this.toggleModal}>
            {this.props.result.length == 5 ? (
              <BusStop stopID={this.props.result} />
            ) : (
              <Routes serviceNo={this.props.result} />
            )}
          </Modal>
        ) : null}
      </a>
    );
  }
}

export default Result;
