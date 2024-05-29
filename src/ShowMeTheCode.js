import React from "react"
import ReactDOM from "react-dom/client"
import AppHeader from "./Components/AppHeader"
import Body from "./Components/Body"
/*
*  Header
    - Logo
    - Nav bar
* Body


* Footer
*/
const AppLayout = () => {

    return (
        <div className="App"> 

         <AppHeader/>
         <Body/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("demo"));
root.render(<AppLayout/>)

