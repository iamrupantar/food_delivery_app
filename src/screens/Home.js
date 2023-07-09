import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousal from '../components/Carousal'

export default function
  () {
  return (
    <>
      <div><Navbar /></div>
      <div><Carousal/></div>
      <div className='m-3 rounded'>
      <Card />
      <Card />
      <Card />
      <Card />
      </div>

      <div><Footer /></div>
    </>
  )
}
