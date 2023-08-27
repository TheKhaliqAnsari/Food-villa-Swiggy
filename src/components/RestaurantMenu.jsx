import { useParams } from "react-router-dom";
import { config } from "../constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import axios from "axios";
import "../../index.css";
import useRestaurant from "../hooks/useRetaurant";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurantInfo, restaurantMenu] = useRestaurant(id);
  // If i want to use state than i need to use useState like this ->
  // useEffect(() => {
  //   setRestuarantInfo(data1);
  //   setRestaurantMenu(data2);
  // }, [data1, data2]);

  //Else my component will go inside infinite re-render
  

  return !restaurantInfo ? (
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
        <h2>Retaurant Id: {id}</h2>
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
