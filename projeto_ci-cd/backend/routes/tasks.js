const express = require('express');
const router = express.Router();

let tasks = [];

router.get('/', (req, res) => {
  res.json(tasks);
});

router.post('/', (req, res) => {
  const { title, description } = req.body;
  const newTask = { title, description };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

module.exports = router;
