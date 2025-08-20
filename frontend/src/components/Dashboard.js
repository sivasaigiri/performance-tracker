import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';

export default function Dashboard() {
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
    const today = new Date().toISOString();
    const newLog = { date: today, task, hours: Number(hours) };
    const res = await axios.post('http://localhost:5000/api/logs', newLog);
    setLogs([res.data, ...logs]);
    setTask('');
    setHours('');
  };

  const totalHours = logs.reduce((sum, log) => sum + log.hours, 0);

  return (
    <div className="dashboard-container">
      {/* Total Hours Card */}
      <div className="hour-card">
        <span role="img" aria-label="fire" className="fire-emoji">🔥</span>
        <h1 className="hour-text">{totalHours}</h1>
        <p className="hour-label">Total Hours Tracked</p>
      </div>

      {/* Task Form */}
      <form className="task-form" onSubmit={handleSubmit}>
        <input
          className="task-input"
          placeholder="Enter task"
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
        <button className="submit-btn" type="submit">➕ Add Task</button>
      </form>

      {/* Logs List */}
      <div className="logs-section">
        <h2 className="logs-title">Your Logs</h2>
        {logs.length === 0 ? (
          <p className="empty-msg">No logs yet. Start adding tasks!</p>
        ) : (
          <ul className="logs-list">
            {logs.map((log, index) => (
              <li key={index} className="log-item">
                <span className="log-task">{log.task}</span>
                <span className="log-hours">{log.hours} hrs</span>
                <span className="log-date">{new Date(log.date).toLocaleDateString()}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
