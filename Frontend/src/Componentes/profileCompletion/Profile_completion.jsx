import React from 'react';
import { useState } from 'react';
import { Button, Checkbox, Label, TextInput, Tooltip, Card, Footer, Select, List, Badge, Popover, Textarea, Avatar, Tabs, FileInput, Datepicker } from "flowbite-react";
import { HiMail, HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import Header from '../Header/Headers';
import { PiStudent, PiComputerTower } from "react-icons/pi";
import { BiMaleFemale } from "react-icons/bi";
import { GiModernCity } from "react-icons/gi";
import { TbCategory } from "react-icons/tb";
import { AiOutlinePercentage } from "react-icons/ai";
import { FaIdCard, FaWhatsapp,FaXTwitter } from "react-icons/fa6";
import { SiLeetcode,SiGeeksforgeeks,SiCodechef } from "react-icons/si";
import { LuBadgePercent } from "react-icons/lu";
import { BsFileEarmarkBreakFill } from "react-icons/bs";
import { IoManSharp } from "react-icons/io5";
import { TbDeviceComputerCamera } from "react-icons/tb";
import { FaBusinessTime ,FaHackerrank} from "react-icons/fa";
import { FaArrowRightToCity ,FaLink} from "react-icons/fa6";
import { MdHolidayVillage, MdCastForEducation, MdOutlineAbc,MdTitle } from "react-icons/md";
import { FaFemale, FaCity, FaCalendarCheck, FaChalkboardTeacher, FaSortAmountDownAlt,FaGithub,FaLinkedin,FaInstagram } from "react-icons/fa";
import { MdBloodtype,MdOutlinePersonPin } from "react-icons/md";
import { GoNumber } from "react-icons/go";

import Footer_page from '../footer/Footer_page';
import { TbMapPinCode, TbPercentage } from "react-icons/tb";

const Profile_completion = () => {

    const [showReasonTextarea, setShowReasonTextarea] = useState(false);

    function handleAnyGapDuringEducationChange(event) {
        const value = event.target.value;
        setShowReasonTextarea(value === 'Yes');
    }

    const [showSem1AndSem2, setShowSem1AndSem2] = useState(true);
    const [percentageLabel, setPercentageLabel] = useState("Percentage 12th/Diploma");

    function handle12thDiplomaChange(event) {
        const value = event.target.value;
        setShowSem1AndSem2(value === '12th');
        setPercentageLabel(value === '12th' ? "Percentage 12th" : "Percentage Diploma");
    }
    return (
        <>
            <Header />

            <div className='flex justify-center mt-4'>
                <Card href="#" className="max-w-sm">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        First Complete Your Profile
                    </h5>

                </Card>

            </div>

            <form className="flex flex-wrap mt-4 gap-4 justify-center sm:mx-4">

                <Tabs aria-label="Tabs with underline" style="underline" className='flex justify-center gap-8'>
                    <Tabs.Item active title="Personal Information" icon={HiUserCircle}>
                        <div className="flex flex-wrap mt-4 gap-7 justify-center">
                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row" >
                                    <Label htmlFor="base" value="Your full name" />
                                    <Tooltip content="Enter Your Full Name As per Markshit" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0  bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="email1" type="text" icon={PiStudent} placeholder="Ex. Gopal Bharat Patil" required />
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="email1" value="Your email" />
                                    <Tooltip content="Enter your email which is used though entire placement" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0  bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="email" type="email" icon={HiMail} placeholder="Ex. gopalpatilrcpit@gmail.com" required />
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="mobileNO" value="Mobile number" />
                                    <Tooltip content="Enter 10 digit active and whatsapp number" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0  bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="email2" type="number" placeholder="Ex. 9021386468" icon={FaWhatsapp} required />
                            </div>



                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="birthDate" value="Birthdate" />
                                    <Tooltip content="Enter your original birthdate" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0  bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <Datepicker autoHide={false} />
                            </div>


                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="gender" value="Gender" />
                                    <Tooltip content="Select Your Gender" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0  bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <Select icon={BiMaleFemale} id="countries" required>
                                    <option>Select...</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </Select>
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="gender" value="Blood Group" />
                                    <Tooltip content="Select Your Gender" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0  bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <Select id="countries" icon={MdBloodtype} required>
                                    <option>Select...</option>
                                    <option>A+</option>
                                    <option>A-</option>
                                    <option>B+</option>
                                    <option>B-</option>
                                    <option>AB+</option>
                                    <option>AB-</option>
                                    <option>O+</option>
                                    <option>O-</option>
                                </Select>
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="password3" value="Adhar Number" />
                                    <Tooltip content="Enter Your 12 Digit Adhar Card Number" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0  bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="adharNumber" icon={FaIdCard} type="number" placeholder="9021 XXXX XXXX" required />
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="email1" value="Cast" />
                                    <Tooltip content="Select Your Cast" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0  bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <Select id="countries" icon={TbCategory} required>
                                    <option>Select...</option>
                                    <option>OBC</option>
                                    <option>SC</option>
                                    <option>NT</option>
                                    <option>EBC</option>
                                    <option>Other</option>
                                </Select>
                            </div>
                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="password3" value="Upload Photo" />
                                    <Popover
                                        trigger="hover"
                                        aria-labelledby="profile-popover"
                                        content={
                                            <div className="w-fit p-4">
                                                <div className="mb-2 flex items-center justify-between">
                                                    <a href="#">
                                                        <Avatar img="/img/gopal_student.png" size="xl" />
                                                    </a>

                                                </div>
                                                <p className="mb-4 text-sm  text-gray-900 dark:text-white">
                                                    College uniform passport photo
                                                </p>


                                            </div>
                                        }
                                    >
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0  bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Popover>
                                </div>
                                <FileInput id="file-upload-helper-text" helperText="SVG, PNG, JPG or GIF (MAX. 800x400px)." />
                            </div>



                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="fatherName" value="Father Full Name" />
                                    <Tooltip content="Enter Your Father Full Name" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0  bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="fatherName" type="text" icon={IoManSharp} placeholder="Ex.Bharat Yadav Patil" required />
                            </div>



                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="mobileNO" value="Father Mobile number" />
                                    <Tooltip content="Enter Your Father 10 digit active and whatsapp number" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0  bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="email2" type="number" placeholder="Ex. 9021386468" icon={FaWhatsapp} required />
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="email1" value="Father Occupation*" />
                                    <Tooltip content="Select Father Occuoation" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0  bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <Select id="Occupation" icon={FaBusinessTime} required>
                                    <option>Select....</option>
                                    <option>Government Service</option>
                                    <option>Private Service</option>
                                    <option>Business/Entrepreneur</option>
                                    <option>Agriculture/Farming</option>
                                    <option>Professional (Doctor, Engineer, Lawyer, etc.)</option>
                                    <option>Retired</option>
                                    <option>Others</option>
                                </Select>
                            </div>
                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="motherName" value="Mother Full Name" />
                                    <Tooltip content="Enter Your Mother Full Name" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="motherName" type="text" icon={FaFemale} placeholder="Ex. Mother Name" required />
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="motherMobileNO" value="Mother Mobile number" />
                                    <Tooltip content="Enter Your Mother 10 digit active and whatsapp number" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="motherMobileNO" type="number" placeholder="Ex. 9021386468" icon={FaWhatsapp} required />
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="motherOccupation" value="Mother Occupation*" />
                                    <Tooltip content="Select Mother Occupation" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <Select id="motherOccupation" icon={FaBusinessTime} required>
                                    <option>Select....</option>
                                    <option>Government Service</option>
                                    <option>Private Service</option>
                                    <option>Business/Entrepreneur</option>
                                    <option>Agriculture/Farming</option>
                                    <option>Professional (Doctor, Engineer, Lawyer, etc.)</option>
                                    <option>Retired</option>
                                    <option>Others</option>
                                </Select>
                            </div>
                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="localAddress" value="Local Address" />
                                    <Tooltip content="Enter Your Local Address" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="localAddress" type="text" placeholder="Ex. 123, Street Name" icon={MdHolidayVillage} required />
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="city" value="City" />
                                    <Tooltip content="Enter Your City" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="city" type="text" placeholder="Ex. Mumbai" icon={FaArrowRightToCity} required />
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="district" value="District" />
                                    <Tooltip content="Enter Your District" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="district" type="text" placeholder="Ex. Dhule" icon={FaCity} required />
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="state" value="State" />
                                    <Tooltip content="Enter Your State" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="state" type="text" placeholder="Ex. Maharashtra" icon={GiModernCity} required />
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="pincode" value="Pincode" />
                                    <Tooltip content="Enter Your Pincode" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="pincode" type="number" placeholder="Ex. 424001" icon={TbMapPinCode} required />
                            </div>

                        </div>
                    </Tabs.Item>




                    <Tabs.Item title="Acadmic Information" icon={MdDashboard}>
                        <div className="flex flex-wrap mt-4 gap-7 justify-center">
                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="prnNumber" value="PRN Number" />
                                    <Tooltip content="Enter Your PRN Number" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="prnNumber" type="text" placeholder="Ex. 1234567890" icon={GoNumber} required />
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="10thMarks" value="10th Marks" />
                                    <Tooltip content="Enter Your 10th Marks" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="10thMarks" type="number" placeholder="Ex. 90%" icon={AiOutlinePercentage} required />
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="12thDiploma" value="12th/Diploma" />
                                    <Tooltip content="Select 12th or Diploma" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <Select id="12thDiploma" icon={MdCastForEducation} required onChange={handle12thDiplomaChange} >
                                    <option>Select....</option>
                                    <option>12th</option>
                                    <option>Diploma</option>
                                </Select>
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="12thDiplomaPercentage" value={percentageLabel} />
                                    <Tooltip content={`Enter Your ${percentageLabel}`} animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="12thDiplomaPercentage" type="number" placeholder={`Ex. ${percentageLabel === 'Percentage 12th' ? '85%' : '90%'}`} icon={AiOutlinePercentage} required />
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="admissionBasedOn" value="Admission Based On" />
                                    <Tooltip content="Select Admission Based On" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <Select id="admissionBasedOn" icon={PiComputerTower} required>
                                    <option>Select....</option>
                                    <option>TFWS</option>
                                    <option>MHT CET</option>
                                    <option>JEE Main</option>
                                    <option>Diploma</option>
                                    <option>Management</option>
                                </Select>
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="department" value="Department" />
                                    <Tooltip content="Select Department (for Management)" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <Select id="department" icon={TbDeviceComputerCamera}>
                                    <option>Select....</option>
                                    <option>Computer</option>
                                    <option>E&TC</option>
                                    <option>Mechanical</option>
                                    <option>Civil</option>
                                    <option>Electric</option>
                                    <option>AIML</option>
                                    <option>Data Science</option>
                                </Select>
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="division" value="Division" />
                                    <Tooltip content="Select Division" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <Select id="division" icon={MdOutlineAbc}>
                                    <option>Select....</option>
                                    <option>A</option>
                                    <option>B</option>
                                    <option>C</option>
                                </Select>
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="sem1SGPA" value="Passout year*" />
                                    <Tooltip content="Enter your passout year " animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="passoutYear" type="number" placeholder="Ex. 2025" icon={FaCalendarCheck} required />
                            </div>
                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="lgName" value="LG Name*" />
                                    <Tooltip content="Enter Sem 1 SGPA" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="lgName" type="text" icon={FaChalkboardTeacher} placeholder="Ex. Paritosh Prakash Chaudhari" required />
                            </div>

                            {showSem1AndSem2 && (
                                <>
                                    <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                        <div className="mb-2 flex flex-row">
                                            <Label htmlFor="sem1SGPA" value="Sem 1 (SGPA)" />
                                            <Tooltip content="Enter Sem 1 SGPA" animation="duration-1000">
                                                <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                            </Tooltip>
                                        </div>
                                        <TextInput id="sem1SGPA" type="number" icon={LuBadgePercent} placeholder="Ex. 9.5" required />
                                    </div>

                                    <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                        <div className="mb-2 flex flex-row">
                                            <Label htmlFor="sem1CGPA" value="Sem 1 (CGPA)" />
                                            <Tooltip content="Enter Sem 1 CGPA" animation="duration-1000">
                                                <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                            </Tooltip>
                                        </div>
                                        <TextInput id="sem1CGPA" type="number" icon={LuBadgePercent} placeholder="Ex. 8.9" required />
                                    </div>

                                    <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                        <div className="mb-2 flex flex-row">
                                            <Label htmlFor="sem1Backlog" value="Sem 1 (Backlog)" />
                                            <Tooltip content="Enter Sem 1 Backlog" animation="duration-1000">
                                                <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                            </Tooltip>
                                        </div>
                                        <Select id="sem1Backlog" icon={FaSortAmountDownAlt}>
                                            <option>Select....</option>
                                            <option>All clear</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Select>
                                    </div>

                                    <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                        <div className="mb-2 flex flex-row">
                                            <Label htmlFor="sem2SGPA" value="Sem 2 (SGPA)" />
                                            <Tooltip content="Enter Sem 2 SGPA" animation="duration-1000">
                                                <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                            </Tooltip>
                                        </div>
                                        <TextInput id="sem2SGPA" type="number" icon={LuBadgePercent} placeholder="Ex. 9.5" required />
                                    </div>

                                    <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                        <div className="mb-2 flex flex-row">
                                            <Label htmlFor="sem2CGPA" value="Sem 2 (CGPA)" />
                                            <Tooltip content="Enter Sem 2 CGPA" animation="duration-1000">
                                                <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                            </Tooltip>
                                        </div>
                                        <TextInput id="sem2CGPA" type="number" placeholder="Ex. 8.9" icon={LuBadgePercent} required />
                                    </div>

                                    <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                        <div className="mb-2 flex flex-row">
                                            <Label htmlFor="sem2Backlog" value="Sem 2 (Backlog)" />
                                            <Tooltip content="Enter Sem 2 Backlog" animation="duration-1000">
                                                <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                            </Tooltip>
                                        </div>
                                        <Select id="sem2Backlog" icon={FaSortAmountDownAlt}>
                                            <option>Select....</option>
                                            <option>All clear</option>
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </Select>
                                    </div>
                                </>

                            )}



                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="sem3SGPA" value="Sem 3(SGPA)" />
                                    <Tooltip content="Enter Sem 3 SGPA" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="sem3SGPA" type="number" placeholder="Ex. 9.5" icon={LuBadgePercent} required />
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="sem1CGPA" value="Sem 3 (CGPA)" />
                                    <Tooltip content="Enter Sem 3 CGPA" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="sem3CGPA" type="number" placeholder="Ex. 8.9" icon={LuBadgePercent} required />
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="sem3Backlog" value="Sem 3 (Backlog)" />
                                    <Tooltip content="Enter Sem 3 Backlog" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <Select id="division" icon={FaSortAmountDownAlt}>
                                    <option>Select....</option>
                                    <option>All clear</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Select>
                            </div>



                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="sem4SGPA" value="Sem 4 (SGPA)" />
                                    <Tooltip content="Enter Sem 4 SGPA" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="sem4SGPA" type="number" placeholder="Ex. 9.5" icon={LuBadgePercent} required />
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="sem4CGPA" value="Sem 4 (CGPA)" />
                                    <Tooltip content="Enter Sem 4 CGPA" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="sem4CGPA" type="number" placeholder="Ex. 8.9" icon={LuBadgePercent} required />
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="sem4Backlog" value="Sem 4 (Backlog)" />
                                    <Tooltip content="Enter Sem 4 Backlog" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <Select id="division" icon={FaSortAmountDownAlt}>
                                    <option>Select....</option>
                                    <option>All clear</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Select>
                            </div>



                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="sem5SGPA" value="Sem 5 (SGPA)" />
                                    <Tooltip content="Enter Sem 5 SGPA" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="sem5SGPA" type="number" placeholder="Ex. 9.5" icon={LuBadgePercent} required />
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="sem5CGPA" value="Sem 5 (CGPA)" />
                                    <Tooltip content="Enter Sem 1 CGPA" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="sem5CGPA" type="number" placeholder="Ex. 8.9" icon={LuBadgePercent} required />
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="sem5Backlog" value="Sem 5 (Backlog)" />
                                    <Tooltip content="Enter Sem 5 Backlog" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <Select id="division" icon={FaSortAmountDownAlt}>
                                    <option>Select....</option>
                                    <option>All clear</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Select>
                            </div>



                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="sem6SGPA" value="Sem 6 (SGPA)" />
                                    <Tooltip content="Enter Sem 6 SGPA" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="sem6SGPA" type="number" placeholder="Ex. 9.5" icon={LuBadgePercent} required />
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="sem1CGPA" value="Sem 6 (CGPA)" />
                                    <Tooltip content="Enter Sem 6 CGPA" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="sem6CGPA" type="number" placeholder="Ex. 8.9" icon={LuBadgePercent} required />
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="sem6Backlog" value="Sem 6 (Backlog)" />
                                    <Tooltip content="Enter Sem 6 Backlog" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <Select id="division" icon={FaSortAmountDownAlt}>
                                    <option>Select....</option>
                                    <option>All clear</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Select>
                            </div>



                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="overallCGPA" value="Overall CGPA" />
                                    <Tooltip content="Enter Overall CGPA" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="overallCGPA" type="number" placeholder="Ex. 8.8" icon={LuBadgePercent} required />
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="anyLiveKTs" value="Any Live KT's" />
                                    <Tooltip content="Select Yes or No" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <Select id="anyLiveKTs" icon={FaSortAmountDownAlt} required>
                                    <option>Select....</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </Select>
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="anyGapDuringEducation" value="Any Gap During Education" />
                                    <Tooltip content="Select Yes or No" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <Select id="anyGapDuringEducation" icon={BsFileEarmarkBreakFill} required onChange={handleAnyGapDuringEducationChange}>
                                    <option>Select....</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </Select>
                            </div>
                            {showReasonTextarea && (
                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="gapReason" value="Reason(If any gap during Education)" />
                                        <Tooltip content="Select Yes or No" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
                                </div>
                            )}

                        </div>
                    </Tabs.Item>

                    <Tabs.Item title="Skills Set" icon={HiAdjustments}>
                        <div className="flex flex-wrap mt-4 gap-4 justify-center">

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="areaOfInterest" value="Area of Interest*" />
                                    <Tooltip content="Choose your area of Interest" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <Select id="anyGapDuringEducation" required>
                                    <option>Select....</option>
                                    <option value="Frontend">Frontend</option>
                                    <option value="Backend">Backend</option>
                                    <option value="Fullstack">Fullstack</option>
                                    <option value="Testing">Testing</option>
                                    <option value="DevOps">DevOps</option>
                                    <option value="Mobile Development">Mobile Development</option>
                                    <option value="Cloud Computing">Cloud Computing</option>
                                    <option value="Data Science">Data Science</option>
                                    <option value="Machine Learning">Machine Learning</option>
                                    <option value="Artificial Intelligence">Artificial Intelligence</option>
                                    <option value="Cybersecurity">Cybersecurity</option>
                                    <option value="Game Development">Game Development</option>
                                </Select>
                            </div>


                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="areaOfInterest" value="Area of Interest*" />
                                    <Tooltip content="Choose your area of Interest" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <Select id="anyGapDuringEducation" required>
                                    <option>Select....</option>
                                    <option value="Frontend">Frontend</option>
                                    <option value="Backend">Backend</option>
                                    <option value="Fullstack">Fullstack</option>
                                    <option value="Testing">Testing</option>
                                    <option value="DevOps">DevOps</option>
                                    <option value="Mobile Development">Mobile Development</option>
                                    <option value="Cloud Computing">Cloud Computing</option>
                                    <option value="Data Science">Data Science</option>
                                    <option value="Machine Learning">Machine Learning</option>
                                    <option value="Artificial Intelligence">Artificial Intelligence</option>
                                    <option value="Cybersecurity">Cybersecurity</option>
                                    <option value="Game Development">Game Development</option>
                                </Select>
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="aboutYou" value="About You" />
                                    <Tooltip content="Write About Yourself" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <Textarea id="Aboutyou" placeholder="I am a software engineer" required rows={4} />
                            </div>




                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="projectTitile1" value="Project 1 (Title)" />
                                    <Tooltip content="Enter Your Project Title" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="projectTitile1" type="text" placeholder="Ex. Rental Website" icon={MdTitle} required />
                            </div>
                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="projectTitile1" value="Github/Project link" />
                                    <Tooltip content="Enter Your Project Title" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="projectTitile1" type="text" placeholder="https://github.com" icon={FaLink} required />
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="aboutYou" value="Project 1(Discription)" />
                                    <Tooltip content="Write About Yourself" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <Textarea id="projectDiscription" placeholder="Project is based on....." required rows={4} />
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="projectTitile2" value="Project 2 (Title)" />
                                    <Tooltip content="Enter Your Project Title" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="projectTitile2" type="text" placeholder="Ex. Rental Website" icon={MdTitle} required />
                            </div>
                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="projectlink2" value="Github/Project link" />
                                    <Tooltip content="Enter Your Project Title" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="projectLink" type="text" placeholder="https://github.com" icon={FaLink} required />
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="projectdisceiption" value="Project 2(Discription)" />
                                    <Tooltip content="Write About Yourself" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <Textarea id="Aboutyou" placeholder="Project is based on....." required rows={4} />
                            </div>


                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="professionalProfileLink" value="Personal Portfolio link" />
                                    <Tooltip content="Enter Your PPersonal Portfolio link" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="personalPortfolioLink" type="text" placeholder="https://example.com" icon={MdOutlinePersonPin} required />
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="githubLink" value="Github link" />
                                    <Tooltip content="Enter Your Github Profile link" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="githubLink" type="text" placeholder="https://github.com" icon={FaGithub} required />
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="linkedinLink" value="Linkedin link" />
                                    <Tooltip content="Enter Your Linkedin Profile link" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="linkedinLink" type="text" placeholder="https://linkedin.com" icon={FaLinkedin} required />
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="instagramLink" value="Instagram link" />
                                    <Tooltip content="Enter Your Instagram Profile link" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="instagramLink" type="text" placeholder="https://instagram.com" icon={FaInstagram} required />
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="twitterLink" value="Twitter link" />
                                    <Tooltip content="Enter Your Twitter Profile link" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="twitterLink" type="text" placeholder="https://twitter.com" icon={FaXTwitter} required />
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="leetcodeLink" value="LeetCode link" />
                                    <Tooltip content="Enter Your LeetCode Profile link" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="leetcodeLink" type="text" placeholder="https://leetcode.com" icon={SiLeetcode} required />
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="geeksForGeeksLink" value="GeeksForGeeks link" />
                                    <Tooltip content="Enter Your GeeksForGeeks Profile link" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="geeksForGeeksLink" type="text" placeholder="https://geeksforgeeks.org" icon={SiGeeksforgeeks} required />
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="codechefLink" value="Codechef link" />
                                    <Tooltip content="Enter Your Codechef Profile link" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="codechefLink" type="text" placeholder="https://codechef.com" icon={SiCodechef} required />
                            </div>

                            <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                <div className="mb-2 flex flex-row">
                                    <Label htmlFor="hackerRankLink" value="HackerRank link" />
                                    <Tooltip content="Enter Your HackerRank Profile link" animation="duration-1000">
                                        <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                    </Tooltip>
                                </div>
                                <TextInput id="hackerRankLink" type="text" placeholder="https://hackerrank.com" icon={FaHackerrank} required />
                            </div>

                        </div>




                    </Tabs.Item>

                </Tabs>


                <Button className="w-1/3 mb-8 mt-4" type="submit">Submit</Button>

            </form>

            <Footer_page />
        </>
    )
}

export default Profile_completion