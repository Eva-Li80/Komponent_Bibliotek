import React from "react";
import Sidebar from "../Components/P-T Components/Sidebar";
import Header from "../Components/F-J Components/Header";
import NavigationBar from "../Components/K-O Components/Navigationbar";
import "./container.css"

const links = [
  { text: "Home", url: "/" },
  { text: "LinkedIn", url: "https://www.linkedin.com/in/eva-li-n%C3%A4tynki-bod%C3%A9n-4a3b1021b/" },
  { text: "Github", url: "https://github.com/Eva-Li80" },
];

const Contact = () => {
  return (
    <div>
      <Header title="Contact" />
      <Sidebar />
      <div className="containertvå">
        <h1>Contact us:</h1>
        <NavigationBar className="nav" classNamee="li"  links={links} />
      </div>
    </div>
  );
};

export default Contact;
