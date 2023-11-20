"use client"
import { Button } from "@/components/ui/button"
import { useShoppingCart } from "use-shopping-cart"
import { urlFor } from "../sanity";

export interface ProductCart {
    name: string;
    description: string;
    price: number;
    currency: string;
    image: any
}

const AddToBag = ({name, currency, description, price, image}: ProductCart) => {
    const {addItem, handleCartClick} = useShoppingCart()
    const Product = {
        name: name,
        description: description,
        price: price,
        currency: currency,
        image: urlFor(image).url(),
        id: ''
    }
    return(
        <Button onClick={()=>{addItem(Product), handleCartClick()}}>Add To Cart</Button>
    )
}

export default AddToBag