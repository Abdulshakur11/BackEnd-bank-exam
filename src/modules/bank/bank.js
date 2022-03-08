const model = require("./model");

module.exports = {
	GET_BANKS: async (req, res) => {
		try {
			res.json(await model.get_Banks());
		} catch (err) {
			res.status(500).send({
				message: "Internal server error",
			});
		}
	},

	POST_BANK: async (req, res) => {
		try {
			const {bank_name,	bank_creadit,	moratge_duration, starting_paymant,	bank_service, bank_img} = req.body;
      await model.post_Bank(bank_name,bank_creadit,moratge_duration, starting_paymant, bank_service, bank_img )
			res.json("Bank qo'shildi");
		} catch (err) {
			console.log(err);
			res.status(500).send({
				message: "Interval server error",
			});
		}
	},

  UPDATE_BANK: async(req, res) => {
    try{
      const { bank_name, bank_creadit, moratge_duration, starting_paymant, bank_service, bank_img, bank_id } = req.body;
      await model.update_Bank(bank_name, bank_creadit, moratge_duration, starting_paymant, bank_service, bank_img, bank_id)
      res.json("Updated")
    }catch(err) {
      console.log(err);
      res.status(500).send({
        message: "Internal server error"
      })
    }
  },

	DELETE_BANK: async (req, res) => {
		try {
      const { bank_id } = req.body;
      await model.delete_Bank(bank_id);
      res.json("Bank is Deleted")
		} catch (err) {
			console.log(err);
			res.status(500).send({
				message: "Internal server error",
			});
		}
	},
};
