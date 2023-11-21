import React from 'react'
import { CheckCheck } from "lucide-react"
import { Button } from '@/components/ui/button'
import Link from 'next/link'
const SuccessComp = () => {
    return (
        <div className="h-screen">
            <div className="mt-48 md:max-w-[50vw] mx-auto">
                <CheckCheck className="text-green-600 w-32 h-32 mx-auto my-6" />
                <div className="text-center">
                    <h3 className="md:text-2xl text-base text-gray-300 font-semibold text-center">You'll Get a Phone Call in no time, Stay tuned...</h3>
                    <p className="text-gray-400 my-2 mt-4">Thank you for your purchase. We hope you enjoy it.</p>
                    <p className="text-gray-400">Have a great day!</p>
                    <Button className="mt-5">
                        <Link href="/">Go Back</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default SuccessComp