import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

import Lights from "./component/lights";

//render your react application
ReactDOM.render(<Lights />, document.querySelector("#app"));
