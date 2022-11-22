import React from 'react'
import BannerSection from '../sections/BannerSection'
import ContactSection from '../sections/ContactSection'
import FlashSaleSectionLeft from '../sections/FlashSaleSectionLeft'
import FlashSaleSectionRight from '../sections/FlashSaleSectionRight'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'
import ShowcaseSection from '../sections/ShowcaseSection'



// Usecontext x2


const homeview: React.FC = () => {
  
  
  window.parent.document.title = 'Home / Fixxo'


  return (
    <>
      <div className='homeView'>
          <MainMenuSection /> 
          <ShowcaseSection />
        </div> 
        <ProductGridSection title="Featured Products" />
        <BannerSection />
        <FlashSaleSectionLeft btnTitle="FLASH SALE" />
        <FlashSaleSectionRight btnTitle="FLASH SALE" />
        <ContactSection />
        <FooterSection />
    </>
  )
}

export default homeview