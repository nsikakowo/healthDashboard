import { useState } from 'react';
import Image from 'next/image';
import { IoNotifications } from 'react-icons/io5';
import { FiSearch } from 'react-icons/fi';
import { Drawer } from '@mantine/core';

const Header = () => {
  const [opened, setOpened] = useState(false);

  return (
    <main className="flex  justify-between items-center w-full">
      <div className="rounded-full w-[350px] sm:w-[60%] px-3 py-[2px] text-[13px] flex items-center bg-[white]">
        <p className="text-[#cacccf]">
          <FiSearch size={20} />
        </p>
        <input
          type="search"
          name=""
          id=""
          className="bg-[white] w-full p-[10px]  ml-3 text-[#A0A4A8] outline-none"
          placeholder=" Search "
        />
      </div>
      <div className=" flex items-center ">
        <p className="relative cursor-pointer" onClick={() => setOpened(true)}>
          <IoNotifications
            size={28}
            className="rotate-[30deg] text-lightGray "
          />
          <span className="bg-[red] rounded-full text-[10px] text-[white] px-1 w-fit absolute top-0 right-0">
            9
          </span>
        </p>
        <div className="ml-4">
          <Image
            alt="user"
            width={40}
            height={100}
            src={'/images/circle.svg'}
          />
        </div>
      </div>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Notifications"
        padding="xl"
        size="xl"
        position="right"
      >
        <div className="mt-[40px] ">
          <div className="flex justify-between items-center mb-[50px]">
            <p className="font-bold  text-[16px] text-secondary ">
              - Appointment with Blessing Chidi
            </p>
            <p className="text-primary text-[14px] w-[20%]">30mins ago</p>
          </div>
          <div className="flex justify-between items-center mb-[50px]">
            <p className="font-bold  text-[16px] text-secondary ">
              - Appointment with Lucky Williams
            </p>
            <p className="text-primary text-[14px] w-[20%]">2hrs ago</p>
          </div>
          <div className="flex justify-between items-center mb-[50px]">
            <p className="font-bold  text-[16px] text-secondary ">
              - Appointment with Precious Meoin
            </p>
            <p className="text-primary text-[14px] w-[20%]">3days ago</p>
          </div>
        </div>
      </Drawer>
    </main>
  );
};

export default Header;
