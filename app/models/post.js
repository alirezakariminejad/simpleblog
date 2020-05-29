const db = require("@database/mysql");

exports.findAll = async () => {
  const [rows, fields] = await db.query(`
      SELECT p.id,p.title,p.views,p.create_at,u.full_name 
      FROM posts p 
      JOIN 
      users u 
      on p.author_id=u.id
      ORDER BY create_at DESC
  `);
  return rows;
};

exports.create = async (postData) => {
  const [result] = await db.query(`INSERT INTO posts SET ?`, [postData]);
  console.log(result);
  return result;
};
