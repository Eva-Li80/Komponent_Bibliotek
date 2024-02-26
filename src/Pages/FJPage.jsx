import React from "react";
import Feed from "../Components/F-J Components/Feed";
import Card from "../Components/A-E Components/Card";
import Form from "../Components/F-J Components/Form"
import { useState } from "react";
import HamburgerMenu from "../Components/F-J Components/HamburgerMenu";
import Icon from "../Components/F-J Components/Icon";
import Header from "../Components/F-J Components/Header";
import Sidebar from "../Components/P-T Components/Sidebar";

const FJPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

 const handleSubmit = (newname, newemail) => {
  setName(newname)
  setEmail(newemail)

 }

  return (
    <>
      <Header title="Komponenter som börjar på bokstav F, G, H, I eller J"/>
      <Sidebar/>
   
    <div className="container">
      <Card title="Feed">
        <Feed />
      </Card>
      <Card title="Form">
        <p>{name}</p>
        <p>{email}</p>
        <Form onClick={handleSubmit}/>
      </Card>
      <Card title="Hamburger menu"> 
      <HamburgerMenu/></Card>
      <Card title="Icon">
        <Icon icon={<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5-10-5-10 5z" />} size={48} color="blue"/>
      </Card>
    </div>
    </>
  );
};

export default FJPage;
