var React = require('react');
var LeaderBoardContainer = require('./containers/LeaderBoardContainer');
require('./stylesheets/main.scss');
var ReactDOM = require("react-dom");

ReactDOM.render(
  <LeaderBoardContainer />,
  document.getElementById("app")
);
