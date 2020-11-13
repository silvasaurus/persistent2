const Pool = require("pg").Pool;
const pool = new Pool({
  user: "bigbootyjudy",
  host: "localhost",
  database: "persistance",
  password: "",
  port: 5432,
});

const getUsers = (request, response) => {
  pool.query("SELECT * FROM students", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getUsers,
  // getUserById,
  // createUser,
  // updateUser,
  // deleteUser,
};
