import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import Link from 'next/link'
import { useState } from 'react'
import { useShoppingCart } from "use-shopping-cart"
import { Input } from "@/components/ui/input"
export function DialogComponent() {
    const {cartCount, handleCartClick} = useShoppingCart()
    let val: number
    cartCount ? val = cartCount : val = 0
    const [phone, setPhone] = useState('')
    const OnChangeHandler = (e: any) => {
      setPhone(e.target.value)
    }
  return (
    
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full" disabled={val === 0}>Checkout</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Checkout</DialogTitle>
          <DialogDescription>
            Please insert your phone number to confirm checkout.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Input
              id="name"
              className="col-span-3"
              placeholder="Phone Number"
              type="number"
              onChange={OnChangeHandler}
            />
          </div>
          { (phone.length < 8 && phone.length > 0) && <p className="text-sm text-red-600">Phone Number Must be of 6 Digits Long</p>}
        </div>
        <DialogFooter>
        <DialogTrigger asChild>
          <Button type="submit" disabled={phone.length < 8} onClick={()=>handleCartClick()}><Link href="/Success">Confirm </Link> </Button>
        </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
