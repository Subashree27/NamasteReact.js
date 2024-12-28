import React from "react";
class UserClass extends React.Component {
    constructor(props){
        super(props);

        // console.log(this.props.name+ "Child Component");
    }
    // componentDidMount was used to make an API CALL
    componentDidMount(){
        // console.log(this.props.name+ "Child Component Did Mount");
    }
    render(){
        // console.log(this.props.name+ "Child Component Render");
        const {name,Email}=this.props;

        return(
            <div className="user-card">
                <h2>Name:{name} </h2>
                <h2>Email:{Email}</h2>
                <h2>Phone: 9999999999</h2>
            </div>
        )
    }
}
export default UserClass;
