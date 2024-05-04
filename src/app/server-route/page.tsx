import ImageSlider from '@/components/ImageSlider';
// import { clientSideFunction } from '@/utils/client-utils';
import { serverSideFunction } from '@/utils/server-utils';

const ServerRoute = () => {
  const result = serverSideFunction();
  // const clientResult = clientSideFunction();
  // console.log(clientResult);
  console.log('Server Route rendered');
  return (
    <div>
      <h1>Server Route Page</h1>
      <p>Result: {result}</p>
      <ImageSlider />
    </div>
  );
};

export default ServerRoute;
