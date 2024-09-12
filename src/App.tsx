import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Products from "./components/Products";
import { Header } from "./styledcomp/pagelayout";
import shoppingcart from "./shopping-cart.svg";
import homeicon from "./home-icon.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Tstate } from "./types";

function App() {
  // in React-router v6 usehistory is now useNavigate
  const navigate = useNavigate();
  const cartItems = useSelector((state: Tstate) => state.cartItems);
  return (
    <div className="App">
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
        <div
          style={{
            height: "40px",
            width: "40px",
            padding: "10px",
            cursor: "pointer",
          }}>
          <div
            style={{
              height: "5px",
              width: "30px",
              paddingLeft: "10px",
              cursor: "pointer",
            }}>
            {cartItems.reduce(
              (acc, current) => acc + (current.quantity ?? 0),
              0
            )}
          </div>

          <img
            src={shoppingcart}
            alt="shopping-cart-icon"
            style={{
              height: "30px",
              width: "40px",
              padding: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              navigate(`/Cart`);
            }}
          />
        </div>
      </Header>
      <Products></Products>
    </div>
  );
}

export default App;
