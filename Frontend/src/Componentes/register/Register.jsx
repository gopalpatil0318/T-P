import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DarkThemeToggle } from "flowbite-react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Avatar } from "flowbite-react";


const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    password:"",
    confirmPassword:"",
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
    fetch('http://localhost:8080/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));


    alert("Student Registered Successfully! ✅")

    navigate('/login', { replace: true });
  };


  return (
    <div>
      <DarkThemeToggle />
      <div className='min-h-screen  flex items-center justify-center'>
        <form className="flex lg:w-1/3  flex-col gap-4" onSubmit={handleSubmit}>
          <Avatar img="./img/main_logo.jpg" size="lg" />
          <h1 className='text-2xl font-medium italic text-center text-gray-900 dark:text-white'>
            R C Patel Institute Of Technology,Shirpur</h1>
          <h1 className='text-4xl font-semibold  text-center text-gray-900 dark:text-white'>Register</h1>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="fullName" value="Full Name" />
            </div>
            <TextInput id="fullName" name="fullName" placeholder="John Doe" required shadow value={formData.fullName} onChange={handleChange}/>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your email" />
            </div>
            <TextInput id="email2" name="email" type="email" placeholder="name@flowbite.com" required shadow value={formData.email} onChange={handleChange}/>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="username3" value="Username(PRN)" />
            </div>
            <TextInput id="username3" name="prnNumber" type="number" placeholder="221201014" required shadow value={formData.prnNumber} onChange={handleChange}/>
           
          </div>
      

          <div>
            <div className="mb-2 block">
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" name="password" type="password" placeholder="**********" required value={formData.password} onChange={handleChange}/>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password2" value="Confirm password" />
            </div>
            <TextInput id="password2" name="confirmPassword" type="password" placeholder="**********" required value={formData.confirmPassword} onChange={handleChange}/>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  )
}

export default Register
