const pool = require('./dbConnection.js');

const queryString ={
  selectAll: `SELECT "id", "username", "lastname", "role", "email", "password"
                FROM "User"
                ORDER BY "id"`,
  select: `SELECT "id", "username", "lastname", "role", "email", "password"
            FROM "User"
            WHERE "id" = $1`,
  insert: `INSERT INTO "User"("username", "lastname", "role", "email", "password")
            VALUES($1, $2, $3, $4, $5)
            RETURNING  "username", "lastname", "role", "email", "password"`,
  update: `UPDATE "User"
            SET "username" = $1, "lastname" = $2, "role" = $3, "email" = $4, "password" = $5
            WHERE "id" = $6
            RETURNING "id", "username", "lastname", "role", "email", "password"`,
  delete: `DELETE FROM "User"
            WHERE "User" = $1
            RETURNING "user", "username", "lastname", "role", "email", "password"`
}

const getAll = async () => {
  const query = await pool.query(queryString.selectAll);
  return query.rows;
}

const get = async (id_user) => {
  const query = await pool.query(
    queryString.select,
    [id_user]);
  if (query.rows.length < 1){
    return null
  }
  return query.rows[0];
}

const post = async (user) => {
  const query = await pool.query(
    queryString.insert,
    [user.username, user.lastname, user.role, user.email, user.password, ]);

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

const remove = async (id_user) => {
  const query = await pool.query(
    queryString.delete,
    [id_user]);
  if(query.rows.length < 1){
    return null;
  }
  return query.rows[0];
}

module.exports = { getAll, get, post, put, remove }
