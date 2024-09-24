import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from './About';
import Contact from './Contact';
import Error from './Error';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';



const AppLayout=()=>{
  
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
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

        ],
        errorElement:<Error/>,
    },
   
]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appLayout}/>);
