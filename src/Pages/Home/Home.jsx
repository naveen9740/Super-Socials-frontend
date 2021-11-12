import React from "react";
import "./Home.css";
import { Topbar } from "../../Components/Topbar/Topbar";
import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { Feed } from "../../Components/Feed/Feed";
import { Rightbar } from "../../Components/Rightbar/Rightbar";

export const Home = () => {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar />
      </div>
    </>
  );
};
// 1.49.00
