import React from "react";
import "./sass/main.scss";

import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import HotelView from "./components/HotelView";

function App() {
  return (
    <div className="container">
      <Header />

      <div className="content">
        <SideBar />

        <HotelView />
      </div>
    </div>
  );
}

export default App;
