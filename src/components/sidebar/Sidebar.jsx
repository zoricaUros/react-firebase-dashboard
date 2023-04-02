/** @format */

import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ProductionQuantityLimitsOutlinedIcon from "@mui/icons-material/ProductionQuantityLimitsOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ChargingStationOutlinedIcon from "@mui/icons-material/ChargingStationOutlined";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import SpeakerGroupOutlinedIcon from "@mui/icons-material/SpeakerGroupOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import DisplaySettingsOutlinedIcon from "@mui/icons-material/DisplaySettingsOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <span className='logo'>adminDashboard</span>
        <AdminPanelSettingsIcon className='icon' />
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <li>
            <Link to='/' style={{ textDecoration: "none" }}>
              <DashboardIcon className='icon' />
              <span>Dashboard</span>
            </Link>
          </li>
          <p className='title'>LISTS</p>
          <Link to='/users' style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineOutlinedIcon className='icon' />
              <span>Users</span>
            </li>
          </Link>
          <li>
            <ProductionQuantityLimitsOutlinedIcon className='icon' />
            <span>Products</span>
          </li>
          <li>
            <BookmarkBorderOutlinedIcon className='icon' />
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className='icon' />
            <span>Delivery</span>
          </li>
          <p className='title'>USEFUL</p>
          <li>
            <ChargingStationOutlinedIcon className='icon' />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon className='icon' />
            <span>Notification</span>
          </li>
          <p className='title'>SERVICE</p>
          <li>
            <SpeakerGroupOutlinedIcon className='icon' />
            <span>System Health</span>
          </li>
          <li>
            <LoginOutlinedIcon className='icon' />
            <span>Logs</span>
          </li>
          <li>
            <DisplaySettingsOutlinedIcon className='icon' />
            <span>Settings</span>
          </li>
          <p className='title'>USER</p>
          <li>
            <AccountBoxOutlinedIcon className='icon' />
            <span>Profile</span>
          </li>
          <li>
            <Link to='/signup' style={{ textDecoration: "none" }}>
              <VpnKeyIcon className='icon' />
              <span>Sign Up</span>
            </Link>
          </li>
          <li>
            <Link to='/login' style={{ textDecoration: "none" }}>
              <LogoutOutlinedIcon className='icon' />
              <span>Log in</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className='bottom'>
        <div className='colorOption'></div>
        <div className='colorOption'></div>
      </div>
    </div>
  );
};
