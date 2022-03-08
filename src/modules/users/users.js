const model = require('./model');
const moment = require('moment');

module.exports = {

  GET_REQUESTS: async(req, res) => {
    try{
      const requests = await model.get_Requests();
      res.send(requests.filter(e => e.request_sent_time = moment(e.request_sent_time).format('MMMM Do YYYY, h:mm:ss a')));
    } catch(err) {
      console.log(err);
      res.send({
        message: "Internal server error"
      });
    }
  },

  POST_REQUESTS: async(req, res) => {
    try{
      const { user_name, user_surname, phone_number} = req.body;
      await model.post_User(user_name, user_surname, phone_number)
      res.json('We`ll get back to you soon');
    }catch(err) {
      console.log(err);
      res.status(500).send({
        message: "Internal server error"
      })
    }
  },

  DELETE_REQUESTS: async(req, res) => {
    try{
      const { user_id } = req.body;
      await model.delete_Users(user_id)
      res.json('Deleted')
    }catch(err) {
      console.log(err);
      res.status(500).send({
        message: "Internal server error"
      })
    }
  }
}
