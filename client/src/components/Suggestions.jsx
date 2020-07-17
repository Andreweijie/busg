import React from "react";
import Result from "./Result";

const Suggestions = props => {
  return (
    <div className="suggestions">
      {props.results[0].map(e => {
        return <Result query={props.query} stopCode={e} />;
      })}
      {props.results[1].map(e => {
        let stopCode = e.stopCode;
        let description = e.description;
        return (
          <Result
            query={props.query}
            stopCode={stopCode}
            description={description}
          />
        );
      })}
    </div>
  );
};

export default Suggestions;
