var React = require('react');
var PropTypes = React.PropTypes;

var Camper = function(props){
  return(

  <tr className="camper">

    <td> {props.num}</td>
    <td className="name">
      <a href={"https://www.freecodecamp.com/" + props.name} target="_blank">
        <img src={props.img}/>
        <span>{props.name}</span>
      </a>
    </td>

    <td>{props.recent}</td>
    <td>{props.alltime}</td>

  </tr>

)
};

Camper.PropTypes={
  num: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  alltime: PropTypes.number.isRequired,
  recent: PropTypes.number.isRequired
}
module.exports = Camper;
