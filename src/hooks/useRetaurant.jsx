import { useState, useEffect } from "react";
import { config } from "../constants";
import axios from "axios";

function useRestaurant(id) {
  const [restInfo, setRestInfo] = useState({});
  const [restMenu, setRestMenu] = useState([]);
  const url = config.restaurantMenuURL + id;

  useEffect(() => {
    async function performApiCall() {
      try {
        const res = await axios.get(url);
        const restInfo =
          res.data?.data?.cards[0]?.card?.card?.info || {}; // Initialize with an empty object.
        const restMenu =
          res.data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
            ?.card.card.itemCards || []; // Initialize with an empty array.
        setRestInfo(restInfo);
        setRestMenu(restMenu);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    performApiCall();
  }, [id]); // Include 'id' in the dependency array to respond to changes.

  return [restInfo, restMenu];
}

export default useRestaurant;
