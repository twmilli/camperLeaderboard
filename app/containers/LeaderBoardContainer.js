var React= require('react');
var getInfo = require('../utils/getInfo');
var LeaderBoard = require('../components/LeaderBoard');
var RadioButton = require('../components/RadioButton');

var LeaderBoardContainer = React.createClass({

  handleRadioChange: function(e){
      var newOption = e.currentTarget.value;
      var camper_list;
      if (newOption == "recent"){
        getInfo.getRecentData().then(function(camper_list){
          camper_list = camper_list.data;
          this.setState({
            option: newOption,
            campers: camper_list
          });
        }.bind(this));
      }
      else{
        getInfo.getAlltimeData().then(function(camper_list){
          camper_list = camper_list.data;
          this.setState({
            option: newOption,
            campers: camper_list
          });
        }.bind(this));
      }
    },

  getInitialState: function(){
    return{
        campers: [],
        option: "recent"
      }
    },

  componentDidMount: function(){
    getInfo.getRecentData().then(function(camper_list){
      camper_list = camper_list.data;
      this.setState({
        campers: camper_list
      });
    }.bind(this));
  },

  render: function(){
    return(
      <div>
      <table>
        <caption>FreeCodeCamp Leader Board</caption>
        <thead>
          <tr className="leader-board-heading">
            <th>#</th>
            <th>Username</th>
            <RadioButton onRadioChange = {this.handleRadioChange}
              option = {this.state.option}
              val="recent"
              text="Points in last 30 days"/>
              <RadioButton
                onRadioChange = {this.handleRadioChange}
                option = {this.state.option}
                val="alltime"
              text="All Time Points"/>
          </tr>
        </thead>
        <LeaderBoard campers={this.state.campers}/>
      </table>
      <br/><br/><br/><br/><br/>
      <span className="footer">Coded By Taylor Milliman</span>
      </div>
    )
  }
});

module.exports = LeaderBoardContainer;
