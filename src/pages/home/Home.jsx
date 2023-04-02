/** @format */

import React from "react";
import { Navbar } from "../../components/navbar/Navbar";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Feature } from "../../components/feature/Feature";
import "./home.scss";
import { FeatureChart } from "../../components/featureChart/FeatureChart";
import { Chart } from "../../components/chart/Chart";
import { Tablelist } from "../../components/tablelist/Tablelist";

export const Home = () => {
  return (
    <div className='home'>
      <Sidebar />
      <div className='container'>
        <Navbar />
        <div className='features'>
          <Feature type='user' />
          <Feature type='order' />
          <Feature type='earning' />
          <Feature type='balance' />
        </div>
        <div className='charts'>
          <FeatureChart />
          <Chart />
        </div>
        <div className='listContainer'>
          <div className='listTitle'>Latest Transactions</div>
          <Tablelist />
        </div>
      </div>
    </div>
  );
};
