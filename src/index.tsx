import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link, Redirect } from "react-router-dom";

import "./index.less";

import img from "@src/assets/1.jpg";

/** 懒加载组件接口 */
interface LazyLoadComponentProps {
  src: string;
}

/** 懒加载组件 */
const LazyLoadComponent: React.FC<LazyLoadComponentProps> = ({ src }) => {
  const [moduleItem, setModuleItem] = useState<{ default: JSX.Element }>(null);
  useEffect(() => {
    import(src)
      .then((moduleItem) => {
        setModuleItem(moduleItem);
      })
      .catch((e) => console.log(e));
  }, []);

  return moduleItem?.default || <div>加载中...(import()不支持变量,怎么解决呢)</div>;
};

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
            {/* <LazyLoadComponent src={"@src/pages/test2/test2"} /> */}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<Test />, document.getElementById("root"));
