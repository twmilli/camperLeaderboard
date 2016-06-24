var React = require('react');
var PropTypes = React.PropTypes;
var Camper = require('./Camper');

var LeaderBoard = function(props){
    var campers = props.campers.map(function(camper, key){
      return(
        <Camper key={key}
          num={key + 1}
          img={camper.img}
          name={camper.username}
          recent={camper.recent}
          alltime = {camper.alltime}/>
      );
    }, this);
  return(
      <tbody>
        {campers}
      </tbody>
  );
  }

  LeaderBoard.PropTypes = {
    campers: PropTypes.array.isRequired
  }
module.exports = LeaderBoard;
