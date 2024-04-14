'use client';

import { useState } from 'react';

const Dashboard = () => {
  console.log('Dashboard Page');
  const [name, setName] = useState('John');

  return (
    <div>
      <h1>Dashboard Page</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />

      <p>Hello, {name}</p>
    </div>
  );
};

export default Dashboard;
