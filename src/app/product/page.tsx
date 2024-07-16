import React, { Suspense } from 'react'
import ProductDetail from './ProductDetail'
import ProductReview from './ProductReview'
const Product = () => {
  return (
    <div>
        This is the product page
        <Suspense fallback={<h1>Loading detail....</h1>} >
          <ProductDetail />
        </Suspense>
        <Suspense fallback={<h1>Loading review</h1>}>
        <ProductReview  />
        </Suspense>
    </div>
  )
}

export default Product