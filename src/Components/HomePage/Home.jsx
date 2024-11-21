
import BestSellingProducts from "./BestSelling"
import BlogCards from "./Blog"
import Features from "./Bottom"
import ContactSection from "./Contact"
import EverydayElegance from "./EveryDay"
import FeatureProducts from "./Feaur"
import HeroSection from "./Hero"
import InstagramGallery from "./Instagallery"
import JewelryStoreAd from "./Jewel"
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
      <BlogCards/>
      <JewelryStoreAd/>
      <InstagramGallery/>
      <Features/>
      <ContactSection/>
    </div>
  )
}

export default Home