'use client'
import Link from 'next/link'
import Marbilia from './Images/Marbilia.png'
import  Image  from "next/image"
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {ShoppingBag} from 'lucide-react'

const links = [
    { name : "Home", href : "/" },
    { name : "Men", href : "/men" },
    { name : "Women", href : "/women" },
    { name : "Kids", href : "/kids" }
]

const Navbar = () => {
    const pathName = usePathname()
    return (
        <header className="fixed w-full z-40 border-b glassmorphism">
            <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
                <Link href="/">
                    <Image src={Marbilia} alt='' width={150} height={150} />
                </Link>
                <nav className="hidden gap-12 lg:flex 2xl:ml-16">
                    {
                        links.map((link, id) => (
                            <div key={id}>
                                {pathName === link.href ? (
                                    <Link href={link.href} className="text-lg font-semibold text-primary">{link.name}</Link>
                                ) : (
                                    <Link href={link.href} className="text-lg font-semibold text-gray-600 transition durtion-100 hover:text-primary">{link.name}</Link>
                                )}
                            </div>
                        ))
                    }
                </nav>
                <div className="flex divide-x border-r sm:border-l">
                    <Button variant="outline" className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-22 md:w-22a rounded-sm">
                            <ShoppingBag />
                            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
                                Cart
                            </span>
                        </Button>
                </div>
            </div>
        </header>
    )
}

export default Navbar