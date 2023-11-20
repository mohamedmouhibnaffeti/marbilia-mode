"use client"
import { ReactNode } from 'react'
import { CartProvider as USCProvider } from "use-shopping-cart"

const CartProvider = ({children}: {children: ReactNode}) => {
    return (
        <USCProvider mode="payment"
         cartMode="client-only"
         stripe={process.env.Next_PUBLIC_STRIPE_KEY as string }
         successUrl="http://localhost/3000/success"
         cancelUrl="http://localhost/3000/error"
         currency="TND"
         billingAddressCollection={false}
         shouldPersist={true}
         language="en-US"
        > {children} </USCProvider>
    )
}

export default CartProvider