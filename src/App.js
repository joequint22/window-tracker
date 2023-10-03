import logo from './logo.svg';
import './App.css';
import { ReactDOM } from 'react';
import React, {useState, useEffect} from "react";
import WindowTracker from "./components/WindowTracker"

function App() {

  const [show, setShow] = useState(true)

  return (
    <div className="container"
      style={{ 
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >

          <span
            onClick={()=>{
              setShow(oldShow => !oldShow)
            }}
            style={{
              display: "grid",
              placeItems: "center",              
              width: "80%",
              height: "10%",
              backgroundColor: "white",
              borderRadius: "7px",
              textDecoration: "none",
              fontSize: 20,
              marginTop: 100,
            }}
          >
                  Toggle windowTracker
          </span>
          {show && <WindowTracker />}


    </div>
  );
}

export default App;
