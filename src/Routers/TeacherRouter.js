const express = require("express");
const Teachers = require("../models/Teachers");
const TeacherRouter = express.Router();

TeacherRouter.get("/:id", (req, res) => {
  const { id = "" } = req.params;
  const requiredTeacher = Teachers.find(Teacher => {
    if (parseInt(id, 10) === Teacher.ID) return true;
    else return false;
  });
  if (requiredTeacher) {
    res.status(200).json({ Teacher: requiredTeacher });
  } else {
    res.status(404).json({ message: "Not Found" });
  }
})
  .post("/", (req, res) => {
    if (req.body.ID) {
      Teachers.push(req.body);
      res.status(200).json({ message: "Teachers created successfully" });
    } else {
      res.status(400).send("Bad Request");
    }
  })
  .patch("/:id", (req, res) => {
    const { id } = req.params;
    let requiredTeacherIndex;
    const requiredTeacher = Teachers.find((Teacher, TeacherIndex) => {
      if (parseInt(id, 10) === Teacher.ID) {
        requiredTeacherIndex = TeacherIndex;
        return true;
      } else {
        return false;
      }
    });
    if (requiredTeacher) {
      const {
        FirstName = requiredTeacher.FirstName,
        LastName = requiredTeacher.LastName,
        Subject = requiredTeacher.Subject
      } = req.body;
      Teachers[requiredTeacherIndex] = {
        ID: requiredTeacher.ID,
        FirstName,
        LastName,
        Subject
      };
      res.status(200).send({ message: "Teacher Details Updated" });
    }
    res.status(400).send({ message: "Bad Request" });
  })
  .delete("/:id", (req, res) => {
    const { id } = req.params;
    let requiredTeacherIndex;
    const requiredTeacher = Teachers.find((Teacher, TeacherIndex) => {
      if (parseInt(id, 10) === Teacher.ID) {
        requiredTeacherIndex = TeacherIndex;
        return true;
      } else {
        return false;
      }
    });
    if (requiredTeacher) {
      Teachers.splice(requiredTeacherIndex, 1);
      res.status(200).json({ message: "Teacher Removed Successfully" });
    } else {
      res.status(400).send("Bad Request");
    }
  });

module.exports = TeacherRouter;
