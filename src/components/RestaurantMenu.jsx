import { useParams } from "react-router-dom";
import { config } from "../constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import axios from "axios";
import "../../index.css";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurantInfo, setRestuarantInfo] = useState({});
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const url = config.restaurantMenuURL + id;

  const performApiCall = async () => {
    try {
      const res = await axios.get(url);
      // const data = await res.json()
      // console.log(res.data?.data?.cards);
      const restInfo = res.data?.data?.cards[0]?.card?.card?.info;
      const restMenu =
        res.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
          ?.card.card.itemCards;
          console.log(restMenu)
      //   setRestaurantMenu(
      //     res.data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card
      //       .card.itemCards
      //   );
      return [restInfo, restMenu];
      // setRestuarantInfo(res.data?.data?.cards[0]?.card?.card?.info);;

      // const { name, costForTwoMessage, cloudinaryImageId, totalRatingsString} = restaurantInfo
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    performApiCall().then((val) => {
      setRestuarantInfo(val[0]);
      setRestaurantMenu(val[1])
    });
  }, []);
  return restaurantInfo == undefined ? (
    <Shimmer />
  ) : (
    <div className="menu-container">
      <div>
        <img
          src={config.cloudinaryImageIdURL + restaurantInfo.cloudinaryImageId}
        />
        <h1>{restaurantInfo.name}</h1>
        <h4>{restaurantInfo.costForTwoMessage}</h4>
        <h4>{restaurantInfo.totalRatingsString}</h4>
        <h2>Your id is: {id}</h2>
      </div>
      <div>
        {/* {console.log(restaurantMenu[0].card.info.name)} */}
        {/* // card info name/price */}
        {/* {restaurantMenu.map((info ,idx) => {
            return <li key={idx}>{info}</li>
        })} */}
        {restaurantMenu == undefined ? <Shimmer/> : (
            restaurantMenu.map((info,idx) => <li key={idx}>{info.card.info.name} {" --->"} {((info.card.info.price)/100)  || ((info.card.info.defaultPrice)/100) + " rs" } </li>)
        )}
      </div>
    </div>
  );
};
export default RestaurantMenu;
