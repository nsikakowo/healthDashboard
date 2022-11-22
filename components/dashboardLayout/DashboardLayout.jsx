import React from 'react';
import Header from './Header';
import MobileNav from './MobileNav';
import SideBar from './SideBar';

const DashboardLayout = ({ children }) => {
  return (
    <main className="w-full  flex h-[100vh] ">
      <SideBar />
      <div className=" p-6 w-full h-[100vh] bg-[#f7f8fb] overflow-scroll no-scrollbar scroll-smooth ">
        {children}
      </div>
      <MobileNav />
    </main>
  );
};

export default DashboardLayout;
