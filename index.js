const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const db = require("./queries");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/students", db.getStudents);
app.get("/students/:studentId", db.getStudentById)
app.get("/student", db.searchStudent);
app.get("/grades/:studentId", db.getGradesById);
app.post('/grade', db.createGrade)
app.post('/register', db.createStudent)

const port = 3000;
app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
