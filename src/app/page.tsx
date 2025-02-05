import React from "react"
import Navbar from "./components/navbar"
import Listing from "./components/listing"
import Hero from "./components/hero"
import Carousel from "./components/carousel"
import Carousel2 from "./components/carousel2"
import Featurepost from "./components/featurepost"
import Footer from "./components/footer"
import ProductCards from "./apiproducts/page"
import Header from "./components/header"
export default function page(){
  return(
     <div>
      <Header />
     <Navbar />
     <Hero />
     <Listing/>
     <ProductCards/>
     <Carousel/>
     <Carousel2/>
     <Featurepost/>
     <Footer/>
    

     </div>
  )
}

