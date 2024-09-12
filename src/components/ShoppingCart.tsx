import { useNavigate } from "react-router";
import { Header } from "../styledcomp/pagelayout";
import homeicon from "../home-icon.svg";
import { useSelector } from "react-redux";
import { TProduct, Tstate } from "../types";
import CartItem from "./CartItem";

export const ShoppingCart = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state: Tstate) => state.cartItems);
  console.log(cartItems);
  return (
    <>
      <Header>
        <img
          src={homeicon}
          alt="shopping-cart-icon"
          style={{
            height: "40px",
            width: "40px",
            padding: "10px",
            cursor: "pointer",
          }}
          onClick={() => {
            navigate(`/`);
          }}
        />
      </Header>
      {cartItems.map((item) => {
        return (
          <CartItem
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
            category={item.category}
            image={item.image}
            rating={item.rating}
            quantity={item.quantity}></CartItem>
        );
      })}
    </>
  );
};
