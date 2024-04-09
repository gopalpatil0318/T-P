import React from 'react';
import { useState } from 'react';
import { Button, Checkbox, Label, TextInput, Tooltip, Card,Dropdown, Footer, Select, List, Badge, Popover, Textarea, Avatar, Tabs, FileInput, Datepicker } from "flowbite-react";
import { HiMail, HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import Header from '../Header/Headers';



import Footer_page from '../footer/Footer_page';
import Sidebars from '../sidebar/Sidebars';

const Profile = () => {
  return (
    <>
      <Header />
      <div className='flex gap-4'>
        <Sidebars />

        <div className='flex-1 flex flex-col  mt-4 '>
          <div className='flex flex-row gap-4 justify-center'>

            <div class="flex-auto  flex justify-center ">
              <Card href="#" className="justify-center w-56 text-center ">
                <h5 className="text-base font-bold tracking-tight text-gray-900 dark:text-white">
                  Profile
                </h5>
              </Card>
            </div>

            <div class="flex-none w-3/12">
              <TextInput id="username3" placeholder="Search...."  icon={IoSearch}   className='flex-none mt-4 mr-4' required />
            </div>
          </div>

          <div className='m-8 flex'>
          <Card className="w-2/6 h-fit">
                <div className="flex justify-end px-4 pt-4">
                    <Dropdown inline label="">
                        <Dropdown.Item>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Edit
                            </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Export Data
                            </a>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <a
                                href="#"
                                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                Delete
                            </a>
                        </Dropdown.Item>
                    </Dropdown>
                </div>
                <div className="flex flex-col items-center pb-10">
                    <img
                        alt="Bonnie img"
                        height="96"
                        src="./img/gopal_student.png"
                        width="96"
                        className="mb-3 rounded-full shadow-lg"
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Gopal Patil</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Fullstack Devloper</span>
                    <div className="mt-4 flex space-x-3 lg:mt-6">
                        <a
                            href="#"
                            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                        >
                            Add friend
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                        >
                            Message
                        </a>
                    </div>
                </div>
            </Card>

            <Card className="w-3/5 ml-8">
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Customers</h5>
        <a href="#" className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500">
          View all
        </a>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <img
                  alt="Neil img"
                  height="32"
                  src="./img/gopal_student.png"
                  width="32"
                  className="rounded-full"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Neil Sims</p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$320</div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <img
                  alt="Bonnie img"
                  height="32"
                  src="/imgs/people/profile-picture-3.jpg"
                  width="32"
                  className="rounded-full"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Bonnie Green</p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $3467
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <img
                  alt="Michael img"
                  height="32"
                  src="/imgs/people/profile-picture-2.jpg"
                  width="32"
                  className="rounded-full"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Michael Gough</p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$67</div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <img
                  alt="Lana img"
                  height="32"
                  src="/imgs/people/profile-picture-4.jpg"
                  width="32"
                  className="rounded-full"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Lana Byrd</p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$367</div>
            </div>
          </li>
          <li className="pb-0 pt-3 sm:pt-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <img
                  alt="Thomas img"
                  height="32"
                  src="/imgs/people/profile-picture-5.jpg"
                  width="32"
                  className="rounded-full"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Thomes Lean</p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                $2367
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Card>

            </div>

        </div>




      </div>
      <Footer_page />
    </>
  )
}

export default Profile