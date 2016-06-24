var React = require('react');

var RadioButton = function(props){
  return(
    <th className="radio">
      <input type="radio" name="sort" id={props.val} value={props.val} checked={props.option === props.val}
        onChange={props.onRadioChange}/>
      <label htmlFor={props.val}>{props.text}</label>
    </th>
  )
}

module.exports = RadioButton;
