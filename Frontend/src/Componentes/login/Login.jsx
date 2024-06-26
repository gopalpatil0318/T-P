import React, { useState } from 'react';
import { DarkThemeToggle } from "flowbite-react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Avatar } from "flowbite-react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [prn, setPrn] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Store PRN in local storage
        localStorage.setItem('prn', prn);
        // Navigate to /profile_completion
        navigate('/profile_completion');
    };

    return (
        <div>
            <DarkThemeToggle />
            <div className='min-h-screen w flex items-center justify-center'>
                <form className="flex lg:w-1/3  flex-col gap-4" onSubmit={handleLogin}>
                    <Avatar img="./img/main_logo.jpg" size="lg" />
                    <h1 className='text-2xl font-medium italic text-center text-gray-900 dark:text-white'>
                        R C Patel Institute Of Technology,Shirpur</h1>
                    <h1 className='text-4xl font-semibold  text-center text-gray-900 dark:text-white'>Login</h1>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="username3" value="Username(PRN)" />
                        </div>
                        <TextInput id="username3" placeholder="Bonnie Green" addon="@" required onChange={(e) => setPrn(e.target.value)} />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Your password" />
                        </div>
                        <TextInput id="password1" type="password" addon="*" required />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Remember me</Label>
                    </div>
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        </div>
    );
};

export default Login;
