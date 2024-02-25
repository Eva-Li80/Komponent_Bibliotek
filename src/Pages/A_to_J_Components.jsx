import React, { useState } from 'react'
import Card from '../Components/A-E Components/Card'
import AccordionUse from '../Components/A-E Components/AccordionUse'
import Button from '../Components/A-E Components/Button'
import Carousel from '../Components/A-E Components/Caraousel'

const A_to_E_Components = () => {
  const [buttonContent, setButtonContent] = useState("Hejsan")

  const handleButton = () => {
    alert("hej button")
  }

  const handleButtontwo = () => {
    setButtonContent("Ny knapptext") // Uppdatera knappens innehåll
  }

  const image = [
    "https://as1.ftcdn.net/v2/jpg/06/25/60/00/1000_F_625600094_DjF8GiamuveCkvaeDcv6S2t9RDXEcPoi.jpg",
    "https://m.media-amazon.com/images/I/815qtzaP9iL._SL1500_.jpg",
    "https://macaulay.cuny.edu/seminars/drabik09/images/4/4d/Godfather.jpg",
  ];

  return (
    <div className='container'>
      <Card title="Accordion">
        <AccordionUse/>
      </Card>
      <Card title="Button alert">
        <Button onClick={handleButton} text="Alert button"/>
      </Card>
      <Card title="Button">
        <Button onClick={handleButtontwo} text={buttonContent}/>
      </Card>
      <Card>
        <Carousel images={image}/>
      </Card>
    </div>
  )
}

export default A_to_E_Components
