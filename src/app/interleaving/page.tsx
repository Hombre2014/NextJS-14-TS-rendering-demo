import ClientComponentOne from '@/components/client-component-one';
import ServerComponentOne from '@/components/server-component-one';

const InterleavingPage = () => {
  return (
    <>
      <h1>InterleavingPage</h1>
      {/* <ServerComponentOne /> */}
      {/* <ClientComponentOne /> */}
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </>
  );
};

export default InterleavingPage;
