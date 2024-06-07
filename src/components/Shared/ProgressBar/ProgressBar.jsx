import React from "react";

const ProgressBar = ({ value }) => {
  const progressBarStyle = {
    width: value + "%",
    backgroundColor: "#0abdc6",
    borderRadius: "",
    outerHeight: '',
  };

  const progressStyle = { background: "white", borderRadius: "0", height: 3 };

  return (
    <div class="progress" style={progressStyle}>
      <div
        class="progress-bar"
        role="progressbar"
        aria-label="Success example"
        style={progressBarStyle}
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
};

export default ProgressBar;
