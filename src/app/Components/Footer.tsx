"use client"
import logo from './Images/Marbilia.png'
import Image from 'next/image'
import { Mail, Facebook, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
    { name : "Home", href : "/" },
    { name : "Men", href : "/Men" },
    { name : "Women", href : "/Women" },
    { name : "Teens", href : "/Teens" }
]


const Footer = () =>{
    const pathName = usePathname()
    const handleEmailClick = async () => {
        await navigator.clipboard.writeText('marbiliamode@gmail.com')
        alert('Copied Email to Clipboard')
    }
    return(
        <div className="w-full flex md:justify-center justify-between items-center flex-col p-x-4 rounded-none pb-2 border-t-[1px] mt-16 border-t-gray-300">
            <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4">
                <div className="flex flex-[0.5] justify-between items-center">
                    <Image src={logo} alt="MarbiliaMode" className="w-32" />
                </div>
                <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
                {
                        links.map((link, id) => (
                            <div key={id}>
                                {pathName === link.href ? (
                                    <Link href={link.href} className="text-lg font-semibold text-primary mx-2 cursor-pointer">{link.name}</Link>
                                ) : (
                                    <Link href={link.href} className="text-lg font-semibold transform delay-150 text-gray-300 hover:text-primary mx-2 cursor-pointer hover:translate-y-1">{link.name}</Link>
                                )}
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex justify-center items-center flex-col ">
                <p className="text-white text-md text-center">Reach us out at</p>
                <div className="flex gap-8 mt-5 cursor-pointer">
                    <Mail className="transform delay-75 hover:-translate-y-[3px]" onClick={handleEmailClick} />
                    <a href="https://www.facebook.com/profile.php?id=61553390913538"><Facebook className="transform delay-150 hover:-translate-y-[3px]"/></a>
                    <Instagram className="transform delay-75 hover:-translate-y-[3px]" />
                    <Linkedin className="transform delay-75 hover:-translate-y-[3px]" />
                </div>
            </div>
            <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-7" />
            <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
                <p className="text-white text-sm text-center">©MarbiliaMode 2023</p>
                <p className="text-white text-sm text-center">All rights reserved</p>
            </div>
        </div>
    )
}
export default Footer