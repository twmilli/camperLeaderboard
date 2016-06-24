var axios = require('axios');


var helpers = {
  getAlltimeData: function(){
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
  },

  getRecentData: function(){
    return axios.get('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
  }
}

module.exports = helpers;
