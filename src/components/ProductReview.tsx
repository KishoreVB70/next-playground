import React from 'react'

const ProductReview = async() => {
    await new Promise((resolve) => setTimeout(resolve, 4000))
    return (
        <div>ProductReview</div>
    )
}

export default ProductReview