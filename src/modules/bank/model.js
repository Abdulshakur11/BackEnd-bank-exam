const PG = require('../../lib/postgresOOP');

class Bank extends PG {
  get_Banks() {
    return this.fetchAll(
      'SELECT * FROM bank ORDER BY bank_id ASC'
    )
  }

  post_Bank(bank_name, bank_creadit, moratge_duration, starting_paymant, bank_service, bank_img) {
    return this.fetchAll(
      'INSERT INTO bank(bank_name, bank_creadit, moratge_duration, starting_paymant, bank_service, bank_img) VALUES($1, $2, $3, $4, $5, $6)',
      bank_name, bank_creadit, moratge_duration, starting_paymant, bank_service, bank_img
    )
  }

    async update_Bank(bank_name, bank_creadit, moratge_duration, starting_paymant, bank_service, bank_img, bank_id){
    
    
    const [{ bank_name: bankName, bank_creadit: bankCredit, moratge_duration: moratgeDuration, starting_paymant: startingPaymant, bank_service: bankService, bank_img: bankImg }] = await this.fetchAll("SELECT * FROM bank WHERE bank_id = $1", bank_id);

    return this.fetch(
      `UPDATE bank 
              SET bank_name = $1,
              bank_creadit = $2,
              moratge_duration = $3,
              starting_paymant = $4,
              bank_service = $5,
              bank_img = $6
      WHERE bank_id = $7
      `,
    bank_name ? bank_name : bankName,
    bank_creadit ? bank_creadit : bankCredit,
    moratge_duration ? moratge_duration : moratgeDuration,
    starting_paymant ? starting_paymant : startingPaymant, 
    bank_service ? bank_service : bankService,
    bank_img ? bank_img : bankImg,
    bank_id
    )
  }

  delete_Bank(bank_id){
    return this.fetch(
      'DELETE FROM bank WHERE bank_id = $1',
      bank_id
    )
  }
} 

module.exports = new Bank()