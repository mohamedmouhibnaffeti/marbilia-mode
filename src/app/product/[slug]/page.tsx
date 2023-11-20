import ImageGallery from "@/app/Components/imageGallery"
import { fullProduct } from "../../interface"
import { client } from "@/app/sanity"
import { Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import AddToBag from "@/app/Components/AddToBag"

async function fetchProducts(slug: string){
    const query = `*[_type == "product" && slug.current == "${slug}" ][0]{
                        _id,
                        images,
                        name,
                        description,
                        price,
                        "slug": slug.current,
                        "categoryName": category->name
                    }`
    const data = await client.fetch(query)
    return data
}

const ProductPage = async ({params}: {params: {slug: string}}) => {
    const data: fullProduct = await fetchProducts(params.slug);
    return (
        <div className="mt-48">
            <div className="mx-auto max-w-screen-xl px-4 md:px-8">
                <div className="grid gap-8 md:grid-cols-2">
                    <ImageGallery images={data.images} />
                    <div className="md:py-8">
                        <div className="mb-2 md:mb-3">
                            <span className="mb-0.5 inline-block text-gray-300">{data.categoryName}</span>
                            <h1 className="text-2xl font-bold text-gray-200 lg:text-3xl">{data.name}</h1>
                        </div>
                        <div className="mb-4 ">
                            <div className="flex items-end gap-2">
                                <span className="text-xl font-bold text-gray-200 md:text-2xl">{data.price} TND</span>
                                <span className="mb-0.5 text-red-500 line-through">{data.price + 28} TND</span>
                            </div>
                            <span className="text-sm text-gray-400">No Transportation Charges</span>
                        </div>
                        <div className="mb-6 flex items-center gap-2 text-gray-400">
                            <Truck />
                            <span  className="text-sm">2-4 Day Shipping</span>
                        </div>
                        <div className="flex gap-2.5">
                            <AddToBag  currency="TND" description={data.description} image={data.images[0]} name={data.name} price={data.price} key={data._id} />
                            <Button variant="secondary">Checkout now</Button>
                        </div>
                        <p className="mt-12 text-base text-gray-400 tracking-wide">{data.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage