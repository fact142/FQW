const pool = require('./dbConnection.js');

const queryString ={
  findByEmail: `SELECT "id", "username", "lastname", "role", "email", "password"
            FROM "User"
            WHERE "email" = $1`,
  insert: `INSERT INTO "User"("username", "lastname", "role", "email", "password")
            VALUES($1, $2, $3, $4, $5)
            RETURNING "id", "username", "lastname", "role", "email", "password"`,
  update: `UPDATE "User"
            SET "username" = $1, "lastname" = $2, "role" = $3, "email" = $4, "password" = $5
            WHERE "id" = $6
            RETURNING "id", "username", "lastname", "role", "email", "password"`,
  delete: `DELETE FROM "User"
            WHERE "id" = $1
            RETURNING "id", "username", "lastname", "role", "email", "password"`
}

const findByEmail = async (email) => {
  const query = await pool.query(
    queryString.findByEmail,
    [email]);
  if (query.rows.length < 1){
    return null
  }
  return query.rows[0];
}

const post = async (user) => {
  const query = await pool.query(
    queryString.insert,
    [user.name, user.lastname, user.role, user.email, user.password, ]);

  return query.rows;
}

const put = async (id_user, user) => {
  const query = await pool.query(
    queryString.update,
    [user.user_name, id_user]);
  if(query.rows.length < 1){
    return null;
  }
  return query.rows[0];
}


module.exports = { findByEmail }
