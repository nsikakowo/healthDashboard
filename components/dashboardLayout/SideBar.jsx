import Image from 'next/image';
import React from 'react';
import { FaChartPie, FaUserMd, FaUserTie } from 'react-icons/fa';
import { GiStethoscope } from 'react-icons/gi';
import { TbDisabled } from 'react-icons/tb';
import { BsCreditCardFill } from 'react-icons/bs';
import { MdHelp } from 'react-icons/md';
import { useRouter } from 'next/router';

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
    title: 'Health Workers',
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

const MenuItem = ({ title, link, icon, textColor }) => {
  const router = useRouter();
  return (
    <li
      className={` ${
        router.pathname == link ? 'text-primary' : 'text-secondary'
      }
    flex items-center mb-[28px] pl-6 cursor-pointer text-[14px] font-bold  last:pt-4 last:border-t-[1px] border-[#DBDDE070]`}
    >
      <p
        className={`${
          router.pathname == link ? 'text-primaty' : 'text-lightGray'
        } text-[20px]`}
      >
        {' '}
        {icon}
      </p>
      <p className="ml-4">{title} </p>
    </li>
  );
};

const SideBar = () => {
  return (
    <section className=" sm:hidden min-w-[256px] h-[100vh] bg-white shadow-[4px_0px_16px_rgba(16,_30,_115,_0.08)]">
      <div className="mb-[87px] pt-[25px] pl-6">
        <Image src={'/images/logo.svg'} alt="logo" width={100} height={100} />
      </div>
      <nav>
        <ul>
          {menulist.map((menu) => (
            <MenuItem
              key={menu.id}
              title={menu.title}
              icon={menu.icon}
              link={menu.link}
            />
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default SideBar;
