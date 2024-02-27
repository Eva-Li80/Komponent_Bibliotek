import React from 'react'
import Card from '../Components/A-E Components/Card'
import KebabMenu from "../Components/K-O Components/KebabMenu"
import Loader from '../Components/K-O Components/Loader'
import Menu from '../Components/K-O Components/Menu'
import Modal from '../Components/K-O Components/Modal'
import { useState } from 'react'
import Notification from '../Components/K-O Components/Notification'
import Header from '../Components/F-J Components/Header'
import Sidebar from '../Components/P-T Components/Sidebar'
import data from "../animals.json"
import List from '../Components/K-O Components/List'
import MovieBox from '../Components/K-O Components/MovieBox'

const KOPage = () => {

  
  //Modal
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleopen = () => {
    setIsModalOpen(true)
  }

  const animals = data?.animals ?? []
  console.log(animals)
  
  return (
    <>
     <Header title="Komponenter som börjar på bokstav K, L, M, N eller O"/>
      <Sidebar/>
   
    <div className='containerett'>
     <Card title="Kebab menu"><KebabMenu/></Card>
     <Card title="Loader"><Loader/></Card>
     <Card title="Menu"><Menu/></Card>
     <Card title="Modal">
      <button onClick={handleopen}>open</button>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} texth2="Modal" content="Här kan du lägga till innehåll som ska visas i modalen."/>}</Card>
     <MovieBox/>
     <Card title="Notification"><Notification message="Hej notification"/></Card>
     <Card><List data={animals}/></Card>
    </div>
    </>
  )
}

export default KOPage
