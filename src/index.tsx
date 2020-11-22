import React from "react";
import ReactDOM from "react-dom";

import style from "./index.less";
  

const Test = () => {
  return (
    <div className={style.abc}>
      <span>123</span>
    </div>
  );
};

ReactDOM.render(<Test />, document.getElementById("root"));
