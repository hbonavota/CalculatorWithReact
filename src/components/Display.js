import React from "react";
import PropTypes from "prop-types";
import "./Display.css";

const Display = (props) => {
  return (
    <div className="component-display">
      <div>{props.value}</div>
    </div>
  );
}

Display.propTypes = {
  value: PropTypes.string,
};

export default Display;