import React from 'react';

const RevenueCard = ({ amount, title, icon, color }) => {
  return (
    <div className="w-[24%] sm:w-[49%]  sm:mb-3 h-[88px] bg-[white] rounded-[8px] shadow-[0px_12px_26px_rgba(16,_30,_115,_0.06)]  flex items-center py-[20px] px-[24px] sm:px-[12px]">
      <p
        className={` ${color} text-primary text-[40px] mr-6 sm:mr-3
      `}
      >
        {icon}
      </p>
      <div className="w-full">
        <p className="text-[14px] text-lightgray font-bold">{title}</p>
        <p className="text-[18px] text-primary ">{amount}</p>
      </div>
    </div>
  );
};

export default RevenueCard;
