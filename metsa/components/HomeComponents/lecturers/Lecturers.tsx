import { Box, Typography } from '@mui/material'
import React from 'react'
import WhatWeOffer from '../../WhatWeOffer'
import LecturersCard from './LecturersCard'

const Lecturers = () => {
  return (
    <Box className='mb-16 '>
      <WhatWeOffer title={'What We Offer'} subtitle={'Join us to know all the courses in this wonderfull department so that you can have a wonderful and beautiful user experience Join us to know all the courses in this wonderfull department so that you can have a wonderful and beautiful user experience'} />
      <Box className='md:px-10' sx={{ margin: "1rem 0" }}>
        <Typography className="text-center md:text-start" variant="h5" color="initial">Meet Your Departmental Lecturers</Typography>
        {/* <Typography className="text-center md:text-start" variant="subtitle1" color="initial">Discove all the lecturers in the department of mechatronics engineering</Typography> */}
      </Box>
      <Box className='relative'>
        <Box className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:px-10' sx={{
          backgroundImage: "url('/images/school.jpg')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          padding: "1.5rem",
          backgroundAttachment: "fixed"

        }}>
          <LecturersCard />
          <LecturersCard />
          <LecturersCard />
          <LecturersCard />
        </Box>
      </Box>
    </Box>
  )
}

export default Lecturers