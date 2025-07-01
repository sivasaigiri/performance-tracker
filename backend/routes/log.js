const express = require('express');
const Log = require('../models/Log');
const router = express.Router();

router.post('/', async (req, res) => {
  const { date, task, hours } = req.body;
  if (!date || !task || !hours) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newLog = new Log({ date, task, hours });
    await newLog.save();
    res.status(201).json(newLog);
  } catch (error) {
    console.error("Error saving log:", error);
    res.status(500).json({ error: 'Failed to save log' });
  }
});

router.get('/', async (req, res) => {
  try {
    const logs = await Log.find().sort({ date: -1 });
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch logs' });
  }
});

module.exports = router;
``