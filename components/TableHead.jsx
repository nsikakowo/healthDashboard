import React from 'react';

const TableHead = () => {
  return (
    <div className="flex font-bold items-center text-[14px] text-[#6A7295] bg-[#f3f3f380] py-[16px] px-[24px] border-b-[1px]  border-[#dbdde8] sm:w-[1100px] w-full justify-start ">
      <p className={`w-[16%]`}>Name</p>
      <p className={`w-[21%]`}> Email</p>
      <p className={`w-[11%]`}>Date</p>
      <p className={`w-[15%] flex items-center`}>Visit Time</p>
      <p className={`w-[15%] flex items-center`}>CHWs</p>
      <p className={`w-[15%]`}>Plan</p>
      <p className={`w-[10%]`}></p>
    </div>
  );
};

export default TableHead;
