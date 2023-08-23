import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react"
import { config } from "../constants"
import axios from "axios";
import { enqueueSnackbar, useSnackbar } from "notistack";

function RestaurantBody() {
    const [restaurantData, setRestaurantData] = useState([]);
    const [filteredRestautandData, setfilteredRestautandData] = useState([]);
    const [search, setSearch] = useState("")
    const [temp, setTemp] = useState("")
    const {enqueueSnackbar} = useSnackbar();

    const performApiCall = async() => {
        try{
            const response = await axios.get(config.backendEndpoint);
            const restaurantInfo = response.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            console.log(response)
            setRestaurantData(restaurantInfo);
            setfilteredRestautandData(restaurantInfo);
        }catch(error){
            console.log(error)
            enqueueSnackbar(error, {variant:"warning"})
        }
    }
    const handleSearch = () => {
        if(search.trim() === ""){
            setfilteredRestautandData(restaurantData)
        }else{
            const filterData =  filteredRestautandData.filter((ele) => {
            return ele.info.name.toLowerCase().includes(search.toLowerCase())
        })
        console.log(filterData)
        setfilteredRestautandData(filterData)
        }
       
       
    }

    useEffect(() => {
        performApiCall();
    },[]);

  return (<>
    <div>
        <input key="uniqueSearch" placeholder="Search restaurants" value={search} onChange={(e) => setSearch(e.target.value)}/>
        <button onClick={() => handleSearch()}>Search</button>
    </div>
    <div className="restaurant-body">
    
        {filteredRestautandData == undefined ?  (null) :(filteredRestautandData.map((restaurant,idx) => {
            return <RestaurantCard key={idx} prop = {...restaurant.info} />
        }))}
    </div>
    </>
  )
}

export default RestaurantBody