import React from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'

const links = [
  { text: "Home", url: "/" },
  { text: "About", url: "/about" },
  { text: "Services", url: "/services" },
  { text: "Contact", url: "/contact" },
];

const Home = () => {


  return (
    <div>
         <Header title="Komponent bibliotek"/>
         <Sidebar links={links}/>
    </div>
  )
}

export default Home
