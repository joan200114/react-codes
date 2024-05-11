import React, { useState } from 'react';
import './App.css';

const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
  { username: 'user3', password: 'password3' },
];

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    const foundUser = users.find(user => user.username === username && user.password === password);
    if (foundUser) {
      window.alert('User and password found in the database');
    } else {
      window.alert('User and password not found');
    }
  };

  return (
    <div className="container">
      <h1>Username and Password Authentication</h1>
      <div className="input-group">
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="input-group">
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;
