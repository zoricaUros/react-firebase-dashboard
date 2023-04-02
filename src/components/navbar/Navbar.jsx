/** @format */

import React from "react";
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='wrapper'>
        <div className='search'>
          <input type='text' placeholder='Search...' />
          <SearchOutlinedIcon />
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageIcon />
            English
          </div>
          <div className='item'>
            <DarkModeIcon />
          </div>
          <div className='item'>
            <AdUnitsIcon />
          </div>
          <div className='item'>
            <MailOutlineIcon />
          </div>
          <div className='item'>
            <FormatListBulletedIcon />
          </div>
          <div className='item'>
            <img
              src='./images/user-img.png'
              alt='user images'
              className='user-img'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
