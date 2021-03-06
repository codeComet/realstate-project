import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Info from "./components/Info/Info";
import Interior from "./components/Interior/Interior";
import Nav from "./components/Nav/Nav";
import NewHome from "./components/NewHome/NewHome";
import { InfoData, InfoData2 } from "./Data/InfoData";
import { SliderOne } from "./Data/SliderData";
import GlobalStyle from "./globalStyles";

function App() {
  const [dropdown, setDropdown] = useState(false);
  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <div className="App">
      <GlobalStyle />
      <Nav toggleDropdown={toggleDropdown} />
      <Hero slider={SliderOne} />
      <Dropdown dropdown={dropdown} toggleDropdown={toggleDropdown} />
      <Info {...InfoData} />
      <NewHome />
      <Interior />
      <Info {...InfoData2} />
      <Footer />
    </div>
  );
}

export default App;
