import React from "react";
import ProductsData from "../productsData.json";
import Product from "./Product";
import { Flexcontainer } from "../styledcomp/defaultcontainer";
import { TProduct, TRating } from "../types";

const Products = () => {
  return (
    <>
      <Flexcontainer>
        {ProductsData.map(
          ({
            id,
            title,
            price,
            description,
            category,
            image,
            rating,
          }: TProduct) => {
            return (
              <Product
                id={id}
                title={title}
                price={price}
                description={description}
                category={category}
                image={image}
                rating={rating}></Product>
            );
          }
        )}
      </Flexcontainer>
    </>
  );
};

export default Products;
