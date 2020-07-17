import React, { Component } from "react";
import Inner from "./Inner";

const Route = props => {
  return (
    <div className="routelist">
      {props.routes.map(e => {
        return (
          <div>
            <div>
              <h4>{e.Description}</h4>
              <Inner stopID={e.BusStopCode} />
            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Route;
