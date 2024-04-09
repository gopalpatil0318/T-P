import React, { useState } from 'react';
import { Sidebar, Button } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiMenu,
  HiOutlineMinusSm,
  HiOutlinePlusSm,
  HiShoppingBag,
  HiTable,
  HiUser,
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";

const Sidebars = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    if (!showSidebar) {
      setCollapsed(false);
    }
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
    setShowSidebar(true);
  };

  return (
    <>
      <div className="lg:hidden">
        <Button onClick={toggleSidebar} className="fixed top-28 left-4 z-50"><HiMenu /></Button>
      </div>
      <Sidebar aria-label="Sidebar with multi-level dropdown example" className={ `h-full mt-4 flex-none lg:flex lg:flex-col lg:h-full lg:w-1/6 mx-auto ${showSidebar ? 'block' : 'hidden'} ${collapsed ? 'lg:hidden' : ''}`}>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Collapse
              icon={HiShoppingBag}
              label="E-commerce"
              renderChevronIcon={(theme, open) => {
                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
                return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
              }}
            >
              <Sidebar.Item href="#">Products</Sidebar.Item>
              <Sidebar.Item href="#">Sales</Sidebar.Item>
              <Sidebar.Item href="#">Refunds</Sidebar.Item>
              <Sidebar.Item href="#">Shipping</Sidebar.Item>
            </Sidebar.Collapse>
            <Sidebar.Item href="#" icon={HiInbox}>
              Inbox
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
              Users
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>
              Products
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiArrowSmRight} onClick={toggleCollapsed}>
              Sign In
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiTable} onClick={toggleSidebar}>
              Sign Up
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
};

export default Sidebars;
