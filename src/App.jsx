import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CountryDetail from "./components/CountryDetail";
import Display from "./components/Display";
import Navbar from "./components/Navbar";

function App() {
  const [countryName, setCountryName] = useState("India");

  const changeCountryName = (name) => {
    setCountryName(name);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Display changeCountryName={changeCountryName} />}
        />
        <Route path="/country" element={<CountryDetail countryName={countryName}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
