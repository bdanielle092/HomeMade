import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import Homemade from "./components/Homemade";


ReactDOM.render(
  <Router>
    <Homemade />
  </Router>,
  document.getElementById('root')
);



