import { useState } from "react";
import { LOGO_URL } from "../Utils/constants"

const AppHeader = () => {

     const [btnName, setBtnName ] = useState("Login");
    return (
  
         <div className="header">
         <div className="logo_container">
         
         <img
         className="logo"
         src={LOGO_URL}
         />
         </div>
  
         <div>
         <div className="Nav">
         <ul>
         <li>Home</li>
         <li>About Us</li>
         <li>Contact Us</li>
         <li>Cart</li>
         <button className="login" onClick={() => {
          btnName === "Login" ? setBtnName ("Logout") : setBtnName("Login");
         }} >
         
         {btnName}</button>
         </ul>
         </div>
         </div>
  
         </div>
    );
  }

  export default AppHeader;