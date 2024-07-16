import React from 'react'

const ProductDetail = async() => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail