export const getAllProducts = () => {
  const query = `*[_type == "product"] | order(_createdAt desc)`
  return query
}

export const getProductBySlug = () => {
  const query = `*[_type == "product" && slug.current == $slugValue][0]`
  // const query = `*[_type == "product" && slug.current == ${slug}][0]`
  return query
}

export const getProductById = () => {
  const query = `*[_type == "product" && _id == $id][0]`
  return query
}

export const getProductQuery = `*[_type == "product" && slug.current == $slugValue][0]`

export const getUserById = `*[_type == "user" _id == $id][0]`