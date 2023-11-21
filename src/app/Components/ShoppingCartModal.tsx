"use client"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import {useShoppingCart} from "use-shopping-cart"
import Image from 'next/image'
import { DialogComponent } from "./Dialog"

const ShoppingCartModal = () => {
    const {cartCount, shouldDisplayCart, handleCartClick, cartDetails, removeItem, totalPrice, redirectToCheckout} = useShoppingCart()
    return(
        <Sheet open={shouldDisplayCart} onOpenChange={()=>handleCartClick()}>
            <SheetContent className="sm:max-w-lg w-[90vw">
                <SheetHeader>
                <SheetTitle>Shopping Cart</SheetTitle>
                </SheetHeader>
                <div className="h-full flex flex-col justify-between">
                    <div className="mt-8 flex-1 overflow-y-auto">
                        <ul className="-my-6 divide-y divide-gray-200">
                            {cartCount === 0 ? (
                                <h1 className="text-gray-200 py-6">You don't have any items</h1>
                            ) : (
                                <>
                                    {Object.values(cartDetails ?? {}).map((enty)=>(
                                        <li key={enty.id} className="flex py-6">
                                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border-gray-300">
                                                <Image src={enty.image as string} alt="" width={100} height={100}  />
                                            </div>
                                            <div className="ml-4 flex flex-1 flex-col">
                                                <div>
                                                    <div className="flex justify-between text-base font-medium text-gray-300">
                                                        <h3>{enty.name}</h3>
                                                        <p className="ml-4">{enty.price} TND</p>
                                                    </div>
                                                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">{enty.description}</p>
                                                </div>
                                                <div className="flex flex-1 items-end justify-between text-sm text-green-500">
                                                    <p>QTY: {enty.quantity}</p>
                                                    <div className="flex">
                                                        <button type="button" className="font-md text-red-600 hover:text-red-600/70" onClick={()=>removeItem(enty.id)}>Remove</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </>
                            )}
                        </ul>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-300">
                            <p>Total:</p>
                            <p>{totalPrice?.toFixed(2)} TND</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes are calculated at checkout</p>
                        <div className="mt-6 ">
                            <DialogComponent />
                            {/*<Button className="w-full" onClick={handleCheckoutClick}>Checkout</Button>*/}
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-300">Or &nbsp;<button type="button" className="text-gray-300 transition delay-75 hover:text-gray-300/70 font-bold" onClick={()=>handleCartClick()}>Continue Shopping</button></div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}

export default ShoppingCartModal