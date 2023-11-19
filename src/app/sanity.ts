import { createClient } from "next-sanity";
import ImageUrlBuilder from '@sanity/image-url'

export const client = createClient({
    projectId : 't6m3qvcr',
    dataset : 'production',
    apiVersion : '2022-03-25',
    useCdn : false,
})

const builder = ImageUrlBuilder(client)

export function urlFor(source: any){
    return builder.image(source)
}