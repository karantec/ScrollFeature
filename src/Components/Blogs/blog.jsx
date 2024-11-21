import React from 'react'
import Carousel from './Crousel'
import GallerySection from './Card'
import Item from './BlogItem'
import StyledSection from './StyleSection'

const Blog = () => {
  return (
    <div>
        <Carousel/>
        <Item/>
        <GallerySection/>
        
    </div>
  )
}

export default Blog