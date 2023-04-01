import React, { useState } from 'react';
import {
  HiUserAdd,
  HiUser,
  HiDocumentText,
  HiX,
  HiLogout,
} from 'react-icons/hi';
import { FaBars } from 'react-icons/fa';
import { GrDocumentText } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import './SidebarAdmin.css';

const SidebarAdmin = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: '/',
      name: 'Test Psikologi',
      icon: <HiUserAdd />,
    },
    {
      path: '/about',
      name: 'GO Karir',
      icon: <HiUser />,
    },
    {
      path: '/analytics',
      name: 'Hapus Loker',
      icon: <HiDocumentText />,
    },
  ];
  return (
    <div className="sidebarmain">
      <div
        style={{ width: isOpen ? '250px' : '50px' }}
        className="sidebar d-flex flex-column mb-3"
      >
        <div className="top_section">
          <div
            style={{
              display: !isOpen ? 'none' : '',
            }}
            className="logosidebar"
          >
            {/* <a className="navbar-brand1" href="#">
                            <img src={go} width="" />
                        </a> */}
          </div>
          <div
            style={{
              marginLeft: isOpen ? '200px' : '0px',
            }}
            className="bars"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{
                display: isOpen ? 'block' : 'none',
              }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
        <div className="d-flex flex-row ">
          <div
            style={{
              marginTop: isOpen ? '230%' : '1200%',
              marginLeft: isOpen ? '20px' : '1200%',
            }}
          >
            <HiLogout />
          </div>
          <div
            style={{
              marginTop: isOpen ? '230%' : '1200%',
              display: isOpen ? 'block' : 'none',
            }}
          >
            <p>Logout</p>
          </div>
        </div>
      </div>

      <main>{children}</main>
    </div>
  );
};

export default SidebarAdmin;
