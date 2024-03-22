import React, { useState } from 'react';
import {
    FaComment,
    FaUser,
    FaBars,
    FaHome,
    FaCalendar,
    FaLaptopCode,
    FaAddressBook,
    FaCodepen
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import './Dashvertical.css';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path: "/dash",
            name: "Home",
            icon: <FaHome />
        },
        {
            path: "/Students",
            name: "User",
            icon: <FaUser />
        },
        {
            path: "/Online-course",
            name: "courses",
            icon: <FaLaptopCode />
        },
        {
            path: "/Assignment",
            name: "Assessment",
            icon: <FaAddressBook />
        },
        {
            path: "/Schedule",
            name: "Schedule",
            icon: <FaCalendar />
        },
        {
            path: "/Discussion",
            name: "Discussion",
            icon: <FaComment />
        },
        {
            path: "/Settings",
            name: "Settings",
            icon: <FaCodepen />
        }
    ];

    return (
        <div className="container gb">
        <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
            <div className="top_section">
                <img style={{display: isOpen ? "block" : "none"}} className="logoo" src="https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/k7zzanuzvg0n0cjspuqq"></img>
                <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            {
                menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="linkd" activeclassName="active">
                        <div className="iconf">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main>{children}</main>
     </div>
    );
};

export default Sidebar;
