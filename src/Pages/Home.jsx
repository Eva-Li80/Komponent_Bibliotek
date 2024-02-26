import React from "react";
import Header from "../Components/F-J Components/Header";
import Sidebar from "../Components/P-T Components/Sidebar";
import MovieBox from "../Components/K-O Components/MovieBox";
import Card from "../Components/A-E Components/Card";
import "./containermovies.css"


const Home = () => {
  return (
    <div>
      <Header title="Komponent bibliotek" />
      <Sidebar />
      <div className="container-movies">
        <Card title="Moviebox">
          <MovieBox />
        </Card>
      </div>
    </div>
  );
};

export default Home;
