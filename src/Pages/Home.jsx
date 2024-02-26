import React from 'react'
import Header from '../Components/F-J Components/Header'
import Sidebar from '../Components/P-T Components/Sidebar'

const links = [
  { text: "Home", url: "/" },
  { text: "About", url: "/about" },
  { text: "A-E Components", url: "/aepage" },
  { text: "F-J Components", url: "/fjpage" },
  { text: "K-O Components", url: "/kopage" },
  { text: "P-T Components", url: "/ptpage" },
  { text: "U-Z Components", url: "/uzpage" },
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
