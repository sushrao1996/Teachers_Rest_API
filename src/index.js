const express = require("express");
const bodyparser = require("body-parser");
const TeacherRouter = require("./Routers/TeacherRouter");
const TeachersRouter = require("./Routers/TeachersRouter");
const app = express();
app.get("/", (req, res) => {
  res.send("Hello");
});
app.use(bodyparser.json());
app.use("/teacher", TeacherRouter);
app.use("/teachers", TeachersRouter);
const server = app.listen("8080", (req, res) => {
  console.log(`Server running on port ${server.address().port}.`);
});
