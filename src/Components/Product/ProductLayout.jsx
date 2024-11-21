import React from 'react'
import ProductDetail from './Product'
import ProductDetails from './ProductDetail2'
import RelatedProducts from './ProductList'
import ProductGallery from './ProductGallery'

const ProductLayout = () => {
  return (
    <div>
        <ProductDetail/>
        <hr/>
        <ProductDetails/>
        <hr/>
        <RelatedProducts/>
        <ProductGallery/>

    </div>
  )
}

export default ProductLayout
