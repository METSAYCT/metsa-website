import { Box, Typography } from '@mui/material'
import React from 'react'
import ExecutivesCard from './ExecutivesCard'

const Executives = () => {
  return (
    <Box className='mb-16 md:px-10'>
      <Box sx={{ margin: "1rem 0", }}>
        <Typography className="text-center md:text-start" variant="h5" color="initial">Meet Your Departmental Executives</Typography>
        <Typography className="text-center md:text-start" variant="subtitle1" color="initial">Discove all the executives in the department of mechatronics engineering</Typography>
      </Box>
      <Box className='grid grid-cols-1 lg:grid-cols-4 bg-slate-300 md:py-8 sm:grid-cols-2 gap-5 p-8'>
        <ExecutivesCard />
        <ExecutivesCard />
        <ExecutivesCard />
        <ExecutivesCard />
      </Box>
    </Box>
  )
}

export default Executives