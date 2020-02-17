const express = require("express");
const Teachers = require("../models/Teachers");
const TeachersRouter = express.Router();

TeachersRouter.get("/", (req, res) => {
  res.status(200);
  res.json({ Teachers });
})
  .post("/", (req, res) => {
    for (var i of req.body) {
      Teachers.push(i);
    }
    res.status(200).json({ message: "Teacher details added successfully" });
  })
  .delete("/", (req, res) => {
    let ToBeRemoved = req.body;
    let c = 0;
    ToBeRemoved.forEach(t => {
      Teachers.forEach((Teacher, index) => {
        if (t.ID === Teacher.ID) {
          Teachers.splice(index, 1);
          c += 1;
        }
      });
    });
    if (c === ToBeRemoved.length) {
      res.status(200).json({ message: "Deleted successfully" });
    } else if (c === 0) {
      res.send(404).json({ message: "Not Found" });
    } else if (c < ToBeRemoved.length) {
      let result = ToBeRemoved.length - c;
      res.status(200).json({
        message: `Deleted ${c} teacher details successfully
        Not found ${result} detail.`
      });
    }
  });
module.exports = TeachersRouter;
