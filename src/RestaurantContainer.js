import {LOGO_URL} from "./utils/constants";
const RestaurantContainer=(props)=>{
    const {resData}=props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime} = resData.info;
    const StyleColor={
        backgroundColor: 'lightblue'
    };
    
    return(
    <div className="res-card" style={StyleColor}>
        <img alt="res-logo" className="res-logo"
        src={LOGO_URL+ cloudinaryImageId}/>
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime}Minutes</h4>
    </div>
    );
};
export default RestaurantContainer;
