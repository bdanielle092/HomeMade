import React from 'react';
import ReactDOM from "react-dom";
import {BrowerRouter as Router} from "react-router-dom";
import homemade from "./components/homemade";


ReactDOM.render(
  <Router>
    <homemade />
  </Router>,
  document.getElementById('root')
);

