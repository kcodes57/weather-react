import React from "react";
import "./Weather.css";

import Search from "./Search";
import Current from "./Current";
import Forecast from "./Forecast";

export default function Weather() {
  return (
    <div className="Weather">
      <Search />
      <Current />
      <Forecast />
    </div>
  );
}
