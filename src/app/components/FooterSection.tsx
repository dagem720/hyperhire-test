import { FaArrowRight } from 'react-icons/fa6';
import { IoCodeSlashOutline } from 'react-icons/io5';
import { IoSettingsOutline } from 'react-icons/io5';
import { LuUser } from 'react-icons/lu';

import NextImage from '@/components/NextImage';

const FooterSection = () => {
  return (
    <div className='px-6 sm:px-20 lg:px-60 py-6 lg:py-20 mb-4'>
      <NextImage
        src='/svg/footerLogo.svg'
        alt=''
        width='100'
        height='100'
        className='w-24'
      />

      <div className='flex flex-col lg:flex-row gap-x-3 justify-between mt-6'>
        <div className='flex flex-col gap-y-4'>
          <span className='font-bold text-sm'>
            우리는 국가의 장벽을 넘어 최고의 인재를 매 <br /> 칭해드립니다.
          </span>
          <span className='text-xs'>010-0000-0000</span>
          <span className='text-xs'>aaaaa@naver.com</span>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 mt-6 lg:mt-0 gap-x-20 gap-y-5'>
          <div className='flex flex-col gap-y-3'>
            <IoCodeSlashOutline
              size={25}
              className=' text-[#7388A9] bg-[#EFF1F6] p-1 rounded'
            />
            <span className='font-bold text-[#343741] text-sm'>
              해외 개발자 원격 채용
            </span>
            <div className='flex text-[#5E626F] items-center gap-x-2'>
              바로가기
              <FaArrowRight
                size={19}
                className=' text-[#7388A9] bg-[#EFF1F6] p-1 rounded'
              />
            </div>
          </div>
          <div className='flex flex-col gap-y-3'>
            <LuUser
              size={25}
              className=' text-[#7388A9] bg-[#EFF1F6] p-1 rounded'
            />
            <span className='font-bold text-[#343741] text-sm'>
              해외 개발자 원격 채용
            </span>
            <div className='flex text-[#5E626F] items-center gap-x-2'>
              바로가기
              <FaArrowRight
                size={19}
                className=' text-[#7388A9] bg-[#EFF1F6] p-1 rounded'
              />
            </div>
          </div>
          <div className='flex flex-col gap-y-3'>
            <span className='text-[#7388A9] bg-[#EFF1F6] p-1 rounded w-fit text-sm'>
              KOR
            </span>
            <span className='font-bold text-[#343741] text-sm'>
              해외 개발자 원격 채용
            </span>
            <div className='flex text-[#5E626F] items-center gap-x-2'>
              바로가기
              <FaArrowRight
                size={19}
                className=' text-[#7388A9] bg-[#EFF1F6] p-1 rounded'
              />
            </div>
          </div>
          <div className='flex flex-col gap-y-3'>
            <IoSettingsOutline
              size={25}
              className=' text-[#7388A9] bg-[#EFF1F6] p-1 rounded'
            />
            <span className='font-bold text-[#343741] text-sm'>
              해외 개발자 원격 채용
            </span>
            <div className='flex text-[#5E626F] items-center gap-x-2'>
              바로가기
              <FaArrowRight
                size={19}
                className=' text-[#7388A9] bg-[#EFF1F6] p-1 rounded'
              />
            </div>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-10 mt-10'>
        <div className='flex flex-col gap-y-2'>
          <span className='font-bold text-sm'>상호명</span>
          <span className='text-xs'>하이퍼하이어</span>
          <span className='text-xs'>Hyperhire India Private Limited</span>
        </div>

        <div className='flex flex-col gap-y-2'>
          <span className='font-bold text-sm'>대표 CEO</span>
          <span className=' text-xs'>김주현</span>
          <span className=' text-xs'>Juhyun Kim</span>
        </div>
        <div className='flex flex-col gap-y-2'>
          <span className='font-bold text-sm'>사업자등록번호 CIN</span>
          <span className='text-xs'>427-86-01187</span>
          <span className='text-xs'>U74110DL2016PTC290812 </span>
        </div>
        <div className='flex flex-col gap-y-2'>
          <span className='font-bold text-sm'>주소 ADDRESS</span>
          <span className=' text-xs'>
            서울특별시 강남대로 479, 지하 1층 238호{' '}
          </span>
          <span className=' text-xs'>
            D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi,{' '}
            <br />
            110053 India{' '}
          </span>
        </div>
      </div>
      <div className='mt-1'>
        <span className='font-bold text-xs'>ⓒ 2023 Hyperhire</span>
      </div>
    </div>
  );
};

export default FooterSection;
