import axios from "axios";
import React, { useEffect, useState } from "react";
import search from "../assets/search.png";
import Country from "./Country";

const Display = () => {
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [inputCountry, setInputCountry] = useState('');
  const [region, setRegion] = useState("");

  useEffect(() => {
    fetchAllData();
  }, []);
  useEffect(()=>{
    if (inputCountry === "") {
      setDisplayData(data);
    } else {
      searchInput();
    }
  },[inputCountry])

  const fetchAllData = async () => {
    try {
      const msg = await axios.get(
        `https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population`
      );

      setData(msg.data);
      setDisplayData(msg.data);
    } catch {
      alert("Axios Error !");
    }
  };

  const fetchRegion = async () => {
    try {
      const msg = await axios.get(
        `https://restcountries.com/v3.1/region/${region}`
      );
      setDisplayData(msg.data);
      setData(msg.data);
    } catch {
      alert("Axios Error !");
    }
  };

  const searchInput = ()=>{
    let result = [];
    if (data){
      result = data.filter((e) => {
        console.log(e.name)
        const name = `${e.name.common}`.toLowerCase();
        return name.startsWith(inputCountry);
      })
      setDisplayData(result);
    }

  }

  const handleChangeInput = (e) => {
    setInputCountry(e.target.value.toLowerCase());
  };

  const handleChangeRegion = (e) => {
    setRegion(e.target.value);
    if (region == "") {
      fetchAllData();
    } else {
      fetchRegion();
    }
  };

  return (
    <div className="bg-zinc-50">
      <div className=" flex justify-around px-8 py-4 items-center">
        <div
          className="border flex bg-white p-2 gap-6 rounded-md w-1/5 items-center"
          htmlFor="search_input"
        >
          <img src={search} alt="S" className="h-6" />
          <input
            id="search_input"
            className="focus:outline-none w-full text-lg"
            placeholder="Search for a Country..."
            onChange={(e) => {
              handleChangeInput(e);
            }}
          />
        </div>

        <div className="">Filter By Region</div>
        {/* same rutu */}
      </div>
      <div className="grid grid-cols-4 gap-14 my-8 px-32 mx-24">
        {data.length !== 0 ? (
          displayData.map((country, index) => {
            return <Country country={country} key={index} />;
          })
        ) : (
          <div className=""></div>
        )}
      </div>
    </div>
  );
};

export default Display;
