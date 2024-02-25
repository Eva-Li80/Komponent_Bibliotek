import React from 'react';
import './styles/sidebar.css';
import NavigationBar from '../K-O Components/Navigationbar';

const Sidebar = ({links}) => {
  return (
    <div className="sidebar">
      <h2>"Sidebar"</h2>
       <NavigationBar links={links}  />
    </div>
  );
};

export default Sidebar;
