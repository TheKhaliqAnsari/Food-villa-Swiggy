import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import { config } from "../constants";
import axios from "axios";
import { enqueueSnackbar, useSnackbar } from "notistack";
import { handleSearch } from "../utils/helper";
import UserContext from "../utils/UserContext";

function RestaurantBody() {
  const [restaurantData, setRestaurantData] = useState([]);
  const [filteredRestautandData, setfilteredRestautandData] = useState([]);
  const [search, setSearch] = useState("");
  const [temp, setTemp] = useState("");
  const { enqueueSnackbar } = useSnackbar();
  const {user, setUser} = useContext(UserContext)

  const performApiCall = async () => {
    try {
      const response = await axios.get(config.backendEndpoint);
      const restaurantInfo =
        response.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      console.log(response);
      setRestaurantData(restaurantInfo);
      setfilteredRestautandData(restaurantInfo);
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error, { variant: "warning" });
    }
  };

  useEffect(() => {
    performApiCall();
  }, []);

  return (
    <>
      <div>
        <input
          key="uniqueSearch"
          placeholder="Search restaurants"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => {
            const data = handleSearch(
              search,
              filteredRestautandData,
              restaurantData
            );
            setfilteredRestautandData(data);
          }}
        >
          Search
        </button>
        <input value={user.name} onChange={(e) => setUser( {name:e.target.value}) }/>
      </div>
      <div className="restaurant-body">
        {filteredRestautandData == undefined
          ? null
          : filteredRestautandData.map((restaurant, idx) => {
              return <RestaurantCard key={idx} prop={...restaurant.info} />;
            })}
      </div>
    </>
  );
}

export default RestaurantBody;
