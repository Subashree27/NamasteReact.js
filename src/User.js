import {useState} from "react";
const User =({name})=>{
    const [count]= useState(0);
    const [count2]=useState(1);
    
    return(
        <div className="user-card">
            <h1>MyCount={count}</h1>
            <h1>Count2={count2}</h1>
            <h2>Name: {name}</h2>
            <h2>Email: subashree@gmail.com</h2>
            <h2>Phone: 9999999999</h2>
        </div>
    )

}
<<<<<<< HEAD
export default User;
=======
export default User;
>>>>>>> e4e4aa91a4b6a220fd5d4f7ddea394ac7ef39947
