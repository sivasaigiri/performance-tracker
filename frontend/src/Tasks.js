import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Tasks() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/logs')
      .then(res => setLogs(res.data));
  }, []);

  const groupedLogs = logs.reduce((acc, log) => {
    const date = new Date(log.date).toLocaleDateString();
    if (!acc[date]) acc[date] = [];
    acc[date].push(log);
    return acc;
  }, {});

  return (
    <div style={{ padding: '20px' }}>
      <h1>All Tasks</h1>
      {Object.entries(groupedLogs).map(([date, dayLogs]) => (
        <div key={date} style={{ marginBottom: '20px' }}>
          <h3>{date} - Total: {dayLogs.reduce((sum, l) => sum + l.hours, 0)} hrs</h3>
          <ul>
            {dayLogs.map(log => (
              <li key={log._id}>{log.task} – {log.hours} hrs</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
