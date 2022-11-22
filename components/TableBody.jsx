import React, { useState, useContext } from 'react';
import { GrEdit } from 'react-icons/gr';
import { RiDeleteBin6Line } from 'react-icons/ri';

import Image from 'next/image';

const RoundedDesignerDp = ({ image, width, height }) => {
  return (
    <div
      className={`${width} ${height} bg-baseBg rounded-full mr-2 overflow-hidden `}
    >
      <Image src={image} alt="picture" width={32} height={32} />
    </div>
  );
};

const TableBody = ({
  image,
  name,
  email,
  date,
  timeVisited,
  chw,
  plan,
  onclick,
}) => {
  return (
    <div
      className="flex items-center px-[24px] text-[14px]
     text-secondary py-[16px] border-b-[1px] 
      border-[#DBDDE070] justify-start w-[1100px] "
    >
      <div className={`w-[16%] flex items-center  `}>
        <RoundedDesignerDp image={image} />
        {name}
      </div>

      <p className={`w-[21%] `}>{email}</p>

      <p className={`w-[11%]`}>{date}</p>
      <p className={`w-[15%] flex items-center capitalize `}>{timeVisited}</p>

      <p className={`w-[17%] font-semibold `}>{chw}</p>

      <p className={`w-[12%] uppercase `}>{plan}</p>

      <p
        onClick={onclick}
        className={` cursor-pointer  w-[12%] flex items-center`}
      >
        <GrEdit />
        <span className="ml-2 text-[red]">
          <RiDeleteBin6Line />
        </span>
      </p>
    </div>
  );
};

export default TableBody;
