export const getAllProducts = () => {
  const query = `*[_type == "product"]`
  return query
}