import React, { useState } from 'react';
import './App.css';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [course, setCourse] = useState('');
  const [year, setYear] = useState('');

  const handleClick = () => {
    const dataWindow = window.open('', '_blank', 'width=400,height=400');
    const dataContent = `
      <html>
        <head>
          <title>Entered Data</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              padding: 20px;
            }
            h2 {
              margin-bottom: 10px;
            }
            p {
              margin: 5px 0;
            }
          </style>
        </head>
        <body>
          <h2>Entered Data:</h2>
          <p>First Name: ${firstName}</p>
          <p>Last Name: ${lastName}</p>
          <p>Age: ${age}</p>
          <p>Course: ${course}</p>
          <p>Year: ${year}</p>
        </body>
      </html>
    `;
    dataWindow.document.write(dataContent);
  };

  return (
    <div className="container">
      <h1>Pateros Technological College</h1>
      <p>Introduction to Application Development</p>
      <div className="form-group">
        <label className="label">First Name:</label>
        <input
          className="input"
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="label">Last Name:</label>
        <input
          className="input"
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="label">Age:</label>
        <input
          className="input"
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="label">Course:</label>
        <input
          className="input"
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="label">Year:</label>
        <input
          className="input"
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <button className="button" onClick={handleClick}>
        Display Data
      </button>
    </div>
  );
}

export default App;

