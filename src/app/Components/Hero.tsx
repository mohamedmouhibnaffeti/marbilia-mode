import Image from "next/image"
import { client, urlFor } from "../sanity"
import Link from "next/link"

const FetchImages = async () => {
    const query = "*[_type == 'heroimage'][0]"
    const data = await client.fetch(query)
    return data
}

const Hero = async () => {
    const data = await FetchImages()
    return (
        <section className="mx-auto maw-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
            <div className="mb-8 flex flex-wrap justify-between md:mb-16">
                <div className="mb-6 flex w-fill flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-48">
                    <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl md:mb-8 md:text-6xl">
                        Clothes That Make You Feel Like You
                    </h1>
                    <p className="max-w-md leading-relaxed text-gray-400 xm:text-lg">
                        we bring you fashion-forward solutions at the most affordable prices in the market.
                    </p>
                </div>
                <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
                    <div className="relative left-12 top-8 z-10 -ml-12 overflow-hidden rounded-lg bg-slate-400 shadow-lg md:left-16 md:top-12 lg:ml-0">
                        <Image 
                        src={urlFor(data.image1).url()} 
                        alt="Man" 
                        priority
                        className="h-full w-full object-cover object-center"
                        width={400}
                        height={400}
                        />
                    </div>
                    <div className="overflow-hidden rounded-lg bg-slate-400 shadow-lg">
                    <Image 
                        src={urlFor(data.image2).url()} 
                        alt="Man" 
                        className="h-full w-full object-cover object-center"
                        priority
                        width={400}
                        height={400}
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
                    <Link href="/Men" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-300">
                        Men
                    </Link>
                    <Link href="/Women" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-300">
                        Women
                    </Link>
                    <Link href="/Teens" className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-300">
                        Teens
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero