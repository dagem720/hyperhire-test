// components/FeatureList.tsx

import React from 'react';

const FeatureList = () => {
  return (
    <div className='block p-5 lg:hidden'>
      <div className='grid my-3 gap-3 grid-cols-2'>
        <div className='flex items-center gap-x-3'>
          {/* <q-icon name="check" size="24px" className="bg-[#E8ECFF] p-1 rounded-md text-[#2C599B] font-extrabold" /> */}

          <span className='text-lg font-extrabold text-white'>한국어 능력</span>
        </div>
        <div className='flex items-center gap-x-3'>
          {/* <q-icon name="check" size="24px" className="bg-[#E8ECFF] p-1 rounded-md text-[#2C599B] font-extrabold" /> */}
          <span className='text-lg font-extrabold text-white'>
            업무 수행 능력
          </span>
        </div>
        <div className='flex items-center gap-x-3'>
          {/* <q-icon name="check" size="24px" className="bg-[#E8ECFF] p-1 rounded-md text-[#2C599B] font-extrabold" /> */}
          <span className='text-lg font-extrabold text-white'>겸업 여부</span>
        </div>
        <div className='flex items-center gap-x-3'>
          {/* <q-icon name="check" size="24px" className="bg-[#E8ECFF] p-1 rounded-md text-[#2C599B] font-extrabold" /> */}
          <span className='text-lg font-extrabold text-white'>평판 조회</span>
        </div>
      </div>
      <span className='text-lg underline underline-[#FBFF23] text-[#FBFF23] font-extrabold'>
        개발자가 필요하신가요?
      </span>
    </div>
  );
};

export default FeatureList;
