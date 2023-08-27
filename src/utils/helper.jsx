
// Handling the search request
export const handleSearch = (search, filteredRestautandData, restaurantData) => {
    if(search.trim() === ""){
        // setfilteredRestautandData(restaurantData)
        return restaurantData
    }else{
        const filterData =  filteredRestautandData.filter((ele) => {
        return ele.info.name.toLowerCase().includes(search.toLowerCase())
    })
    console.log(filterData)
    // setfilteredRestautandData(filterData)
    return filterData
    }
}