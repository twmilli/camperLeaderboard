var React = require('react');
var MainContainer = require('./containers/MainContainer');
require('./stylesheets/main.scss');
var ReactDOM = require("react-dom");

ReactDOM.render(
  <MainContainer />,
  document.getElementById("app")
);
