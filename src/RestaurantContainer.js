import {useContext} from "react";
import {LOGO_URL} from "./utils/constants";
import UserContext from "./utils/UserContext";

const RestaurantContainer=(props)=>{
    const {resData}=props;
    console.log(resData);
    const {loggedInUser} = useContext(UserContext);
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime} = resData?.info;
    const StyleColor={
        backgroundColor: 'lightblue'
    };
    
    return(
    <div data-testid="resCard"  className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-300">
        <img alt="res-logo" className="rounded-lg"
        src={LOGO_URL+ cloudinaryImageId}/>
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime}Minutes</h4>
        <h4>User : {loggedInUser}</h4>
    </div>
    );
};

// Higher Order Component

// input- RestaurantCard ==> RestaurantCardPromoted
export const WithPromotedLabel= (RestaurantContainer) => { 
    return (props)=>{
        return
        (    
            <div>
                  <label className="absolute bg-black text-white m-2 p-2 rounded-lg" > Promoted</label>
                  <RestaurantContainer {...props}/>

            </div>
          
        );
    };
};
export default RestaurantContainer;
