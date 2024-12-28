import React from "react";
import RestaurantContainer, {WithPromotedLabel} from "../RestaurantContainer";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"; 
import useOnlineStatus from "../utils/useOnlineStatus"; 
import {useState,useEffect,useContext} from "react";
import UserContext from "../utils/UserContext";

const Body=()=>{
    const [res,setres] =useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([res]);
    const [searchText,setSearchtext]=useState("");

    const RestaurantCardPromoted= WithPromotedLabel(RestaurantContainer);
    useEffect(()=>{
      fetchdata();
    },[]);

    const fetchdata= async ()=>{
      const data= await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json= await data.json();
      console.log("json:",json);
      setres(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    
    }
    const handleFilter =() => {
        const filteredResults = res.filter((rest) => rest.info.avgRating >4.2);
       setFilteredRestaurants(filteredResults)
        console.log("Welcome res",res); // You can replace this with any action you want to perform with filtered results
      }
    // console.log("hi",resObj)
   
    // Conditional Rendering

    const onlineStatus= useOnlineStatus();
    if(onlineStatus===false)
      return <h1>No internet connection. Please check your internet connection and try again.</h1>

    const {loggedInUser,setUserName} = useContext(UserContext);
  
   return  (res && res.length === 0)? (
    <Shimmer/> 
    
  ):(
          <div className="body">
              <div className="filter-btn flex">
                <div className="search m-4 p-4">
                  <input type="text" data-testid="searchInput" 
                   className="border border-solid border-black" value={searchText} onChange={(e)=>{setSearchtext(e.target.value)}}/>
                  <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                  onClick={()=>{
                    setFilteredRestaurants(res.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())));
                  }}>Search</button>
          </div>
  <div className="search m-4 p-4 flex items-center">
  <button
    className="px-4 py-2 bg-gray-100 rounded-lg"
    onClick={handleFilter}
  >
    Top Rated Foods
  </button>
  </div>
  <div className="search m-4 p-4 flex items-center">
    <label> UserName: </label>
    <input className="border border-black p-2 " onChange={(e)=> setUserName(e.target.value)}/>
  </div>
</div>
                  <div className="flex flex-wrap">
                    {filteredRestaurants.map((restaurant)=>(
                      <Link
                      key={restaurant?.info?.id}
                      to={"/restaurant/"+restaurant?.info?.id}
                      > 
                      {
                        restaurant?.info?.promoted?(<RestaurantCardPromoted resData={restaurant}/>):<RestaurantContainer resData={restaurant}/>
                      }
                        
                        </Link>
                      ))}
              </div>
          </div>
      )
    
  };


  export default Body;