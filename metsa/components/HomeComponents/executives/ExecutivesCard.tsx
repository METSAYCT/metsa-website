import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ExecutivesCard = () => {
  return (
    <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          height="480"
          image="/images/executives/pic-3.png"
          alt="green iguana"
          className='rounded-full h-60 w-60 mx-auto mt-5'
        />
        <CardContent>
          <Typography className='text-center' gutterBottom variant="h5" component="div">
            Faleye Caleb
          </Typography>
          <Typography className='text-center' variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ExecutivesCard