'use client';

import { useState } from 'react';

const ClientComponentTwo = () => {
  const [name, setName] = useState('John Two');

  return <h1>Client Component Two</h1>;
};

export default ClientComponentTwo;
