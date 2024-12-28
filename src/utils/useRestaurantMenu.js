import {useEffect,useState} from "react";
import { MENUID } from "./constants";

const useRestaurantMenu = (resId) =>{
        //fetch data
const[resInfo,setResInfo]= useState(null);

        useEffect(()=>{
            fetchData();
        }, [resId]);

const fetchData = async() =>{
    const data = await fetch(MENUID+resId);
    
    // To Convert data to JSON
    const json = await data.json();
    setResInfo(json.data);
}
return resInfo;

};
export default useRestaurantMenu;