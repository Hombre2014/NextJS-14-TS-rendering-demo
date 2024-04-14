import ImageSlider from '@/components/ImageSlider';
import { serverSideFunction } from '@/utils/server-utils';

const ServerRoute = () => {
  const result = serverSideFunction();
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
