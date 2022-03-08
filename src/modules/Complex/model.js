const PG = require('../../lib/postgresOOP');

class Complex extends PG {
  get_Complexes(company_id){
    if(company_id) {
      return this.fetchAll(
        'select * from complex where company_id = $1',
        company_id
      );
    }else{
      return this.fetchAll(
        'select * from complex'
      );
    }
  }
  
  post_Compelx(complex_name, company_id) {
    return this.fetch(
      'INSERT INTO complex(complex_name, company_id) VALUES($1, $2) RETURNING *',
      complex_name, company_id
    )
  }
}

module.exports = new Complex()