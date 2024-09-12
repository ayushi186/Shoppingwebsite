export type TProduct = {
    id:number;
    title:string;
    price:number;
    description:string;
    category:string;
    image:string;
    rating:TRating;
    quantity? : number| undefined;

}

export type TRating ={
    rate:number;
    count: number
}

export type Tstate = {
    Products: Array<TProduct>;
    cartItems : Array<TProduct>;


}

export type TCartItem  = TProduct & { quantity? : number|undefined}