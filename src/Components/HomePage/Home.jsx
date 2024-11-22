
import BestSellingProducts from "./BestSelling"

import Features from "./Bottom"
import ContactSection from "./Contact"
import EverydayElegance from "./EveryDay"
import FeatureProducts from "./Feaur"
import HeroSection from "./Hero"
import InstagramGallery from "./Instagallery"

import FeaturesSection from "./Lower"
import ShopByCategory from "./Shop"

const Home = () => {
  return (
    <div>
      <HeroSection/>
      
      <FeaturesSection/>
      <ShopByCategory/>
      <EverydayElegance/>
      <FeatureProducts/>
      
      <BestSellingProducts/>
    
     
      <InstagramGallery/>
      <Features/>
      <ContactSection/>
    </div>
  )
}

export default Home