import { useState } from 'react';
import { FaChartPie, FaUserMd, FaUserTie } from 'react-icons/fa';
import { GiStethoscope } from 'react-icons/gi';
import { TbDisabled } from 'react-icons/tb';
import { BsCreditCardFill } from 'react-icons/bs';
import { MdHelp } from 'react-icons/md';
import { FiMoreHorizontal } from 'react-icons/fi';
import { useRouter } from 'next/router';
import { Drawer } from '@mantine/core';

const menulist = [
  {
    id: 1,
    title: 'Dashboard',
    icon: <FaChartPie />,
    link: '/',
  },
  {
    id: 2,
    title: 'Appointments',
    icon: <GiStethoscope />,
    link: '/appointments',
  },
  {
    id: 3,
    title: 'Workers',
    icon: <FaUserMd />,
    link: '#',
  },
  {
    id: 4,
    title: 'Departments',
    icon: <FaUserTie />,
    link: '/departments',
  },
  {
    id: 5,
    title: 'Patients',
    icon: <TbDisabled />,
    link: '/patients',
  },
  {
    id: 6,
    title: 'Payments',
    icon: <BsCreditCardFill />,
    link: '/payments',
  },
  {
    id: 7,
    title: 'Help',
    icon: <MdHelp />,
    link: '/help',
  },
];
const smalmenulist = [
  {
    id: 1,
    title: 'Dashboard',
    icon: <FaChartPie />,
    link: '/',
  },
  {
    id: 2,
    title: 'Appointments',
    icon: <GiStethoscope />,
    link: '/appointments',
  },
  {
    id: 3,
    title: 'Workers',
    icon: <FaUserMd />,
    link: '#',
  },
  {
    id: 4,
    title: 'Departments',
    icon: <FaUserTie />,
    link: '/departments',
  },
];

const MobileNav = () => {
  const router = useRouter();
  const [opened, setOpened] = useState(false);
  return (
    <main className="h-[88px] hidden sm:block p-[24px] bg-primary fixed bottom-0 left-0 w-full">
      <ul className="h-full flex text-[white] items-center justify-between">
        {smalmenulist.map((menu) => (
          <li
            key={menu.id}
            className={` cursor-pointer flex flex-col justify-center items-center
          ${
            router.pathname == menu.link
              ? 'text-[#3dffef] text-[30px] font-bold'
              : 'text-[white] text-[30px] font-normal'
          }
          `}
          >
            {menu.icon}
            <span className="text-[12px] m-0 mt-2 p-0">{menu.title}</span>
          </li>
        ))}
        <li
          onClick={() => setOpened(true)}
          className={` cursor-pointer flex flex-col justify-center items-center text-[30px]
          `}
        >
          <FiMoreHorizontal />
          <span className="text-[12px] m-0 mt-2 p-0">More</span>
        </li>
      </ul>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        padding="xl"
        size="xl"
        position="bottom"
      >
        <div className="mt-[40px] ml-3">
          <ul
            className="h-full grid
    grid-cols-[1fr_1fr_1fr]  text-[white] items-center justify-center"
          >
            {menulist.map((menu) => (
              <li
                key={menu.id}
                className={` cursor-pointer flex flex-col mb-[50px] mx-4 justify-center items-center
          ${
            router.pathname == menu.link
              ? 'text-[#3dffef] text-[50px] font-bold'
              : 'text-[white] text-[50px] font-normal'
          }
          `}
              >
                {menu.icon}
                <span className="text-[16px] m-0 mt-2 p-0">{menu.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </Drawer>
    </main>
  );
};

export default MobileNav;
