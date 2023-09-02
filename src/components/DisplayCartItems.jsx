
const DisplayCartItems = (props) => {
    const data = Object.values(props)
    return(
        <div style={{display:'flex'}}>
        {
            !data ? <h1> Cart is empty</h1> : data.map((item) => {
                {console.log(item)}
                return (
                    <div style={{border:'2px solid black', margin:'10px', padding:'10px'}}>
                    <h4>{item.name}</h4>
                    <p>{item.price/100 || item.defaultPrice/100}</p>
                    <p>{item.description}</p>
                    </div>
                )

            })
        }
        </div>
    )
}

export default DisplayCartItems;