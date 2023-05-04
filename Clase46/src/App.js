// import React from "react";
// import logo from "./logo.svg";
import "./assets/css/app.css";

//COMPONENTES
import Sidebar from "./components/SideBar";
import ContentWrapper from "./components/ContentWrapper";

function App() {
  return (
    <div id="wrapper">
      <Sidebar />
      <ContentWrapper />
    </div>
  );
}

export default App;
