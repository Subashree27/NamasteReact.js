import React from "react";
import RestaurantContainer from "../RestaurantContainer";
import Shimmer from "./Shimmer";

import {useState,useEffect} from "react"

const Body=()=>{
    const [res,setres] =useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const [searchText,setSearchtext]=useState("");
    useEffect(()=>{
      fetchdata();
    },[]);

    const fetchdata= async ()=>{
      const data= await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );

      const json= await data.json();
      console.log(json);
      setres(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
     
    }
  
    const handleFilter =() => {
        const filteredResults = res.filter((rest) => rest.info.avgRating >4.2);
       setFilteredRestaurants(filteredResults)
        console.log(res); // You can replace this with any action you want to perform with filtered results
      }
    // console.log("hi",resObj)
   
    // Conditional Rendering
    
   return res.length===0? (
    <Shimmer/> 
   
  ):(
          <div className="body">
              <div className="filter-btn">
                <div className="search">
                  <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchtext(e.target.value)}}/>
                  <button 
                  onClick={()=>{
                    const filteredRestaurant = res.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredRestaurants(filteredRestaurant);
                  }}>Search</button>
                </div>
  <button
    className="filter-btn"
    onClick={handleFilter}
  >
    Top Rated Foods
  </button>
</div>
                  <div className="res-container">
                    {filteredRestaurants.map((restaurant)=>(<RestaurantContainer key={restaurant.info.id} resData={restaurant}/>))}
              </div>
          </div>
      )
    
  };


  export default Body;