import CartItem from "../components/CartItem"
import { TCartItem, TProduct } from "../types"

// Action Types
export const CART_ADD_ITEM = 'cart/addItem'
export const CART_REMOVE_ITEM = 'cart/removeItem'

export const CART_ITEM_INCREASE_QUANTITY = 'cart/increaseItemQuantity'
export const CART_ITEM_DECREASE_QUANTITY = 'cart/decreaseItemQuantity'

// Action Creators
export function addCartItem(productData: TProduct) {
  return { type: CART_ADD_ITEM, payload: productData }  
}

export function removeCartItem(productId: number) {
  return { type: CART_REMOVE_ITEM, payload: { productId } }
}

export function countCartItem(productData: TProduct) {
  return { type: CART_ADD_ITEM, payload: productData  }
}


export function decreaseCartItemQuantity(id: number) {
  return {
    type: CART_ITEM_DECREASE_QUANTITY,
    payload: { id },
  }
}

export function increaseCartItemQuantity(id: number) {
  debugger;
  return {
    type: CART_ITEM_INCREASE_QUANTITY,
    payload: { id },
  }
}

// Reducer
export default function cartReducer(state: Array<TProduct> = [], action: { type: string; payload: TProduct}) {
  debugger;
    switch (action.type) {
       
      case CART_ADD_ITEM:
        const existingItem = state.find(
          
          (cartItem: TProduct) => 
            
            cartItem.id === action.payload.id
        )
        if (existingItem) {
          return state.map((cartItem:TProduct) => {
            if (cartItem.id === existingItem.id) {
              return { ...cartItem, quantity: (cartItem.quantity??0)+ 1 }
            }
            return cartItem
          })
        }
        return [...state, { ...action.payload, quantity: 1 }]
      case CART_REMOVE_ITEM:
       return state.filter((cartItem: TProduct) => 
         cartItem.id !== action.payload.id
       ) 

      case CART_ITEM_INCREASE_QUANTITY:
          return state.map((cartItem) => {
            debugger;
            if (cartItem.id === action.payload.id) {
              return { ...cartItem, quantity: (cartItem.quantity ??0) + 1 }
            }
            return cartItem
          })
          case CART_ITEM_DECREASE_QUANTITY:
            return state
              .map((cartItem) => {
                if (cartItem.id === action.payload.id) {
                  return { ...cartItem, quantity: (cartItem.quantity??0) - 1 }
                }
                return cartItem
              })
              .filter((cartItem) => (cartItem.quantity??0) > 0)
      default:return state

    }}