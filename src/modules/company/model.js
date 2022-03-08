const PG = require('../../lib/postgresOOP');

class Company extends PG {
  get_Company(){
    return this.fetchAll(
      'SELECT * FROM company ORDER BY company_id ASC'
    );
  }

  post_Company(company_name, company_img) {
    return this.fetch(
      'INSERT INTO company(company_name, company_img) VALUES($1, $2) RETURNING *',
      company_name, company_img
    )
  }
}

module.exports = new Company();