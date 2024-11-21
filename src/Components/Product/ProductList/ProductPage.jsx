import HeroComponent from "./HeroComponent"
import ProductCatalog from "./ProductCard"
import ProductGrid from "./ProductGrid"

const ProductPage = () => {
  return (
    <div>
         <HeroComponent/>   
         <ProductGrid/>
         <ProductCatalog/>
    </div>
  )
}

export default ProductPage
