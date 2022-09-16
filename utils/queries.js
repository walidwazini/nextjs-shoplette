export const getAllProducts = () => {
  const query = `*[_type == "product"] | order(_createdAt desc)`
  return query
}