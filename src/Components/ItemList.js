import {LOGO_URL } from "../utils/constants";

const ItemList = ({ items, dummy}) => {
  // console.log("Items received in ItemList:", items);
  // console.log(dummy);
  return (
      <div>
          {items?.map((it) => (
              <div key={it.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                
                <div className="9/12">
                  <div className="py-2">
                      <span>{it.card.info.name}</span>
                      <span>- ₹ {it.card.info.price ? 
                      it.card.info.price/100 :
                      it.card.info.defaultprice/100}</span>
                  </div>
                  <p className="text-xs">{it.card.info.description}</p>
              </div>
              <div  className="w-3/12 p-4">
                <div className="absolute">
                  <button className="p-2 mx-5 rounded-lg bg-black text-white shadow-lg">Add +</button>
                </div>
                <img src={LOGO_URL+ it.card.info.imageId} className="w-full"/>
                </div>
              </div>
          ))}
      </div>
  );
};
export default ItemList;
