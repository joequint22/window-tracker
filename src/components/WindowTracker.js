import React, { useEffect, useState } from "react"


export default function WindowTracker(){


    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    
    function watchWidth(){
            console.log("resizing...")
            setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        //Mounting the addEventListener
        window.addEventListener("resize", watchWidth)

        return () => {
            console.log("useEffect cleaned...")
            window.removeEventListener("resize", watchWidth)
        }



    }, [])

        return(
            <h1
                style={{color: "white"}}
            >Window width: {windowWidth}</h1>
        )

}