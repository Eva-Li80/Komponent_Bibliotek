import React, { useState } from "react";

const Tagbar = ({ tabs }) => {
  const[activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  return (
    <div>
      <div style={{ display: "flex" }}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            style={{
              padding: "10px 20px",
              cursor: "pointer",
              borderBottom: activeTab === index ? "2px solid blue" : "none",
            }}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </div>
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tagbar;
