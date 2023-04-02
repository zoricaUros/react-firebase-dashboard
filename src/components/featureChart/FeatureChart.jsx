/** @format */

import React from "react";
import "./featureChart.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const FeatureChart = () => {
  return (
    <div className='featureChart'>
      <div className='top'>
        <h3 className='title'>Total Revenue</h3>
        <MoreVertIcon fontSize='small' />
      </div>
      <div className='bottom'>
        <div className='featureChartDisplay'>
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className='title'>Total sales made today</p>
        <p className='amount'>$540</p>
        <p className='desc'>
          Some transition proccess is in order, please take a look. Chack your
          last payment.
        </p>
        <div className='summary'>
          <div className='item'>
            <div className='itemTitle'>Target</div>
            <div className='itemResult negative'>
              <KeyboardArrowDownIcon fontSize='small' />
              <div className='resultAmount'>$12.4k</div>
            </div>
          </div>
          <div className='item'>
            <div className='itemTitle'>Last Week</div>
            <div className='itemResult positive'>
              <KeyboardArrowUpIcon fontSize='small' />
              <div className='resultAmount'>$12.4k</div>
            </div>
          </div>
          <div className='item'>
            <div className='itemTitle'>Last Month</div>
            <div className='itemResult positive'>
              <KeyboardArrowUpIcon fontSize='small' />
              <div className='resultAmount'>$12.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
