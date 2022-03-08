const PG = require('../../lib/postgresOOP');

class Archive extends PG {
  get_ArchivedReq() {
    return this.fetchAll(
      'SELECT * FROM archivedUsers'
    )
  }
}

module.exports = new Archive()