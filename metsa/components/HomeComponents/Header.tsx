import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import Image from 'next/image'
import Stack from '@mui/material/Stack'
import { Avatar, Box, Button, Link, Paper } from '@mui/material'
import { CounterState, increment, loginUser, logoutUser } from '../../pages/app/appSlice';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

})

const Header = () => {
  const { value, isLogin } = useSelector((state: CounterState) => state.counter);
  const dispatch = useDispatch()
  return (
    <AppBar className='hidden md:block' position="sticky" sx={{ backgroundColor: "#fff", padding: "0 1rem" }}>
      <StyledToolbar>
        <Link href='/'><Image src="/images/metsa.png" width={150} height={70} alt="" /></Link>
        <Stack direction={"row"} spacing={3}  >
          <Link underline='none' href="/" className='navLink hover:border-b-2 hover:border-red-600' >Home</Link>
          <Link underline='none' href="/lecturers" className='navLink hover:border-b-2 hover:border-red-600'>Lecturers</Link>
          <Link underline='none' href="/executives" className='navLink hover:border-b-2 hover:border-red-600'>Executives</Link>
          <Link underline='none' href="/department" className='navLink hover:border-b-2 hover:border-red-600'>Department</Link>
          <Link underline='none' href="/contact" className='navLink hover:border-b-2 hover:border-red-600'>Contact</Link>
          <Link underline='none' href="/about" className='navLink hover:border-b-2 hover:border-red-600'>About</Link>
        </Stack>
        {
          isLogin ?
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, }}>
              <Avatar src='/images/pic-6.png' alt='avatar' sx={{
                width: "40px",
                height: "40px"
              }} />
              <Typography className='text-slate-900' variant='h6'>Faleye Caleb</Typography>
              <Button onClick={() => dispatch(logoutUser())} variant='outlined' color='warning' size='small'>Logout</Button>
            </Box>
            :
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, }}>
              <Button variant='outlined' color='warning' size='small'>Register</Button>
              <Button onClick={() => dispatch(loginUser())} className='bg-gray-700 hover:bg-gray-900' variant="contained" size='small'>Login</Button>

            </Box>

        }


      </StyledToolbar>
    </AppBar>
  )
}

export default Header