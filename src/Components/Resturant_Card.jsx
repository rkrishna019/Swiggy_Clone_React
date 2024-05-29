import { CDN_URL } from "../Utils/constants";

const styleCard = {
    backgroundColor : "#f0f0f0"
  }
const Resturant_Card = (props) => {

    const {resData} = props;

    const {name, cuisines, cloudinaryImageId, avgRating, sla, costForTwo} = resData?.info
   return (

       <div className="res_card" style={styleCard}>
       <img 
       className="food_pic" 
       src={CDN_URL
       + cloudinaryImageId}
       />
      <h3>{name}</h3>
      <div className="cuisine">{cuisines.join(" , ")}</div>
      <div className="other_Info">
      <div>{avgRating }Stars</div>
      <div>{sla.slaString}</div>
      <div>{costForTwo} </div>
      </div>
       </div>
   );
}

export default Resturant_Card;