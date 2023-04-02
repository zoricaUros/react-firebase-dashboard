/** @format */

import React from "react";
import "./feature.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Person2Icon from "@mui/icons-material/Person2";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";
import BalanceIcon from "@mui/icons-material/Balance";

export const Feature = ({ type }) => {
  let data;

  // just for fun
  const amount = 120;
  const per = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <Person2Icon
            className='icon'
            style={{
              color: "rgba(117, 65, 92, 0.8)",
              backgroundColor: "rgba(251, 177, 186, 0.8)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartIcon
            className='icon'
            style={{
              color: "rgba(132, 88, 6, 0.8)",
              backgroundColor: "rgba(244, 243, 124, 0.8)",
            }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "ERARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <AddBusinessIcon
            className='icon'
            style={{
              color: "rgba(4, 127, 49, 0.8)",
              backgroundColor: "rgba(196, 235, 245, 0.8)",
            }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: (
          <BalanceIcon
            className='icon'
            style={{
              color: "rgba(143, 6, 136, 0.8)",
              backgroundColor: "rgba(244, 196, 245, 0.8)",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className='feature'>
      <div className='left'>
        <span className='title'>{data.title}</span>
        <span className='counter'>
          {data.isMoney && "$"} {amount}
        </span>
        <span className='link'>{data.link}</span>
      </div>
      <div className='right'>
        <div className='percent positive'>
          <KeyboardArrowUpIcon />
          {per}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};
