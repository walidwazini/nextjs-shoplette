import imageUrlBuilder from '@sanity/image-url'

import client from "./client"

const urlForThumbnail = (src) => {

  return imageUrlBuilder(client).image(src).width(300).url()
}

export { urlForThumbnail }