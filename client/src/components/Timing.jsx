import React from "react";

const Timing = props => {
  const formatToMin = time => {
    let data = parseFloat(Date.parse(time) - Date.now()) / 60000;
    if (data < 1) {
      return "Arriving";
    } else if (isNaN(data)) {
      return "";
    } else {
      return Math.floor(data);
    }
  };

  const sinOrDoub = type => {
    if (type == "SD") {
      return "single";
    } else if (type == "DD") {
      return "double";
    } else {
      return "";
    }
  };
  return (
    <div className="timing">
      <h2 className="first-time">
        {formatToMin(props.NextOne.EstimatedArrival)}{" "}
        {formatToMin(props.NextOne.EstimatedArrival) == "Arriving" ||
        formatToMin(props.NextOne.EstimatedArrival) == ""
          ? ""
          : "mins"}
        <h3>{sinOrDoub(props.NextOne.Type)}</h3>
      </h2>
      <h2 className="second-time">
        {formatToMin(props.NextTwo.EstimatedArrival)}{" "}
        {formatToMin(props.NextTwo.EstimatedArrival) == "Arriving" ||
        formatToMin(props.NextTwo.EstimatedArrival) == ""
          ? ""
          : "mins"}
        <h3>{sinOrDoub(props.NextTwo.Type)}</h3>
      </h2>
    </div>
  );
};

export default Timing;
