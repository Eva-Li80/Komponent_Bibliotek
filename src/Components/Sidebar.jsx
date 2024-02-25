import React from 'react';
import './sidebar.css';
import NavigationBar from './Navigationbar';

const Sidebar = ({links}) => {
  return (
    <div className="sidebar">
      <h2>"Sidebar"</h2>
       <NavigationBar links={links}  />
    </div>
  );
};

export default Sidebar;
