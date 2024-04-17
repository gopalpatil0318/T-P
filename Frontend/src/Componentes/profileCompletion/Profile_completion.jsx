import React from 'react';
import { useNavigate } from 'react-router-dom';

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
import { FaIdCard, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { SiLeetcode, SiGeeksforgeeks, SiCodechef } from "react-icons/si";
import { LuBadgePercent } from "react-icons/lu";
import { BsFileEarmarkBreakFill } from "react-icons/bs";
import { IoManSharp } from "react-icons/io5";
import { TbDeviceComputerCamera } from "react-icons/tb";
import { FaBusinessTime, FaHackerrank } from "react-icons/fa";
import { FaArrowRightToCity, FaLink } from "react-icons/fa6";
import { MdHolidayVillage, MdCastForEducation, MdOutlineAbc, MdTitle } from "react-icons/md";
import { FaFemale, FaCity, FaCalendarCheck, FaChalkboardTeacher, FaSortAmountDownAlt, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdBloodtype, MdOutlinePersonPin } from "react-icons/md";
import { GoNumber } from "react-icons/go";

import Footer_page from '../footer/Footer_page';
import { TbMapPinCode, TbPercentage } from "react-icons/tb";

const Profile_completion = () => {
    const navigate = useNavigate();



    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        mobileNumber: "",
        birthDate: "",
        gender: "",
        bloodGroup: "",
        adharNumber: "",
        cast: "",
        fatherName: "",
        fatherMobileNumber: "",
        fatherOccupation: "",
        motherName: "",
        motherMobileNumber: "",
        motherOccupation: "",
        localAddress: "",
        city: "",
        district: "",
        state: "",
        pincode: "",
        prnNumber: "",
        tenthMarks: "",
        twelfthDiploma: "",
        twelfthDiplomaPercentage: "",
        admissionBasedOn: "",
        department: "",
        division: "",
        passoutYear: "",
        lgName: "",
        sem3SGPA: "",
        sem3CGPA: "",
        sem3Backlog: "",
        sem4SGPA: "",
        sem4CGPA: "",
        sem4Backlog: "",
        sem5SGPA: "",
        sem5CGPA: "",
        sem5Backlog: "",
        sem6SGPA: "",
        sem6CGPA: "",
        sem6Backlog: "",
        overallCGPA: "",
        anyLiveKTs: "",
        anyGapDuringEducation: "",
        gapReason: "",
        sem1SGPA: "",
        sem1CGPA: "",
        sem1Backlog: "",
        sem2SGPA: "",
        sem2CGPA: "",
        sem2Backlog: "",
        areaOfInterest: "",
        aboutYou: "",
        projectTitle1: "",
        projectLink1: "",
        projectDescription1: "",
        projectTitle2: "",
        projectLink2: "",
        projectDescription2: "",
        personalPortfolioLink: "",
        githubLink: "",
        linkedinLink: "",
        instagramLink: "",
        twitterLink: "",
        leetcodeLink: "",
        geeksForGeeksLink: "",
        codechefLink: "",
        hackerRankLink: ""
    });



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const prn = localStorage.getItem('prn');
        if (!prn) {
            console.error('PRN not found in local storage');
            return;
        }

        fetch(`http://localhost:8080/api/update-profile/${prn}`, { // Use PRN in the URL for the update request
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setFormData.fullName = data.fullName;
                alert("Profile updated successfully!");
                navigate('/profile', { replace: true });
            })
            .catch(error => console.error(error));
    };



    const [showReasonTextarea, setShowReasonTextarea] = useState(false);

    const [stage, setStage] = useState(1);

    const nextStage = () => {
        setStage((prevStage) => prevStage + 1);
    };

    const prevStage = () => {
        setStage((prevStage) => prevStage - 1);
    };


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

            <div className="flex flex-wrap mt-4 gap-4 justify-center sm:mx-4">

                {
                    stage === 1 && (
                        <>

                            <form onSubmit={nextStage} className="flex flex-wrap mt-4 gap-7 justify-center">
                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row" >
                                        <Label htmlFor="base" value="Your full name" />
                                        <Tooltip content="Enter Your Full Name As per Markshit" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0  bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <TextInput id="email1" type="text" icon={PiStudent} placeholder="Ex. Gopal Bharat Patil" name="fullName" value={formData.fullName} onChange={handleChange} />
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="email1" value="Your email" />
                                        <Tooltip content="Enter your email which is used though entire placement" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0  bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <TextInput id="email" type="email" icon={HiMail} placeholder="Ex. gopalpatilrcpit@gmail.com" name="email" value={formData.email} onChange={handleChange} />
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="mobileNO" value="Mobile number" />
                                        <Tooltip content="Enter 10 digit active and whatsapp number" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0  bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <TextInput id="email2" type="number" placeholder="Ex. 9021386468" icon={FaWhatsapp} name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
                                </div>



                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="birthDate" value="Birthdate" />
                                        <Tooltip content="Enter your original birthdate" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0  bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <Datepicker autoHide={false} name="birthDate" value={formData.birthDate} onChange={handleChange} />
                                </div>


                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="gender" value="Gender" />
                                        <Tooltip content="Select Your Gender" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0  bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <Select icon={BiMaleFemale} id="countries" name="gender" value={formData.gender} onChange={handleChange}>
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
                                    <Select id="countries" icon={MdBloodtype} name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} >
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
                                    <TextInput id="adharNumber" icon={FaIdCard} type="number" placeholder="9021 XXXX XXXX" name="adharNumber" value={formData.adharNumber} onChange={handleChange} />
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="email1" value="Cast" />
                                        <Tooltip content="Select Your Cast" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0  bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <Select id="countries" icon={TbCategory} name="cast" value={formData.cast} onChange={handleChange} >
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
                                    <TextInput id="fatherName" type="text" icon={IoManSharp} placeholder="Ex.Bharat Yadav Patil" name="fatherName" value={formData.fatherName} onChange={handleChange} />
                                </div>



                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="mobileNO" value="Father Mobile number" />
                                        <Tooltip content="Enter Your Father 10 digit active and whatsapp number" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0  bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <TextInput id="email2" type="number" placeholder="Ex. 9021386468" icon={FaWhatsapp} name="fatherMobileNumber" value={formData.fatherMobileNumber} onChange={handleChange} />
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="email1" value="Father Occupation*" />
                                        <Tooltip content="Select Father Occuoation" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0  bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <Select id="Occupation" icon={FaBusinessTime} name="fatherOccupation" value={formData.fatherOccupation} onChange={handleChange}>
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
                                    <TextInput id="motherName" type="text" icon={FaFemale} placeholder="Ex. Mother Name" name="motherName" value={formData.motherName} onChange={handleChange} />
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="motherMobileNO" value="Mother Mobile number" />
                                        <Tooltip content="Enter Your Mother 10 digit active and whatsapp number" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <TextInput id="motherMobileNO" type="number" placeholder="Ex. 9021386468" icon={FaWhatsapp} name="motherMobileNumber" value={formData.motherMobileNumber} onChange={handleChange} />
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="motherOccupation" value="Mother Occupation*" />
                                        <Tooltip content="Select Mother Occupation" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <Select id="motherOccupation" icon={FaBusinessTime} name="motherOccupation" value={formData.motherOccupation} onChange={handleChange}>
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
                                    <TextInput id="localAddress" type="text" placeholder="Ex. 123, Street Name" icon={MdHolidayVillage} name="localAddress" value={formData.localAddress} onChange={handleChange} />
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="city" value="City" />
                                        <Tooltip content="Enter Your City" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <TextInput id="city" type="text" placeholder="Ex. Mumbai" icon={FaArrowRightToCity} name="city" value={formData.city} onChange={handleChange} />
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="district" value="District" />
                                        <Tooltip content="Enter Your District" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <TextInput id="district" type="text" placeholder="Ex. Dhule" icon={FaCity} name="district" value={formData.district} onChange={handleChange} />
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="state" value="State" />
                                        <Tooltip content="Enter Your State" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <TextInput id="state" type="text" placeholder="Ex. Maharashtra" icon={GiModernCity} name="state" value={formData.state} onChange={handleChange} />
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="pincode" value="Pincode" />
                                        <Tooltip content="Enter Your Pincode" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <TextInput id="pincode" type="number" placeholder="Ex. 424001" icon={TbMapPinCode} name="pincode" value={formData.pincode} onChange={handleChange} />
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                </div>



                                <Button className="w-1/4 mb-8 mt-4" style={{ marginTop: '30px' }} type="submit">Next</Button>




                            </form>


                        </>
                    )
                }



                {
                    stage == 2 && (
                        <>

                            <form onSubmit={nextStage} className="flex flex-wrap mt-4 gap-7 justify-center">
                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="prnNumber" value="PRN Number" />
                                        <Tooltip content="Enter Your PRN Number" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <TextInput id="prnNumber" type="text" placeholder="Ex. 1234567890" icon={GoNumber} name="prnNumber" value={formData.prnNumber} onChange={handleChange} />
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="10thMarks" value="10th Marks" />
                                        <Tooltip content="Enter Your 10th Marks" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <TextInput id="10thMarks" type="number" placeholder="Ex. 90%" icon={AiOutlinePercentage} name="tenthMarks" value={formData.tenthMarks} onChange={handleChange} />
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="12thDiploma" value="12th/Diploma" />
                                        <Tooltip content="Select 12th or Diploma" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <Select
                                        id="12thDiploma"
                                        icon={MdCastForEducation}
                                        onChange={(e) => {
                                            handle12thDiplomaChange(e);
                                            handleChange(e);
                                        }}
                                        name="twelfthDiploma"
                                        value={formData.twelfthDiploma}
                                    >
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
                                    <TextInput id="12thDiplomaPercentage" type="number" placeholder={`Ex. ${percentageLabel === 'Percentage 12th' ? '85%' : '90%'}`} icon={AiOutlinePercentage} name="twelfthDiplomaPercentage" value={formData.twelfthDiplomaPercentage} onChange={handleChange} />
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="admissionBasedOn" value="Admission Based On" />
                                        <Tooltip content="Select Admission Based On" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <Select id="admissionBasedOn" icon={PiComputerTower} name="admissionBasedOn" value={formData.admissionBasedOn} onChange={handleChange}>
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
                                    <Select id="department" icon={TbDeviceComputerCamera} name="department" value={formData.department} onChange={handleChange}>
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
                                    <Select id="division" icon={MdOutlineAbc} name="division" value={formData.division} onChange={handleChange}>
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
                                    <TextInput id="passoutYear" type="number" placeholder="Ex. 2025" icon={FaCalendarCheck} name="passoutYear" value={formData.passoutYear} onChange={handleChange} />
                                </div>
                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="lgName" value="LG Name*" />
                                        <Tooltip content="Enter Sem 1 SGPA" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <TextInput id="lgName" type="text" icon={FaChalkboardTeacher} placeholder="Ex. Paritosh Prakash Chaudhari" name="lgName" value={formData.lgName} onChange={handleChange} />
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
                                            <TextInput id="sem1SGPA" type="number" icon={LuBadgePercent} placeholder="Ex. 9.5" name="sem1SGPA" value={formData.sem1SGPA} onChange={handleChange} />
                                        </div>

                                        <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                            <div className="mb-2 flex flex-row">
                                                <Label htmlFor="sem1CGPA" value="Sem 1 (CGPA)" />
                                                <Tooltip content="Enter Sem 1 CGPA" animation="duration-1000">
                                                    <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                                </Tooltip>
                                            </div>
                                            <TextInput id="sem1CGPA" type="number" icon={LuBadgePercent} placeholder="Ex. 8.9" name="sem1CGPA" value={formData.sem1CGPA} onChange={handleChange} />
                                        </div>

                                        <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                            <div className="mb-2 flex flex-row">
                                                <Label htmlFor="sem1Backlog" value="Sem 1 (Backlog)" />
                                                <Tooltip content="Enter Sem 1 Backlog" animation="duration-1000">
                                                    <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                                </Tooltip>
                                            </div>
                                            <Select id="sem1Backlog" icon={FaSortAmountDownAlt} name="sem1Backlog" value={formData.sem1Backlog} onChange={handleChange}>
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
                                            <TextInput id="sem2SGPA" type="number" icon={LuBadgePercent} placeholder="Ex. 9.5" name="sem2SGPA" value={formData.sem2SGPA} onChange={handleChange} />
                                        </div>

                                        <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                            <div className="mb-2 flex flex-row">
                                                <Label htmlFor="sem2CGPA" value="Sem 2 (CGPA)" />
                                                <Tooltip content="Enter Sem 2 CGPA" animation="duration-1000">
                                                    <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                                </Tooltip>
                                            </div>
                                            <TextInput id="sem2CGPA" type="number" placeholder="Ex. 8.9" icon={LuBadgePercent} name="sem2CGPA" value={formData.sem2CGPA} onChange={handleChange} />
                                        </div>

                                        <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                            <div className="mb-2 flex flex-row">
                                                <Label htmlFor="sem2Backlog" value="Sem 2 (Backlog)" />
                                                <Tooltip content="Enter Sem 2 Backlog" animation="duration-1000">
                                                    <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                                </Tooltip>
                                            </div>
                                            <Select id="sem2Backlog" icon={FaSortAmountDownAlt} name="sem2Backlog" value={formData.sem2Backlog} onChange={handleChange}>
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
                                    <TextInput id="sem3SGPA" type="number" placeholder="Ex. 9.5" icon={LuBadgePercent} name="sem3SGPA" value={formData.sem3SGPA} onChange={handleChange} />
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="sem1CGPA" value="Sem 3 (CGPA)" />
                                        <Tooltip content="Enter Sem 3 CGPA" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <TextInput id="sem3CGPA" type="number" placeholder="Ex. 8.9" icon={LuBadgePercent} name="sem3CGPA" value={formData.sem3CGPA} onChange={handleChange} />
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="sem3Backlog" value="Sem 3 (Backlog)" />
                                        <Tooltip content="Enter Sem 3 Backlog" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <Select id="division" icon={FaSortAmountDownAlt} name="sem3Backlog" value={formData.sem3Backlog} onChange={handleChange}>
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
                                    <TextInput id="sem4SGPA" type="number" placeholder="Ex. 9.5" icon={LuBadgePercent} name="sem4SGPA" value={formData.sem4SGPA} onChange={handleChange} />
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="sem4CGPA" value="Sem 4 (CGPA)" />
                                        <Tooltip content="Enter Sem 4 CGPA" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <TextInput id="sem4CGPA" type="number" placeholder="Ex. 8.9" icon={LuBadgePercent} name="sem4CGPA" value={formData.sem4CGPA} onChange={handleChange} />
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="sem4Backlog" value="Sem 4 (Backlog)" />
                                        <Tooltip content="Enter Sem 4 Backlog" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <Select id="division" icon={FaSortAmountDownAlt} name="sem4Backlog" value={formData.sem4Backlog} onChange={handleChange}>
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
                                    <TextInput id="sem5SGPA" type="number" placeholder="Ex. 9.5" icon={LuBadgePercent} name="sem5SGPA" value={formData.sem5SGPA} onChange={handleChange} />
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="sem5CGPA" value="Sem 5 (CGPA)" />
                                        <Tooltip content="Enter Sem 1 CGPA" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <TextInput id="sem5CGPA" type="number" placeholder="Ex. 8.9" icon={LuBadgePercent} name="sem5CGPA" value={formData.sem5CGPA} onChange={handleChange} />
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="sem5Backlog" value="Sem 5 (Backlog)" />
                                        <Tooltip content="Enter Sem 5 Backlog" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <Select id="division" icon={FaSortAmountDownAlt} name="sem5Backlog" value={formData.sem5Backlog} onChange={handleChange}>
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
                                    <TextInput id="sem6SGPA" type="number" placeholder="Ex. 9.5" icon={LuBadgePercent} name="sem6SGPA" value={formData.sem6SGPA} onChange={handleChange} />
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="sem1CGPA" value="Sem 6 (CGPA)" />
                                        <Tooltip content="Enter Sem 6 CGPA" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <TextInput id="sem6CGPA" type="number" placeholder="Ex. 8.9" icon={LuBadgePercent} name="sem6CGPA" value={formData.sem6CGPA} onChange={handleChange} />
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="sem6Backlog" value="Sem 6 (Backlog)" />
                                        <Tooltip content="Enter Sem 6 Backlog" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <Select id="division" icon={FaSortAmountDownAlt} name="sem6Backlog" value={formData.sem6Backlog} onChange={handleChange}>
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
                                    <TextInput id="overallCGPA" type="number" placeholder="Ex. 8.8" icon={LuBadgePercent} name="overallCGPA" value={formData.overallCGPA} onChange={handleChange} />
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="anyLiveKTs" value="Any Live KT's" />
                                        <Tooltip content="Select Yes or No" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <Select id="anyLiveKTs" icon={FaSortAmountDownAlt} name="anyLiveKTs" value={formData.anyLiveKTs} onChange={handleChange}>
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
                                    <Select
                                        id="anyGapDuringEducation"
                                        icon={BsFileEarmarkBreakFill}
                                        onChange={(e) => {
                                            handleAnyGapDuringEducationChange(e);
                                            handleChange(e);
                                        }}
                                        name="anyGapDuringEducation"
                                        value={formData.anyGapDuringEducation}
                                    >
                                        <option>Select....</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </Select>

                                </div>
                                <div className="w-1/3 md:w-1/3 lg:w-1/4">
                                    {showReasonTextarea && (
                                        <>
                                            <div className="mb-2 flex flex-row">
                                                <Label htmlFor="gapReason" value="Reason(If any gap during Education)" />
                                                <Tooltip content="Select Yes or No" animation="duration-1000">
                                                    <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                                </Tooltip>
                                            </div>
                                            <div>
                                                <Textarea id="comment" placeholder="Leave a comment..." rows={4} name="gapReason" value={formData.gapReason} onChange={handleChange} />
                                            </div>

                                        </>
                                    )}
                                </div>
                                <div className="w-2/3 md:w-1/3 lg:w-1/4"></div>
                                <div className="w-2/3 md:w-1/3 lg:w-1/4"></div>
                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                </div>

                                <Button className="w-1/4 mb-8 mt-4" onClick={prevStage}>Previous</Button>
                                <Button className="w-1/4 mb-8 mt-4" type="submit">Next</Button>




                            </form>

                        </>
                    )
                }

                {
                    stage == 3 && (
                        <>
                            <form onSubmit={nextStage} className="flex flex-wrap mt-4 gap-4 justify-center">

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="areaOfInterest" value="Area of Interest*" />
                                        <Tooltip content="Choose your area of Interest" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <Select id="anyGapDuringEducation" name="areaOfInterest" value={formData.areaOfInterest} onChange={handleChange}>
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
                                    <Select id="anyGapDuringEducation" name="areaOfInterest">
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
                                    <Textarea id="Aboutyou" placeholder="I am a software engineer" rows={4} name="aboutYou" value={formData.aboutYou} onChange={handleChange} />
                                </div>




                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="projectTitile1" value="Project 1 (Title)" />
                                        <Tooltip content="Enter Your Project Title" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <TextInput id="projectTitile1" type="text" placeholder="Ex. Rental Website" icon={MdTitle} name="projectTitle1" value={formData.projectTitle1} onChange={handleChange} />
                                </div>
                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="projectTitile1" value="Github/Project link" />
                                        <Tooltip content="Enter Your Project Title" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <TextInput id="projectTitile1" type="text" placeholder="https://github.com" icon={FaLink} name="projectLink1" value={formData.projectLink1} onChange={handleChange} />
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="aboutYou" value="Project 1(Discription)" />
                                        <Tooltip content="Write About Yourself" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <Textarea id="projectDiscription" placeholder="Project is based on....." rows={4} name="projectDescription1" value={formData.projectDescription1} onChange={handleChange} />
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="projectTitile2" value="Project 2 (Title)" />
                                        <Tooltip content="Enter Your Project Title" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <TextInput id="projectTitile2" type="text" placeholder="Ex. Rental Website" icon={MdTitle} name="projectTitle2" value={formData.projectTitle2} onChange={handleChange} />
                                </div>
                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="projectlink2" value="Github/Project link" />
                                        <Tooltip content="Enter Your Project Title" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <TextInput id="projectLink" type="text" placeholder="https://github.com" icon={FaLink} name="projectLink2" value={formData.projectLink2} onChange={handleChange} />
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="projectdisceiption" value="Project 2(Discription)" />
                                        <Tooltip content="Write About Yourself" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <Textarea id="Aboutyou" placeholder="Project is based on....." rows={4} name="projectDescription2" value={formData.projectDescription2} onChange={handleChange} />
                                </div>


                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="professionalProfileLink" value="Personal Portfolio link" />
                                        <Tooltip content="Enter Your PPersonal Portfolio link" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <TextInput id="personalPortfolioLink" type="text" placeholder="https://example.com" icon={MdOutlinePersonPin} name="personalPortfolioLink" value={formData.personalPortfolioLink} onChange={handleChange} />
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="githubLink" value="Github link" />
                                        <Tooltip content="Enter Your Github Profile link" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <TextInput id="githubLink" type="text" placeholder="https://github.com" icon={FaGithub} name="githubLink" value={formData.githubLink} onChange={handleChange} />
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="linkedinLink" value="Linkedin link" />
                                        <Tooltip content="Enter Your Linkedin Profile link" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <TextInput id="linkedinLink" type="text" placeholder="https://linkedin.com" icon={FaLinkedin} name="linkedinLink" value={formData.linkedinLink} onChange={handleChange} />
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="instagramLink" value="Instagram link" />
                                        <Tooltip content="Enter Your Instagram Profile link" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <TextInput id="instagramLink" type="text" placeholder="https://instagram.com" icon={FaInstagram} name="instagramLink" value={formData.instagramLink} onChange={handleChange} />
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="twitterLink" value="Twitter link" />
                                        <Tooltip content="Enter Your Twitter Profile link" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <TextInput id="twitterLink" type="text" placeholder="https://twitter.com" icon={FaXTwitter} name="twitterLink" value={formData.twitterLink} onChange={handleChange} />
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="leetcodeLink" value="LeetCode link" />
                                        <Tooltip content="Enter Your LeetCode Profile link" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <TextInput id="leetcodeLink" type="text" placeholder="https://leetcode.com" icon={SiLeetcode} name="leetcodeLink" value={formData.leetcodeLink} onChange={handleChange} />
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="geeksForGeeksLink" value="GeeksForGeeks link" />
                                        <Tooltip content="Enter Your GeeksForGeeks Profile link" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <TextInput id="geeksForGeeksLink" type="text" placeholder="https://geeksforgeeks.org" icon={SiGeeksforgeeks} name="geeksForGeeksLink" value={formData.geeksForGeeksLink} onChange={handleChange} />
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="codechefLink" value="Codechef link" />
                                        <Tooltip content="Enter Your Codechef Profile link" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <TextInput id="codechefLink" type="text" placeholder="https://codechef.com" icon={SiCodechef} name="codechefLink" value={formData.codechefLink} onChange={handleChange} />
                                </div>

                                <div className="w-2/3 md:w-1/3 lg:w-1/4">
                                    <div className="mb-2 flex flex-row">
                                        <Label htmlFor="hackerRankLink" value="HackerRank link" />
                                        <Tooltip content="Enter Your HackerRank Profile link" animation="duration-1000">
                                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0 bg-slate-300 dark:bg-slate-800'>i</Button>
                                        </Tooltip>
                                    </div>
                                    <TextInput id="hackerRankLink" type="text" placeholder="https://hackerrank.com" icon={FaHackerrank} name="hackerRankLink" value={formData.hackerRankLink} onChange={handleChange} />
                                </div>
                                <div className="w-2/3 md:w-1/3 lg:w-1/4"></div>
                                <Button className="w-1/4 mb-8 mt-4" onClick={prevStage}>Previous</Button>
                                <Button className="w-1/4 mb-8 mt-4" onClick={handleSubmit} type="submit">Submit</Button>
                            </form>

                        </>
                    )
                }





            </div>

            <Footer_page />
        </>
    )
}

export default Profile_completion