import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
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
    </div>
  );
}

export default App;
