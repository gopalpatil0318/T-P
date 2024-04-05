import React from 'react'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import Header from '../Header/Headers';
import { Tooltip } from "flowbite-react";
import { Card } from "flowbite-react";
import { Footer } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { Select } from "flowbite-react";
import { Datepicker } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const Profile_completion = () => {
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
                <div className="flex flex-wrap mt-4 gap-4 justify-center">
                <div className="w-full md:w-1/3 lg:w-1/4">
                    <div className="mb-2 flex flex-row" >
                        <Label htmlFor="base" value="Your full name" />
                        <Tooltip content="Enter Your Full Name As per Markshit" animation="duration-1000">
                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0  bg-slate-300 dark:bg-slate-800'>i</Button>
                        </Tooltip>
                    </div>
                    <TextInput id="email1" type="text" placeholder="Ex. Gopal Bharat Patil" required />
                </div>
                
                <div className="w-full md:w-1/3 lg:w-1/4">
                    <div className="mb-2 flex flex-row">
                        <Label htmlFor="email1" value="Your email" />
                        <Tooltip content="Enter your email which is used though entire placement" animation="duration-1000">
                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0  bg-slate-300 dark:bg-slate-800'>i</Button>
                        </Tooltip>
                    </div>
                    <TextInput id="email" type="email" icon={HiMail} placeholder="Ex. gopalpatilrcpit@gmail.com" required />
                </div>

                <div className="w-full md:w-1/3 lg:w-1/4">
                    <div className="mb-2 flex flex-row">
                        <Label htmlFor="mobileNO" value="Mobile number" />
                        <Tooltip content="Enter 10 digit active and whatsapp number" animation="duration-1000">
                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0  bg-slate-300 dark:bg-slate-800'>i</Button>
                        </Tooltip>
                    </div>
                    <TextInput id="email2" type="email" placeholder="Ex. 9021386468"  addon="+91" required />
                </div>


                <div className="w-full md:w-1/3 lg:w-1/4">
                    <div className="mb-2 flex flex-row">
                        <Label htmlFor="birthDate" value="Birthdate" />
                        <Tooltip content="Enter your original birthdate" animation="duration-1000">
                            <Button size="xs" className='ml-2 h-5 w-5 text-balance pt-0  bg-slate-300 dark:bg-slate-800'>i</Button>
                        </Tooltip>
                    </div>
                    <Datepicker autoHide={false} />
                </div>


                <div className="w-full md:w-1/3 lg:w-1/4">
                    <div className="mb-2">
                        <Label htmlFor="email3" value="Your email" />
                    </div>
                    <Select id="countries" required>
        <option>United States</option>
        <option>Canada</option>
        <option>France</option>
        <option>Germany</option>
      </Select>
                </div>
                <div className="w-full md:w-1/3 lg:w-1/4">
                    <div className="mb-2">
                        <Label htmlFor="password3" value="Your password" />
                    </div>
                    <TextInput id="password3" type="password" required />
                </div>

                <div className="w-full md:w-1/3 lg:w-1/4">
                    <div className="mb-2">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
                </div>
                <div className="w-full md:w-1/3 lg:w-1/4">
                    <div className="mb-2">
                        <Label htmlFor="password1" value="Your password" />
                    </div>
                    <TextInput id="password1" type="password" required />
                </div>
                <div className="w-full md:w-1/3 lg:w-1/4">
                    <div className="mb-2">
                        <Label htmlFor="email2" value="Your email" />
                    </div>
                    <TextInput id="email2" type="email" placeholder="name@flowbite.com" required />
                </div>
                <div className="w-full md:w-1/3 lg:w-1/4">
                    <div className="mb-2">
                        <Label htmlFor="password2" value="Your password" />
                    </div>
                    <TextInput id="password2" type="password" required />
                </div>
                <div className="w-full md:w-1/3 lg:w-1/4">
                    <div className="mb-2">
                        <Label htmlFor="email3" value="Your email" />
                    </div>
                    <TextInput id="email3" type="email" placeholder="name@flowbite.com" required />
                </div>
                <div className="w-full md:w-1/3 lg:w-1/4">
                    <div className="mb-2">
                        <Label htmlFor="password3" value="Your password" />
                    </div>
                    <TextInput id="password3" type="password" required />
                </div>
                <div className="w-full md:w-1/3 lg:w-1/4">
                    <div className="mb-2">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
                </div>
                <div className="w-full md:w-1/3 lg:w-1/4">
                    <div className="mb-2">
                        <Label htmlFor="password1" value="Your password" />
                    </div>
                    <TextInput id="password1" type="password" required />
                </div>
                <div className="w-full md:w-1/3 lg:w-1/4">
                    <div className="mb-2">
                        <Label htmlFor="email2" value="Your email" />
                    </div>
                    <TextInput id="email2" type="email" placeholder="name@flowbite.com" required />
                </div>
                <div className="w-full md:w-1/3 lg:w-1/4">
                    <div className="mb-2">
                        <Label htmlFor="password2" value="Your password" />
                    </div>
                    <TextInput id="password2" type="password" required />
                </div>
                <div className="w-full md:w-1/3 lg:w-1/4">
                    <div className="mb-2">
                        <Label htmlFor="email3" value="Your email" />
                    </div>
                    <TextInput id="email3" type="email" placeholder="name@flowbite.com" required />
                </div>
                <div className="w-full md:w-1/3 lg:w-1/4">
                    <div className="mb-2">
                        <Label htmlFor="password3" value="Your password" />
                    </div>
                    <TextInput id="password3" type="password" required />
                </div>
                <div className="w-full md:w-1/3 lg:w-1/4">
                    <div className="mb-2">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
                </div>
                <div className="w-full md:w-1/3 lg:w-1/4">
                    <div className="mb-2">
                        <Label htmlFor="password1" value="Your password" />
                    </div>
                    <TextInput id="password1" type="password" required />
                </div>
                <div className="w-full md:w-1/3 lg:w-1/4">
                    <div className="mb-2">
                        <Label htmlFor="email2" value="Your email" />
                    </div>
                    <TextInput id="email2" type="email" placeholder="name@flowbite.com" required />
                </div>
                <div className="w-full md:w-1/3 lg:w-1/4">
                    <div className="mb-2">
                        <Label htmlFor="password2" value="Your password" />
                    </div>
                    <TextInput id="password2" type="password" required />
                </div>
                <div className="w-full md:w-1/3 lg:w-1/4">
                    <div className="mb-2">
                        <Label htmlFor="email3" value="Your email" />
                    </div>
                    <TextInput id="email3" type="email" placeholder="name@flowbite.com" required />
                </div>
                <div className="w-full md:w-1/3 lg:w-1/4">
                    <div className="mb-2">
                        <Label htmlFor="password3" value="Your password" />
                    </div>
                    <TextInput id="password3" type="password" required />
                </div>
                </div>
                
                    <Button className="w-1/3 mb-8 mt-4" type="submit">Submit</Button>
                
            </form>

            <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            <Footer.Brand
              href="https://flowbite.com"
              src="./img/main_logo.jpg"
              alt="Flowbite Logo"
              name="Training And Placement"
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Flowbite</Footer.Link>
                <Footer.Link href="#">Tailwind CSS</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Github</Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Training And Placement™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>

        </>
    )
}

export default Profile_completion