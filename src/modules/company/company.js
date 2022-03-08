const model = require('./model');

module.exports = {
  GET_COMPANYS: async(req, res) => {
    try{
      res.send(await model.get_Company())
    } catch(err) {
      console.log(err);
      res.status(500).send({
        message: "Internal server error"
      })
    }
  },

  POST_COMPANY: async(req, res) => {
    try{
      const { companyName, companyImg } = req.body;
      res.send(await model.post_Company(companyName, companyImg));
    }catch(err) {
      console.log(err);
      res.status(500).send({
        message: "Internal server error"
      });
    }
  }
}