import React from "react";
import Header from "../Components/F-J Components/Header";
import Sidebar from "../Components/P-T Components/Sidebar";
import "./main.css"
import Notification from "../Components/K-O Components/Notification";
import data from "../assets/json/componet.json"
import List from "../Components/K-O Components/List";

const Home = () => {
  const compo = data.components
  return (
    <div>
      <Header title="Component Library" />
      <Sidebar />
      <div className="main">
        <Notification title="Welcome" message="- Here you can find some components name and info about them -"/>
        <List data={compo}/>
      </div>
    </div>
  );
};

export default Home;
