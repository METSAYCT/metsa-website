import { Typography } from '@mui/material'
import React from 'react'
import Footer from '../components/footer/Footer'
import ExecutivesCard from '../components/HomeComponents/executives/ExecutivesCard'
import Header from '../components/HomeComponents/Header'

const executives = () => {
  return (
    <>
      <Header />
      <div>
        <div className='bg-gradient-to-r from-black  to-red-900 py-40'>
          <Typography className='text-center text-2xl md:text-5xl' variant="h3" color="#fff">Meet All Our Departmental Executives</Typography>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 mt-10 bg-slate-300 md:py-8 lg:grid-cols-4 gap-5 md:px-10'>
          <ExecutivesCard />
          <ExecutivesCard />
          <ExecutivesCard />
          <ExecutivesCard />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default executives