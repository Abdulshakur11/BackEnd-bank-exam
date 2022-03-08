const PORT = process.env.PORT || 9000;
const SECRET_KEY = "MAHFIY_KALIT"

const connection = {
  connectionString: 'postgres://postgres:0000@localhost:5432/exam',
  connectionElephant: 'postgres://axkhxzsw:6Nn-GD1vAIYjTO92adlFfifqCt6HRlpQ@arjuna.db.elephantsql.com/axkhxzsw'
}

module.exports = {
  PORT,
  connection,
  SECRET_KEY
}