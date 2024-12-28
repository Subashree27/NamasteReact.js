import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENUID } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import {useState} from "react";           
const RestaurantMenu=()=>{
const {resId} = useParams();

const dummy = "Dummy data";
const resInfo = useRestaurantMenu(resId);

const [showIndex, setShowIndex]=useState(null);

// console.log("mydish",cuisines);
    if (resInfo === null) return <Shimmer/>;
    const { name ,cuisines,avgRating,costForTwoMessage}= resInfo.cards[2]?.card?.card?.info;

    // const {name,cuisines,avgRating,costForTwoMessage} =resInfo?.cards[4]?.card?.card?.info;

    const{itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card);
    const categories= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.["card"]?.["@type"]===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log("cat:",categories);
    console.log("items:", itemCards);


    return(
        <div className="menu">
            <h1 className="font-bold my-6 text-2xl" >{name}</h1> 
            <p className="font-bold text-lg">{cuisines.join(",")+" - "+costForTwoMessage}</p>
            {categories.map((category,index)=>(
                <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}
                showItems={index=== showIndex? true: false}
                setShowIndex={()=> setShowIndex(index)} dummy={dummy}/> //Controlled Component- Here showItems is an Parent which is Controlling the RestaurantCategory(child) which means,
                //Continous of above Statement-...One item alone is one others will be Collapsed Automatically
                
                ))}
            

         
        </div>
    );
};
export default RestaurantMenu;

 