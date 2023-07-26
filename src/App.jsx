import React, { useState } from "react";
import Display from "./components/Display";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <Display />
    </div>
  );
}

export default App;
