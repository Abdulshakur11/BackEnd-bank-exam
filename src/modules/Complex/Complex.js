const model = require('./model');

module.exports = {
  GET_COMPLEX: async(req, res) => {
    try{    
      const { company_id } = req.query;
      if(company_id) {
        res.send(await model.get_Complexes(company_id))
      } else {  
        res.send(await model.get_Complexes())
      }
    } catch(err) {
      res.status(500).send({
        message: "Internal server error",
        status: 500
      })
    }
  },

  POST_COMPLEX: async(req, res) => {
    try{
      const { complexName, companyId } = req.body;
      res.send(await model.post_Compelx(complexName, companyId));
    }catch(err) {
      console.log(err);
      res.status(500).send({
        message: "Internal server error"
      })
    }
  }
}