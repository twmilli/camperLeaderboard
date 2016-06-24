var React = require('react');
var PropTypes = React.PropTypes;
var RadioButton = function(props){
  return(
    <th className="radio">
      <input type="radio" name="sort" id={props.val} value={props.val} checked={props.option === props.val}
        onChange={props.onRadioChange}/>
      <label htmlFor={props.val}>{props.text}</label>
    </th>
  )
}

RadioButton.PropTypes = {
  val: PropTypes.string.isRequired,
  option: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onRadioChange: PropTypes.func.isRequired
}

module.exports = RadioButton;
