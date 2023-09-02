import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "../utils/cartSlice";
import DisplayCartItems from "./DisplayCartItems";
const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart.items);
  console.log(cart);
  const handleClearItems = () => {
    dispatch(clearItem());
  };
  return (
    <div>
      <div>
        <button
          onClick={handleClearItems}
          style={{
            padding: "5px",
            backgroundColor: "black",
            color: "white",
            fontSize: "25px",
          }}
        >
          Clear Items
        </button>
      </div>

      <div>
        <DisplayCartItems {...cart} />
      </div>
    </div>
  );
};

export default Cart;
