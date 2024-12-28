import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";
import UserContext from "./utils/UserContext";
class About extends Component{
    constructor(props){
        super(props);
        // console.log("Parent Component");
    }
    componentDidMount(){
        // console.log("Parent Component Mounted");
    }
    render(){
        // console.log("Parent Component Rendered");
    return(
        <div>
            <h1>About Us</h1>
            <div>
                LoggedIn User
                <UserContext.Consumer>
                    {({loggedInUser})=> <h1 class="text-xl font-bold">{loggedInUser}</h1>}
                </UserContext.Consumer>
            </div>
            <p>Namaste Restaurant is a restaurant specializing in traditional Indian cuisine. Our menu offers a variety of dishes that cater to the diverse tastes of our customers.</p>
            {/* <User name={"Suba"}/> */}
            <UserClass name={"First"} Email={"Suba@gmail.com"}/>
        </div>
    );
    }
}
export default About;