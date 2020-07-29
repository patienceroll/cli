import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";

import "./index.less";

import img from "@src/assets/1.jpg";

const Test1 = () => {
  const [child, setChild] = useState<
    typeof import("@src/pages/test1/test1") | undefined
  >();

  useEffect(() => {
    import("./pages/test1/test1")
      .then((res) => {
        setChild(res);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <img src={img} />
      {child ? <child.default /> : null}
    </>
  );
};

const Test2 = () => {
  const [child, setChild] = useState<
    typeof import("@src/pages/test2/test2") | undefined
  >();

  useEffect(() => {
    import("./pages/test2/test2")
      .then((res) => {
        setChild(res);
      })
      .catch((e) => console.log(e));
  }, []);

  return <>test2{}</>;
};

const Test = () => {
  return (
    <div className="aaa">
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/test1">test1</Link>
          </li>
          <li>
            <Link to="/test2">test2</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <Redirect to="/test1" />
          </Route>
          <Route path="/test1">
            <Test1 />
          </Route>
          <Route path="/test2">
            <Test2 />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<Test />, document.getElementById("root"));
