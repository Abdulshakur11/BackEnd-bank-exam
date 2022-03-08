const PG = require('../../lib/postgresOOP');

class Users extends PG {

  get_Requests(){
    return this.fetchAll(
      "SELECT * FROM requests"
    )
  }

  post_User(user_name, user_surname, phone_number) {
    return this.fetch(
      `INSERT INTO requests(user_name, user_surname, phone_number) VALUES($1, $2, $3)
      RETURNING *`,
      user_name, user_surname, phone_number
    )
  }

  delete_Users(user_id){
    return this.fetch(
      'DELETE FROM requests WHERE user_id = $1',
      user_id
    )
  }
}

module.exports = new Users()