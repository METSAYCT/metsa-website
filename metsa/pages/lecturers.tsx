import { Typography } from '@mui/material'
import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/HomeComponents/Header'
import LecturersCard from '../components/HomeComponents/lecturers/LecturersCard'

const lecturers = () => {
  return (
    <>
      <Header />
      <div>
        <div className='bg-gradient-to-r from-red-500  to-red-900 py-40'>
          <Typography className='text-center text-2xl md:text-5xl' variant="h3" color="#fff">Meet All Our Departmental Lecturers</Typography>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 mt-10 bg-slate-300 md:py-8 lg:grid-cols-4 gap-5 md:px-10'>
          <LecturersCard />
          <LecturersCard />
          <LecturersCard />
          <LecturersCard />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default lecturers