import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import styled from 'styled-components';

const mode = styled.div`
  backround: red;
  max-width: 1440px;
  heigth: 100%;
`


ReactDOM.render(<App />, document.getElementById("root"));
