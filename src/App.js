import React,{lazy,Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from './About';
import Contact from './Contact';
import Error from './Error';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import Shimmer from './Components/Shimmer';
import UserContext from './utils/UserContext';
import {useState,useEffect} from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from './Components/Cart';
import RestaurantMenu from './Components/RestaurantMenu';





// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// on Demanding Loading
// dynamic import

const Grocery =lazy(()=>
    import("./Components/Grocery")
);

const AppLayout=()=>{
    const[userName,setUserName] = useState();

// authentication
useEffect(()=>{
    // Make an API call and send username and password
    const data={
        name: "Subashree",
    };
    setUserName(data.name);

},[]);
  
    return(
        <Provider store={appStore}>
         {/* Here the name inside the userName will be gone to Header and Outlet(Whole Application) and provider basically Overide the loggedInuser */}
        <UserContext.Provider value={{loggedInUser:userName , setUserName}}>  
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
    )
}
const appLayout = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>,

            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>,
            },
            {
                path:"/cart",
                element:<Cart/>,
            }

        ],
        
        errorElement:<Error/>,
    },
    
   
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appLayout}/>);
