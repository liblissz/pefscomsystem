import React from 'react'
import Hero from '../Componennts/Hero/Hero'
import Features from '../Componennts/Feature/Feature'
import UseCases from '../Componennts/Usecases/Usecases'
import Samples from '../Componennts/Samples/Samples'
import Pricing from '../Componennts/Prising/Prising'
import CTA from '../Componennts/CTA/CTA'
import Team from '../Pages/Team/Team'

const Homepage = () => {
  return (
    <div>
      <Hero/>
      {/*  */}
            <Features/>
          <UseCases/>
          <Samples/>
          <Team/>
          <Pricing/>
          <CTA/>
    </div>
  )
}

export default Homepage
