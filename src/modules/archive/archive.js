const model = require('./mode');

module.exports = {
  GET_ARCHIVED_REQ: async(req, res) => {
    try{
      res.send(await model.get_ArchivedReq());
    }catch(err) {
      console.log(err);
      res.status(500).send({
        message: "Internal server error"
      })
    }
  }
}