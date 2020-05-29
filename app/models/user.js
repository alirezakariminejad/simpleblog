const db = require("@database/mysql");

exports.findAll = async (columns = []) => {
  const sqlColumns = columns.length > 0 ? columns.join(", ") : "*";
  const [rows] = await db.query(`SELECT ${sqlColumns} FROM users`);
  return rows;
};
