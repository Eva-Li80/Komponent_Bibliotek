import React from "react";
import Header from "../Components/F-J Components/Header";
import Sidebar from "../Components/P-T Components/Sidebar";
import data from "../company.json";
import AboutWorker from "../Components/A-E Components/AboutWorker";
import "./about.css"
const About = () => {
  const company = data.construction_company;

  return (
    <div>
      <Header title="About the comany" />
      <Sidebar />
      <div className="main company-container ">
        <div className="company">
          <h2>Construction Company</h2>
          <h1>Name: {company.name}</h1>
          <h3>Home Town: {company.home_town}</h3>
        </div>
        <div className="backstory">
          <h2>Backstory</h2>
          <p>{data.backstory}</p>
        </div>
      </div>
        <AboutWorker />
    </div>
  );
};

export default About;
