import React from 'react'
import Innerheader from './components/Innerheader'
import Homeservices from './components/Homeservices'
import ServicesNewsletter from './components/ServicesNewsletter'
import ServicesPricing from './components/ServicesPricing'
function Services() {
  return (
    <>
      <Innerheader />
      <Homeservices />
      <ServicesNewsletter />
      <ServicesPricing />
    </>
  )
}

export default Services