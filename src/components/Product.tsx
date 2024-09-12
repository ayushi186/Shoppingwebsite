import React from "react";
import { Flexchildren, ButtonPrimary } from "../styledcomp/defaultcontainer";
import { TProduct, TRating } from "../types";
import { useDispatch } from "react-redux";
import { addCartItem } from "../store/cartReducer";

const Product = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: TProduct) => {
  const dispatch = useDispatch();
  return (
    <>
      <Flexchildren>
        <img src={image} alt="prod-img" style={{ height: "150px" }} />
        <p>{title}</p>
        <p>${price}</p>
        <p>{rating.rate}</p>
        <ButtonPrimary
          onClick={() =>
            dispatch(
              addCartItem({
                id,
                title,
                price,
                description,
                category,
                image,
                rating,
              })
            )
          }>
          Add to Cart
        </ButtonPrimary>
        <ButtonPrimary>Add to Wish</ButtonPrimary>
      </Flexchildren>
    </>
  );
};

export default Product;
