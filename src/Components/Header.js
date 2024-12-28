import {CDN_URL} from "../utils/constants";
import {useState,useEffect, useContext} from "react";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header=()=>{
    const [btnNameReact, setBtnNameReact] = useState("Login");
    const onlineStatus = useOnlineStatus();

    const {loggedInUser}= useContext(UserContext);
    console.log(loggedInUser);

    // Subscribing to the store using a Selector(reading data)
    const cartItems = useSelector((store)=>store.cart.items);
    console.log("cartItems: ", cartItems);

    console.log("Header Render");
    useEffect(()=>{
        console.log("useEffect Called");
    })
    return(
    <div className="flex justify-between bg-pink-100 shadow-lg mb-2 sm:bg-violet-400 lg:bg-green-200">
        <div className="logo-container">
        <img className="w-24" src={CDN_URL}/>
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4">Online Status: {onlineStatus ?"✅": "🔴"}</li>
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About Us</Link></li>
                {/* <li className="px-4"><Link to="/about">About Us</Link></li> */}
                <li className="px-4"><Link to="/Contact">Contact</Link></li>
                <li className="px-4" ><Link to="/Grocery">Grocery</Link></li>
                <li className="px-4"><Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
                <button className="login" onClick={()=>{btnNameReact==="Login"?setBtnNameReact("Logout"):setBtnNameReact("Login");}}>{btnNameReact}</button>
                <li className="px-4 font-bold">{loggedInUser}</li>
            </ul>
        </div>
    </div>
    );
};

// Here export is we giving component to App.js so it can import Header file and give us the output.
export default Header;