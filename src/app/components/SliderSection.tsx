// components/SliderSection.tsx

import React from 'react';
import { BiCube } from 'react-icons/bi';
import { BiPhoneCall } from 'react-icons/bi';
import { CiImageOn } from 'react-icons/ci';
import { MdOutlineAccountBox } from 'react-icons/md';
import { MdOutlineStars } from 'react-icons/md';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const data = [
  {
    icon: <MdOutlineAccountBox className='text-white w-10' size={24} />,
    label: '해외 마케팅',
  },
  {
    icon: <CiImageOn className='text-white w-10' size={24} />,
    label: '퍼블리셔',
  },
  {
    icon: <BiCube className='text-white w-10' size={24} />,
    label: '캐드원(제도사)',
  },
  {
    icon: <MdOutlineStars className='text-white w-10' size={24} />,
    label: '해외 세일즈',
  },
  {
    icon: <BiPhoneCall className='text-white w-10' size={24} />,
    label: '해외 CS',
  },
];

const SliderSection = () => {
  return (
    <div className='w-full hidden lg:flex px-0 mt-3 flex-1 overflow-hidden'>
      <div className='flex w-full flex-col gap-y-10'>
        <div className='flex items-start gap-x-3'>
          <span className='text-xs text-[#FFE76B] w-[15%] text-end mt-2 font-extrabold'>
            fadeIn(500ms)
            <br />
            Slides to the left by one every 5 seconds
          </span>
          <div className='flex-1 mr-10 gap-4 overflow-x-hidden'>
            <Swiper
              autoplay={{
                delay: 500,
              }}
              loop
              slidesPerView={4.5}
              spaceBetween={10}
              navigation={false}
              className=''
            >
              {data.map((_, index) => (
                <SwiperSlide
                  key={index}
                  virtualIndex={index}
                  className='overflow-hidden'
                >
                  <div className='bg-[#FFFFFF33] flex gap-x-4 items-center p-4 rounded-xl'>
                    <div className='bg-[#FFFFFF66] w-10 h-10 grid place-items-center rounded-lg'>
                      {/* <q-icon name="view_in_ar" size="24px" class="text-white w-10" /> */}
                      {_.icon}
                    </div>
                    <span className='text-white font-extrabold text-lg'>
                      {_.label}
                    </span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderSection;
