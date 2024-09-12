import { useDispatch } from "react-redux";
import { ButtonSecondary } from "../styledcomp/defaultcontainer";
import { StyledCartItem } from "../styledcomp/pagelayout";
import { TProduct } from "../types";
import {
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
} from "../store/cartReducer";

export default function CartItem({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
  quantity,
}: TProduct) {
  const dispatchCart = useDispatch();
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={image} style={{ height: "50px" }} />
        <StyledCartItem height="50px">
          <StyledCartItem height="10px" istitle={true}>
            {title}
          </StyledCartItem>
          <StyledCartItem height="40px">
            <p style={{ margin: "0" }}>{rating.rate}</p>
          </StyledCartItem>
        </StyledCartItem>
        <StyledCartItem height="50px">{price}</StyledCartItem>
        <ButtonSecondary
          onClick={() => dispatchCart(decreaseCartItemQuantity(id))}>
          -
        </ButtonSecondary>
        <StyledCartItem height="50px">{quantity}</StyledCartItem>
        <ButtonSecondary
          onClick={() => dispatchCart(increaseCartItemQuantity(id))}>
          +
        </ButtonSecondary>
        <StyledCartItem height="50px">{price * (quantity ?? 0)}</StyledCartItem>
      </div>
    </>
  );
}
