import SanityClient from './client'
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(SanityClient)

export function buildImages(source){
    const img = builder.image(source)
    return img
}

export function separator(numb) {
    var str = numb.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join(".");
}