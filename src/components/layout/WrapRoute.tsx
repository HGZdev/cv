import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';

import { getConfig } from '../../../lib/config';
import { useTrackPageViewsInGA } from '../../../lib/GoogleAnalytics';
import { useScrollToTop } from '../../../lib/utils';
import BgContainer from '../../components/common/BgContainer';
import Hero from '../../components/layout/Hero';
import Menu from '../../components/layout/Menu';

const { VITE_BASE_URL } = getConfig();

const WrapRoute: React.FC = () => {
  useTrackPageViewsInGA();
  const scrollableRef = useRef<HTMLDivElement>(null);

  useScrollToTop(scrollableRef);
  const imgPath = `${VITE_BASE_URL}/images/bg.webp`;

  return (
    <BgContainer imagePath={imgPath} className='flex justify-center bg-[300%]'>
      <div className='max-w-[82rem] grid grid-cols-12 h-screen md:p-8'>
        <div className='col-span-2 md:col-span-1 md:my-8 z-10 shadow-lg'>
          <Menu />
        </div>
        <div className='col-span-4 bg-primary hidden md:block'>
          <Hero />
        </div>
        <div
          className='relative col-span-10 md:col-span-7 md:my-8 overflow-y-scroll scrollbar-hide'
          ref={scrollableRef}
        >
          <Outlet />
          {/* <div className="absolute top-0 w-full h-10 bg-gradient-to-t from-transparent to-red-400 pointer-events-none"></div>
          <div className="absolute bottom-0 w-full h-10 bg-gradient-to-t from-red-700 to-transparent pointer-events-none"></div> */}
        </div>
      </div>
    </BgContainer>
  );
};

export default WrapRoute;
