import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const AboutUs = () => {
  return (
    <>
      <hr />
      <Box className='mb-8 md:px-10'>
        <Typography className='text-2xl mb-2 md:text-4xl font-bold' variant="h4" textAlign={"center"} color="initial">About Our Department</Typography>
        <Typography className='text-sm md:text-lg' textAlign={"center"} variant="subtitle1" color="initial">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, quam iste? Exercitationem, quasi inventore explicabo cum in ducimus repellat optio.</Typography>
      </Box>
      <Box className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-16'>
        <img className=' md:my-auto' src="/images/school.jpg" alt="" />
        <Card>
          <CardActionArea>

            <CardContent>
              <Typography className='text-2xl text-center md:text-start md:text-5xl' gutterBottom variant="h3" component="div">
                Our Department
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, officia fugiat numquam culpa reiciendis repellendus doloribus ducimus.
                Sed sapiente harum est accusantium repudiandae dolorum consequuntur ad, voluptatum quos similique! Modi veniam pariatur laudantium aut! Nobis ratione, amet culpa ipsa esse itaque molestias, explicabo dicta
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, officia fugiat numquam culpa reiciendis repellendus doloribus ducimus.
                Sed sapiente harum est accusantium repudiandae dolorum consequuntur ad, voluptatum quos similique! Modi veniam pariatur laudantium aut! Nobis ratione, amet culpa ipsa esse itaque molestias, explicabo dicta ex totam similique sapiente dolorum vitae?
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className='justify-center md:justify-start pl-5'>
            <Button size="small" variant='contained' color="primary" className='bg-red-500 transition-all ease-in-out duration-200 delay-75 hover:bg-black'>
              Read More
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  )
}

export default AboutUs