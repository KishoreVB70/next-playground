import React, { Suspense } from 'react'
import ProductReview from '@/components/ProductReview'
import ProductDetail from '@/components/ProductDetail'
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