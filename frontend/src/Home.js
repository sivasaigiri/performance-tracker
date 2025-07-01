import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css'

export default function Home() {
  const [task, setTask] = useState('');
  const [hours, setHours] = useState('');
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetchLogs();
  }, []);

  const fetchLogs = async () => {
    const res = await axios.get('http://localhost:5000/api/logs');
    setLogs(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const today = new Date().toISOString(); // current date in ISO format
    const newLog = {
      date: today,
      task,
      hours: Number(hours),
    };
    const res = await axios.post('http://localhost:5000/api/logs', newLog);
    setLogs([res.data, ...logs]);
    setTask('');
    setHours('');
  };

  const totalHours = logs.reduce((sum, log) => sum + log.hours, 0);

  return (
    <div style={{ padding: '20px' }}>
        <div className="hour-card">
            <span
            role="img"
            aria-label="fire"
            className="fire-emoji"
            >
            🔥
            </span>
            <h1 className="hour-text">{totalHours}</h1>
        </div>

      

        <form className="task-form" onSubmit={handleSubmit}>
            <input
                className="task-input"
                placeholder="Task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                required
            />
            <input
                className="hours-input"
                type="number"
                placeholder="Hours"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
                required
            />
            <button className="submit-btn" type="submit">Add Task</button>
        </form>

      
    </div>
  );
}
