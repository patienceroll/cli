import React from "react";
import ReactDOM from "react-dom";

import "./index.less";

import img from "./assets/1.jpg";

const Test = () => {
  return (
    <div className="aaa">
      te2st
      <img src={img} />
    </div>
  );
};

ReactDOM.render(<Test />, document.getElementById("root"));
