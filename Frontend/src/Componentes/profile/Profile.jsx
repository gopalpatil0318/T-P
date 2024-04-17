import React, { useState, useEffect } from 'react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Label, TextInput, Tooltip, Card, Dropdown, Footer, Select, List, Badge, Popover, Textarea, Avatar, Tabs, FileInput, Datepicker } from "flowbite-react";
import { IoSearch } from "react-icons/io5";
import { Table } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import Header from '../Header/Headers';
import Footer_page from '../footer/Footer_page';
import Sidebars from '../sidebar/Sidebars';


const Profile = () => {


  const [data, setData] = useState({});


  useEffect(() => {
    const prn = localStorage.getItem('prn');
    console.log(prn)
    fetch(`http://localhost:8080/api/get-data?prn=${prn}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);


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
              <TextInput id="username3" placeholder="Search...." icon={IoSearch} className='flex-none mt-4 mr-4' required />
            </div>
          </div>

          <div className='m-8 flex flex-col'>
            <div className='flex w-full'>
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
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{data.fullName}</h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{data.email}</span>
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
            <div className='mt-8 '>
              <Tabs aria-label="Default tabs" style="default" className='flex gap-6'>
                <Tabs.Item active title="Personal Information" icon={HiUserCircle}>
                  <div className="overflow-x-auto">
                    <Table striped>
                      <Table.Head>
                        <Table.HeadCell>Field</Table.HeadCell>
                        <Table.HeadCell>Value</Table.HeadCell>
                      </Table.Head>
                      <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Full Name</Table.Cell>
                          <Table.Cell>{data.fullName}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Email</Table.Cell>
                          <Table.Cell>{data.email}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Mobile Number</Table.Cell>
                          <Table.Cell>{data.mobileNumber}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Birth Date</Table.Cell>
                          <Table.Cell>{data.birthDate}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Gender</Table.Cell>
                          <Table.Cell>{data.gender}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Password</Table.Cell>
                          <Table.Cell>{data.password}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Confirm Password</Table.Cell>
                          <Table.Cell>{data.confirmPassword}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Blood Group</Table.Cell>
                          <Table.Cell>{data.bloodGroup}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Aadhar Number</Table.Cell>
                          <Table.Cell>{data.adharNumber}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Cast</Table.Cell>
                          <Table.Cell>{data.cast}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Father's Name</Table.Cell>
                          <Table.Cell>{data.fatherName}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Father's Mobile Number</Table.Cell>
                          <Table.Cell>{data.fatherMobileNumber}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Father's Occupation</Table.Cell>
                          <Table.Cell>{data.fatherOccupation}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Mother's Name</Table.Cell>
                          <Table.Cell>{data.motherName}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Mother's Mobile Number</Table.Cell>
                          <Table.Cell>{data.motherMobileNumber}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Mother's Occupation</Table.Cell>
                          <Table.Cell>{data.motherOccupation}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Local Address</Table.Cell>
                          <Table.Cell>{data.localAddress}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>City</Table.Cell>
                          <Table.Cell>{data.city}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>District</Table.Cell>
                          <Table.Cell>{data.district}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>State</Table.Cell>
                          <Table.Cell>{data.state}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Pincode</Table.Cell>
                          <Table.Cell>{data.pincode}</Table.Cell>
                        </Table.Row>

                      </Table.Body>
                    </Table>
                  </div>
                </Tabs.Item>
                <Tabs.Item title="Acadmic Information" icon={MdDashboard}>
                  <div className="overflow-x-auto">
                    <Table striped>
                      <Table.Head>
                        <Table.HeadCell>Field</Table.HeadCell>
                        <Table.HeadCell>Value</Table.HeadCell>
                      </Table.Head>
                      <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>PRN Number</Table.Cell>
                          <Table.Cell>{data.prnNumber}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Tenth Marks</Table.Cell>
                          <Table.Cell>{data.tenthMarks}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Twelfth/Diploma</Table.Cell>
                          <Table.Cell>{data.twelfthDiploma}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Twelfth/Diploma Percentage</Table.Cell>
                          <Table.Cell>{data.twelfthDiplomaPercentage}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Admission Based On</Table.Cell>
                          <Table.Cell>{data.admissionBasedOn}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Department</Table.Cell>
                          <Table.Cell>{data.department}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Division</Table.Cell>
                          <Table.Cell>{data.division}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Passout Year</Table.Cell>
                          <Table.Cell>{data.passoutYear}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>LG Name</Table.Cell>
                          <Table.Cell>{data.lgName}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>SEM 3 SGPA</Table.Cell>
                          <Table.Cell>{data.sem3SGPA}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>SEM 3 CGPA</Table.Cell>
                          <Table.Cell>{data.sem3CGPA}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>SEM 3 Backlog</Table.Cell>
                          <Table.Cell>{data.sem3Backlog}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>SEM 4 SGPA</Table.Cell>
                          <Table.Cell>{data.sem4SGPA}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>SEM 4 CGPA</Table.Cell>
                          <Table.Cell>{data.sem4CGPA}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>SEM 4 Backlog</Table.Cell>
                          <Table.Cell>{data.sem4Backlog}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>SEM 5 SGPA</Table.Cell>
                          <Table.Cell>{data.sem5SGPA}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>SEM 5 CGPA</Table.Cell>
                          <Table.Cell>{data.sem5CGPA}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>SEM 5 Backlog</Table.Cell>
                          <Table.Cell>{data.sem5Backlog}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>SEM 6 SGPA</Table.Cell>
                          <Table.Cell>{data.sem6SGPA}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>SEM 6 CGPA</Table.Cell>
                          <Table.Cell>{data.sem6CGPA}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>SEM 6 Backlog</Table.Cell>
                          <Table.Cell>{data.sem6Backlog}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Overall CGPA</Table.Cell>
                          <Table.Cell>{data.overallCGPA}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Any Live KTs</Table.Cell>
                          <Table.Cell>{data.anyLiveKTs}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Any Gap During Education</Table.Cell>
                          <Table.Cell>{data.anyGapDuringEducation}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Gap Reason</Table.Cell>
                          <Table.Cell>{data.gapReason}</Table.Cell>
                        </Table.Row>

                      </Table.Body>
                    </Table>
                  </div>
                </Tabs.Item>
                <Tabs.Item title="Skills" icon={HiAdjustments}>
                  <div className="overflow-x-auto">
                    <Table striped>
                      <Table.Head>
                        <Table.HeadCell>Field</Table.HeadCell>
                        <Table.HeadCell>Value</Table.HeadCell>
                      </Table.Head>
                      <Table.Body className="divide-y">

                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Area of Interest</Table.Cell>
                          <Table.Cell>{data.areaOfInterest}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>About You</Table.Cell>
                          <Table.Cell>{data.aboutYou}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Project Title 1</Table.Cell>
                          <Table.Cell>{data.projectTitle1}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Project Link 1</Table.Cell>
                          <Table.Cell>{data.projectLink1}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Project Description 1</Table.Cell>
                          <Table.Cell>{data.projectDescription1}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Project Title 2</Table.Cell>
                          <Table.Cell>{data.projectTitle2}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Project Link 2</Table.Cell>
                          <Table.Cell>{data.projectLink2}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Project Description 2</Table.Cell>
                          <Table.Cell>{data.projectDescription2}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Personal Portfolio Link</Table.Cell>
                          <Table.Cell>{data.personalPortfolioLink}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Github Link</Table.Cell>
                          <Table.Cell>{data.githubLink}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Linkedin Link</Table.Cell>
                          <Table.Cell>{data.linkedinLink}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Instagram Link</Table.Cell>
                          <Table.Cell>{data.instagramLink}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Twitter Link</Table.Cell>
                          <Table.Cell>{data.twitterLink}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Leetcode Link</Table.Cell>
                          <Table.Cell>{data.leetcodeLink}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>GeeksForGeeks Link</Table.Cell>
                          <Table.Cell>{data.geeksForGeeksLink}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>Codechef Link</Table.Cell>
                          <Table.Cell>{data.codechefLink}</Table.Cell>
                        </Table.Row>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                          <Table.Cell>HackerRank Link</Table.Cell>
                          <Table.Cell>{data.hackerRankLink}</Table.Cell>
                        </Table.Row>

                      </Table.Body>
                    </Table>
                  </div>
                </Tabs.Item>

              </Tabs>
            </div>
          </div>


        </div>




      </div>


      <Footer_page />
    </>
  )
}

export default Profile