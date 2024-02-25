import React from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import Card from '../Components/Card';

const links = [
  { text: "Home", url: "/" },
  { text: "About", url: "/about" },
  { text: "A-E Components", url: "/a_to_e_components" },
  { text: "F-J Components", url: "/f_to_j_components" },
  { text: "K-O Components", url: "/k_to_o_components" },
  { text: "P-T Components", url: "/p_to_t_components" },
  { text: "U-Z Components", url: "/u_to_z_components" },
  { text: "Contact", url: "/contact" },
];

const Home = () => {


  return (
    <div>
         <Header title="Komponent bibliotek"/>
         <Sidebar links={links}/>
         <Card title="">

         </Card>
    </div>
  )
}

export default Home
