const uuidv4 = require('uuid/v4');

function createUser(form, pool){
  return pool.query(
    "INSERT INTO users (id, username, password) VALUES ($1::uuid, $2::text, $3::text) RETURNING id",
  [uuidv4(), form.username, form.password]
  );
}

function getUser(id, pool){
  return pool.query(
    "SELECT * FROM users WHERE id = $1::uuid",
    [id]
  );
}

module.exports = {
  createUser : createUser,
  getUser : getUser
};
