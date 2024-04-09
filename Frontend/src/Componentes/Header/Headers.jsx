import React from 'react'
import { useState } from 'react'
import { DarkThemeToggle } from "flowbite-react";
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";


const Header = () => {
  return (
    <>
 
    <Navbar  className=' pt-6 pb-6 w-screen '> 
    
    <Navbar.Brand href="">
      <img src="./img/main_logo.jpg" className="lg:mr-8 md:mr-0 sm:mr-0 h-20 lg:h-16 sm:h-9 sm:ml-0 " alt="Flowbite React Logo" />
      <DarkThemeToggle />
      <span className=" lg:ml-5 md:ml-5 sm:ml-0 self-center whitespace-nowrap lg:text-2xl font-semibold  dark:text-white">Training And Placement</span>
    </Navbar.Brand>
    
    <div className="flex md:order-2 lg:order-2 sm:order-2 mr-6">
      <Dropdown
        arrowIcon={false}
        inline
        label={
          <Avatar alt="User settings" img="./img/gopal_student.png" rounded />
        }
      >
        <Dropdown.Header>
          <span className="block text-sm">Gopal Patil</span>
          <span className="block truncate text-sm font-medium">gopalpatilrcpit@gmail.com</span>
        </Dropdown.Header>
        
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Sign out</Dropdown.Item>
        <Dropdown.Item></Dropdown.Item>
        
      </Dropdown>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse >
      <Navbar.Link href="#" active >
        Home
      </Navbar.Link>
      <Navbar.Link href="#">About</Navbar.Link>
      <Navbar.Link href="#">Services</Navbar.Link>
      <Navbar.Link href="#">Pricing</Navbar.Link>
      <Navbar.Link href="#">Contact</Navbar.Link>
      
    </Navbar.Collapse>
   
  </Navbar>

  
  </>
  )
}

export default Header