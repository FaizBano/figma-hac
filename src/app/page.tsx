
import Catagories from "./components/Categories";
import CompanyLogo from "./components/companyLogo";

import Hero from "./components/Hero";
import OurProducts from "./components/ourProducts";
import HotProducts from "./components/HotProducts";
import Instagram from "./components/Instagram";
import FeaturedProduct from "./components/featuredProduct";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProduct />
      <CompanyLogo />
      <Catagories />
      <HotProducts />
      <OurProducts />
      <Instagram />
      <HotProducts />
      <OurProducts />
      
    </>
  );
}