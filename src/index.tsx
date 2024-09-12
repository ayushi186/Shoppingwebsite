import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ShoppingCart } from "./components/ShoppingCart";
import { Provider } from "react-redux";
//import { store } from "./store";

import { combineReducers, compose, createStore, applyMiddleware } from "redux";
import productsReducer from "./store/productReducer";
import cartReducer, { addCartItem } from "./store/cartReducer";
import { store } from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Cart",
    element: <ShoppingCart />,
    errorElement: <div>not found </div>,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
