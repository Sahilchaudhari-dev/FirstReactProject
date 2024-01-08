import logo from "./logo.svg";
import "./App.css";
import React from "react";
import App2 from "./App2";
function App() {
  const name = "sahil";
  return (
    <>
      <div className="App">React app</div>
      <App2 name={name} />
      <div>dbhfg</div>
    </>
  );
}
export default App;
