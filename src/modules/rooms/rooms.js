const model = require('./model');

module.exports = {
  GET_NUMBER_OF_ROOMS: async(req, res) => {
    try{
      const { complex_id } = req.query
      if(complex_id) {
        res.send(await model.get_Rooms(complex_id));
      } else {
        res.send(await model.get_Rooms())
      }

    }catch(err) {
      res.status(500).send({
        message: 'Internal server error'
      })
    }
  },

  POST_NUMBER_OF_ROOMS: async(req, res) => {
    try{
      const {number_of_room, price_each_square, all_meter_of_square, address_of_complex, complex_id} = req.body;
      await model.post_Rooms(number_of_room, price_each_square, all_meter_of_square, address_of_complex, complex_id)
      res.json("Room is added")
    }catch(err) {
      console.log(err);
      res.status(500).send({
        message: "Inernal servaer error"
      })
    }
  },


  DELETE_ROOMS: async(req, res) => {
    try{
      const { room_id } = req.body;
      await model.delete_Rooms(room_id);
      res.json("Deleted");
    }catch(err) {
      console.log(err);
      res.status(500).send({
        message: "Internal server error"
      })
    }
  },

  GET_CALC_FUNCTION: async(req, res) => {
    try{
      const { starting_paymant, moratge_duration, number_of_room_id } = req.query
      res.send(await model.get_CalculatorFunc(starting_paymant, moratge_duration, number_of_room_id))
    }catch(err) {
      res.status(500).send({
        message: 'Internal server error'
      })
    }
  }
}