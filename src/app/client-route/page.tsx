'use client';

import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import { serverSideFunction } from '@/utils/server-utils';
import { useTheme } from '@/components/theme-provider';
import { clientSideFunction } from '@/utils/client-utils';

const ClientRoute = () => {
  const theme = useTheme();

  const result = clientSideFunction();
  // const result = serverSideFunction();
  // console.log('Client Route rendered');
  // const settings = {
  //   dots: true,
  // };
  return (
    <div>
      <h1 style={{ color: theme.colors.primary }}>Client Route</h1>
      <p>{result}</p>

      {/* <Slider {...settings}>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
        <div>
          <img src="http://picsum.photos/400/200" />
        </div>
      </Slider> */}
    </div>
  );
};

export default ClientRoute;
