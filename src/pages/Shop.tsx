import React from 'react'
import Hero from '../components/hero/Hero'
import Popular from '../components/popular/Popular'
import Newcollection from '../components/newcollection/Newcollection'
import Newsletter from '../components/newsletter/Newsletter'
export const Shop = () => {
  return (
    <div>
      <Hero/>
      <div style={{marginTop: '40px'}}><Popular/></div>
      
      <Newcollection/>
      <Newsletter/>
    </div>
  )
}
