# Namaste React


# parcel
- Dev dependencies
- Local Server
- HMR - Hot Module Replacement
- File Watching Algorithm - written in c++
- Catching - Faster Builds
- Image Optimization 
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Spliting
- Differential Bundling- support old browsers
- Diagnostic
- Error Handling
- HTTPS
- Tree shaking- remove unused Code
- Different dev  and prod bundles


# First Program

import React from 'react';
import ReactDOM from 'react-dom/client';
// const Heading=React.createElement("h1",{id:"heading"},"Namaste React");
const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(Heading);

const elem=<span>Here goes</span>;
const Dashboard=(

    <h1>Welcome to Dashboard {elem}</h1>
  
);



const Dash=()=>{
    
    return(
        <div>
            {Dashboard}
            <h1>Welcome to Dash</h1>

       
        </div>
    )
}
const Element=()=>{
    return(
        <div>
            <h1>Welcome to React</h1>
           <Dash/>
        </div>
    )
}
root.render(<Element/>);