import {CDN_URL} from "../utils/constants";
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";

const Header=()=>{
    const [btnNameReact, setBtnNameReact] = useState("Login");
    console.log("Header Render");
    useEffect(()=>{
        console.log("useEffect Called");
    })
    return(
    <div className="header">
      
        <div className="logo-container">
        <img className="logo" src={CDN_URL}/>
        </div>
        <div className="nav-items">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                <li>Cart</li>
                <button className="login" onClick={()=>{btnNameReact==="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login");}}>{btnNameReact}</button>
            </ul>
        </div>
    </div>
    );
};

// Here export is we giving component to App.js so it can import Header file and give us the output.
export default Header;