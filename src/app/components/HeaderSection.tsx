// components/HeroSection.tsx
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { IoChevronDown } from 'react-icons/io5';

import NextImage from '@/components/NextImage';

const HeaderSection = () => {
  return (
    <div className='w-full flex justify-start lg:justify-around px-6 sm:px-10 lg:px-20 items-center py-6'>
      <NextImage src='/svg/logo copy.svg' width={80} height={80} alt='' />
      <div className='gap-x-5 hidden lg:!flex items-center text-white'>
        <Menu>
          <MenuButton className='flex gap-x-1 items-center'>
            채용 <IoChevronDown />
          </MenuButton>
          <MenuItems anchor='bottom' className='bg-white p-4 rounded-lg'>
            <MenuItem>
              <a className='block cursor-pointer text-[#344054] p-1 data-[focus]:bg-blue-100'>
                해외 개발자 원격 채용
              </a>
            </MenuItem>
            <MenuItem>
              <a className='block cursor-pointer text-[#344054] p-1 data-[focus]:bg-blue-100'>
                외국인 원격 채용 (비개발 직군)
              </a>
            </MenuItem>
            <MenuItem>
              <a className='block cursor-pointer text-[#344054] p-1 data-[focus]:bg-blue-100'>
                한국어 가능 외국인 채용
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
        <span className='font-extrabold'>해외 개발자 활용 서비스</span>
      </div>
      <button className='text-[#4A77FF] bg-white text-sm px-3 py-1 hidden lg:!block font-extrabold rounded-lg'>
        문의하기
      </button>
    </div>
  );
};

export default HeaderSection;
