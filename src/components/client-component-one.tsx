'use client';

import { useState } from 'react';
import ClientComponentTwo from './client-component-two';
import ServerComponentOne from './server-component-one';

const ClientComponentOne = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState('John');

  return (
    <>
      <h1>Client Component One</h1>
      {/* <ClientComponentTwo /> */}
      {/* Below line will cause an error because a server component will be converted to a client component once imported */}
      {/* <ServerComponentOne /> */}
      {/* The problem could be solved by passing the Server component as a child to the Client component Client Component One where it is invoked, see interleaving/page.tsx */}

      {children}
    </>
  );
};

export default ClientComponentOne;
