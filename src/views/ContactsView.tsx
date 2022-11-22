import React from 'react'
import BreadCrumbSection from '../sections/BreadCrumbSection'
import ContactFormSection from '../sections/ContactFormSection'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import MapSection from '../sections/MapSection'


//Nothing



const ContactsView: React.FC = () => {

    window.parent.document.title = 'Contacts / Fixxo'

  return (
    <>
      <MainMenuSection />  
      <BreadCrumbSection currentPage="Contacts" />
      <MapSection />
      <ContactFormSection />
      <FooterSection />
    </>
  )
}

export default ContactsView