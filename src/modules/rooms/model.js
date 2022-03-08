const PG = require('../../lib/postgresOOP');

class Rooms extends PG {
  get_Rooms(complex_id){
    if(complex_id) {
      return this.fetchAll(
        'SELECT * FROM number_of_rooms where complex_id = $1 ORDER BY number_of_room_id ASC',
         complex_id
      )
    } else {
      return this.fetchAll(
        "SELECT * FROM number_of_rooms"
      )
    }
  }

  post_Rooms(number_of_room, price_each_square, all_meter_of_square, address_of_complex, complex_id) {
    return this.fetch(
      'INSERT INTO number_of_rooms(number_of_room, price_each_square, all_meter_of_square, address_of_complex, complex_id) VALUES($1, $2, $3, $4, $5)',
      number_of_room, price_each_square, all_meter_of_square, address_of_complex, complex_id
    )
  }

  delete_Rooms(room_id) {
    return this.fetch(
      "DELETE FROM number_of_rooms WHERE number_of_room_id = $1",
      room_id
    )
  }

  get_CalculatorFunc(starting_paymant, moratge_duration, number_of_room_id) {
		return this.fetch(
			`SELECT 
       n.number_of_room_id,
       (n.price_each_square * n.all_meter_of_square) AS house_price,
       (n.price_each_square * n.all_meter_of_square) / 100 * $1 AS starting_paymant,
       ((n.price_each_square * n.all_meter_of_square) - ((n.price_each_square * n.all_meter_of_square) / 100 * $1)) / ($2 * 12) AS monthly_paymant
       FROM number_of_rooms n 
       WHERE n.number_of_room_id = $3 ORDER BY n.number_of_room_id asc;`,
       starting_paymant, moratge_duration, number_of_room_id
		);
	}
}

module.exports = new Rooms();