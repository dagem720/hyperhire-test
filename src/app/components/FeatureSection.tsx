import classnames from 'classnames';
import React from 'react';
import { Navigation, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import NextImage from '@/components/NextImage';

const FeatureSection = () => {
  const breakpoints = {
    320: {
      slidesPerView: 3,
      spaceBetween: -250,
    },
    480: {
      slidesPerView: 3,
      spaceBetween: -50,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: -100,
    },
  };

  const modules = [Navigation, Virtual];

  const slides = [
    {
      name: 'Dagmawi Gebre',
      role: '마케팅',
      experience: '2y+',
      skills: [
        '마케팅 콘텐츠 제작',
        '인스타그램 관리',
        '트위터 관리',
        '블로그 글 작성',
      ],
      id: 1,
    },
    {
      name: 'Abhishek Gupta',
      role: '마케팅',
      experience: '4y+',
      skills: [
        '마케팅 콘텐츠 제작',
        '인스타그램 관리',
        '트위터 관리',
        '블로그 글 작성',
      ],
      id: 2,
    },
    {
      name: 'Abhishek Gupta',
      role: '마케팅',
      experience: '2y+',
      skills: [
        '마케팅 콘텐츠 제작',
        '인스타그램 관리',
        '트위터 관리',
        '블로그 글 작성',
      ],
      id: 3,
    },
    {
      name: 'Samuel Oluwaseun',
      role: '마케팅',
      experience: '2y+',
      skills: [
        '마케팅 콘텐츠 제작',
        '인스타그램 관리',
        '트위터 관리',
        '블로그 글 작성',
      ],
      id: 4,
    },
    {
      name: 'Abebe Tadesse',
      role: '마케팅',
      experience: '2y+',
      skills: [
        '마케팅 콘텐츠 제작',
        '인스타그램 관리',
        '트위터 관리',
        '블로그 글 작성',
      ],
      id: 5,
    },
  ];
  return (
    <div className='w-full flex flex-col gap-x-10 lg:flex-row px-3 lg:px-0 mt-6  flex-1'>
      <div className='flex gap-x-4 w-full lg:w-[53%] flex-col gap-y-10'>
        <div className='flex flex-col gap-y-4 lg:gap-y-8'>
          <div className='grid grid-cols-1 lg:grid-cols-8 gap-x-5'>
            <div className='col-span-3 '>
              <span className='text-xs hidden lg:block text-[#FFE76B] text-end mt-2 font-extrabold'>
                FadeIn after title and subtitle shown (delay 300ms)
              </span>
            </div>
            <div className='col-span-5'>
              <button className='arrow_box first-animation bg-[#8BC4FF] lg:bg-white lg:text-[#40E2E8] text-white font-extrabold'>
                풀타임, 파트타임
              </button>
            </div>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-8 gap-x-5'>
            <div className='col-span-3 flex justify-end'>
              <span className='text-xs hidden lg:block text-[#FFE76B] text-end mt-2 font-extrabold'>
                FadeInUp(duration 500ms)
              </span>
            </div>
            <div className='col-span-5'>
              <h1 className='text-2xl md:text-4xl  font-bold fade-in-up leading-snug text-white'>
                최고의 실력을 가진 외국인 인재를 찾고 계신가요?
              </h1>
            </div>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-8 gap-x-5'>
            <div className='col-span-3 flex justify-end'>
              <span className='text-xs hidden lg:block text-[#FFE76B] text-end mt-2 font-extrabold'>
                FadeInUp(500ms)
              </span>
            </div>
            <div className='col-span-5'>
              <h1 className='text-base second-animation lg:text-2xl  leading-snug text-white'>
                법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.
              </h1>
            </div>
          </div>
          <div className='hidden lg:grid grid-cols-1 lg:grid-cols-8 gap-x-5'>
            <div className='col-span-3 flex justify-end'>
              <span className='text-xs hidden lg:block text-[#FFE76B] text-end mt-2 font-extrabold'>
                fade in 3 at once(500ms)
              </span>
            </div>
            <div className='col-span-5'>
              <div className='grid grid-cols-3 gap-x-5 first-animation'>
                <div className='text-white text-md'>
                  <span className='  font-bold second-animation border-t border-white pt-2'>
                    평균 월 120만원
                  </span>
                  <br />
                  임금을 해당 국가를 <br /> 기준으로 계산합니다.
                </div>
                <div className='text-white text-md '>
                  <span className=' font-bold second-animation border-t border-white pt-2'>
                    최대 3회 인력교체
                  </span>
                  <br />
                  막상 채용해보니 맞지
                  <br /> 않아도 걱정하지 마세요.
                </div>
                <div className='text-white text-md '>
                  <span className=' font-bold second-animation border-t border-white pt-2'>
                    평균 3일, 최대 10일
                  </span>
                  <br />
                  급하게 사람이 필요한 경우에도 <br /> 빠른 채용이 가능합니다.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full lg:w-[47%] pr-0 lg:pr-10 mt-5 lg:mt-0'>
        <div className='flex gap-x-3 justify-center lg:justify-end items-center w-full mb-3'>
          <button className='arrow_box arrow_box2 bg-white font-extrabold text-[#00C696]'>
            월 100만원
          </button>
          <span className='text-[10px] line-clamp-2 hidden  lg:block text-[#FFE76B]  mt-2 font-extrabold'>
            FadeIn after title and subtitle shown (delay 300ms)
          </span>
        </div>
        <div className='overflow-x-hidden top w-full flex justify-center'>
          <Swiper
            modules={modules}
            navigation={false}
            loop
            breakpoints={breakpoints}
            className='mySwiper'
          >
            {slides.map((slideContent, index) => (
              <SwiperSlide
                key={index}
                virtualIndex={index}
                className={classnames(
                  'overflow-hidden',
                  '!flex',
                  '!justify-center',
                  `swiper-slide-${index}`
                )}
              >
                <div className=' w-[260px] rounded-[12px] flex flex-col items-center gap-y-3 px-4 py-5 bg-white swiper-sli'>
                  <div className='relative rounded-full'>
                    <NextImage
                      src='/svg/Ellipse 12.svg'
                      width='100'
                      height='100'
                      alt=''
                    />

                    <NextImage
                      src='/svg/image17.svg'
                      width='20'
                      height='20'
                      alt=''
                      className='absolute bottom-0 right-0'
                    />
                  </div>
                  <span className='text-[#24252F] text-center font-extrabold text-xl'>
                    {slideContent.name}
                  </span>
                  <div className='flex items-center gap-x-2 text-[#4A77FF] text-base'>
                    마케팅 ·
                    <span className='font-bold'>{slideContent.role}</span>
                  </div>
                  <div className='flex flex-wrap justify-center gap-2'>
                    {slideContent.skills.map((skill, index) => (
                      <div key={index} className='talent-skill'>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
