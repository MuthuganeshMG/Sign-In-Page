import React from 'react';
import { HiUserGroup } from "react-icons/hi2";
import { FaRegUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoPhonePortrait } from "react-icons/io5";
import { IoLockClosedOutline } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { useState } from 'react';
import './SignIn.css';

export default function Login() {
    const [action, setAction] = useState("Sign In");
    return (
        <div className='login_container'>
            <div className="login_logo">
                <div className="head-icon">
                    <HiUserGroup />
                </div>
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
            </div>
            <div className="input-container">
                {
                    action === "Sign Up" ? "" :
                        <div className="inputs">

                            <span className="icon">
                                <FaRegUser />
                            </span>
                            <input type="text" className='name' placeholder='username' />

                        </div>
                }
                {
                    action === "Sign In" ? "" :
                        <div className="inputs">
                            <span className="icon">
                                <FaUserAlt />
                            </span>
                            <input type="text" className='name' placeholder='username' />
                        </div>
                }
                {
                    action === "Sign In" ? "" :
                        <div className="inputs">
                            <span className="icon">
                                <MdEmail />
                            </span>
                            <input type="email" className='email' placeholder='email' />
                        </div>
                }
                {
                    action === "Sign In" ? "" :

                        <div className="inputs">
                            <span className="icon">
                                <IoPhonePortrait />
                            </span>
                            <input type="number" className='phone' placeholder='phonenumber' />
                        </div>
                }
                {
                    action === "Sign Up" ? "" :
                        <div className="inputs">
                            <span className="icon">
                                <IoLockClosedOutline />
                            </span>
                            <input type="password" className='password' placeholder='password' />
                        </div>
                }
                {
                    action === "Sign In" ? "" :
                        <div className="inputs">
                            <span className="icon">
                                <FaLock />
                            </span>
                            <input type="password" className='password' placeholder='password' />
                        </div>
                }
                {
                    action === "Sign In" ? "" :
                        <div className="inputs">
                            <span className="icon">
                                <FaLock />
                            </span>
                            <input type="pasword" className='confirmpasword' placeholder='confirmpasword' />
                        </div>
                }

            </div>
            {
                action === "Sign Up" ? <div></div> :
                    <div className="forgot">
                        forgot password? <span>clickMe</span>
                    </div>
            }
            <div className="submit-container">
                <button
                    className={action === "Sign In" ? "submit gray" : "submit"}
                    onClick={() => { setAction('Sign In') }}
                >
                    Sign In
                </button>
                <button
                    className={action === "Sign Up" ? "submit gray" : "submit"}
                    onClick={() => { setAction('Sign Up') }}
                >
                    Sign Up
                </button>
            </div>
        </div >
    )
}
