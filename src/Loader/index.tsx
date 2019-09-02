import * as React from "react";
// import { Loader } from 'semantic-ui-react';
import "./Loader.scss";

const Loader: React.FC<{ active?: boolean }> = ({ active }) => (
  <div className={"spinner" + (active ? " is-visible" : "")}>
    <div className="spinner-inner">
      <div className="bounce1" />
      <div className="bounce2" />
      <div className="bounce3" />
    </div>
  </div>
);

Loader.displayName = "Loader";

export default Loader;
