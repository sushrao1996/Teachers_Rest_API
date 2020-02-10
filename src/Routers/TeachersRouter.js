const express = require("express");
const Teachers = require("../models/Teachers");
const TeachersRouter = express.Router();

TeachersRouter.get("/", (req, res) => {
  res.status(200);
  res.json({ Teachers });
});

module.exports = TeachersRouter;
