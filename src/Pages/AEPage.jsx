import React, { useState } from "react";
import Card from "../Components/A-E Components/Card";
import AccordionUse from "../Components/A-E Components/AccordionUse";
import Button from "../Components/A-E Components/Button";
import Carousel from "../Components/A-E Components/Caraousel";
import BentoMenu from "../Components/A-E Components/BentoMenu";
import Breadcrumb from "../Components/A-E Components/BreadCrumb";
import Checkbox from "../Components/A-E Components/Checkbox";
import DatePicker from "../Components/A-E Components/DatePicker";
import DownMenu from "../Components/A-E Components/DownMenuButton";

import Header from "../Components/F-J Components/Header";
import Sidebar from "../Components/P-T Components/Sidebar";
import DropDownBox from "../Components/A-E Components/DropDownBox";

import DetailsDropDownBox from "../Components/A-E Components/DetailsDropDownBox";
import DropDown from "../Components/A-E Components/DropDown";
const AEPage = () => {
  const [buttonContent, setButtonContent] = useState("Hejsan");

  const handleButton = () => {
    alert("hej button");
  };

  const handleButtontwo = () => {
    setButtonContent("Ny knapptext"); // Uppdatera knappens innehåll
  };

  const image = [
    "https://as1.ftcdn.net/v2/jpg/06/25/60/00/1000_F_625600094_DjF8GiamuveCkvaeDcv6S2t9RDXEcPoi.jpg",
    "https://m.media-amazon.com/images/I/815qtzaP9iL._SL1500_.jpg",
    "https://macaulay.cuny.edu/seminars/drabik09/images/4/4d/Godfather.jpg",
  ];

  const steps = ["Hem", "Produkter", "Elektronik", "Mobiltelefoner", "iPhone"];

  //Checkbox
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  //downmenu
  const options = ["Option 1", "Option 2", "Option 3"];
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };


  const [selec, setSelec] = useState("")

  const handleChangee = (e) => {
    setSelec(e.target.value)
  }


  return (
    <>
      <Header title="Komponenter som börjar på bokstav A, B, C, D eller E"/>
      <Sidebar/>
      <div className="containerett">
        <Card title="Accordion">
          <AccordionUse />
        </Card>
        <Card title="BentoMenu">
          <BentoMenu />
        </Card>
        <Card title="BreadCrumb">
          <Breadcrumb steps={steps} />
        </Card>
        <Card title="Button alert">
          <Button onClick={handleButton} text="Alert button" />
        </Card>
        <Card title="Button">
          <Button onClick={handleButtontwo} text={buttonContent} />
        </Card>
        <Card>
          <Carousel images={image} />
        </Card>
        <Card title="Checkbox">
          <Checkbox
            label="Alternativ 1"
            isChecked={isChecked}
            onChange={handleChange}
          />
        </Card>
        <Card title="DatePicker">
          <DatePicker />
        </Card>
        <Card title="DownMenu">
          <DownMenu options={options} onSelect={handleSelect} />
          {selectedOption && <p>Selected option: {selectedOption}</p>}
        </Card>
        <Card title="DropDown button">
         <DropDownBox/>
        </Card>
        <Card title=""><DetailsDropDownBox/></Card>
        <Card >{selec}
        <DropDown handleChanges={handleChangee} valuetvå={steps} valuetre="detta är value tre C"/>
        </Card>
      </div>
    </>
  );
};

export default AEPage;
