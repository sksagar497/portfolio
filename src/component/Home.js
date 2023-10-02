import React from 'react'

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid';

import { Typography, colors } from '@mui/material';

const MyCard = () => {
  return (
    <Card style={{ display: 'flex', flexDirection: 'column', height: '100%', alignItems:'center', justifyContent: 'center'}}>
      <CardMedia 
        component='img' alt="Image" 
        style={{ width: '40%', height: 'auto', borderRadius: '50%'}}
        image={require('./DSC_2408.JPG')}

      />
      <CardContent>
      <Typography variant="h5" gutterBottom>
          Sagar Kumar
        </Typography>
        <Typography variant="body1">
          Hello! I'm <span style={{color:'red'}}>Sagar Kumar</span>, a passionate and creative frontend developer with a keen eye for design and a love for clean, efficient code. My goal is to build user-friendly and visually stunning websites that leave a lasting impression.
        </Typography>
        
      </CardContent>
    </Card>
  )
}

const TextArea = () => {
  return (
    <>
      <Card style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <Typography variant='h5' color='text.primary'> Welcome to my Portfolio</Typography>
      <hr></hr>
      <Typography variant="body1">
           I am looking for the opportunity to work on diverse projects and collaborate with talented teams. My skills range from HTML, CSS, and JavaScript to various frontend frameworks and libraries, including React and Material ui.
        </Typography>
        <Typography variant="body1">
          When I'm not coding, you can find me exploring the latest trends in web development, experimenting with new technologies, or enjoying a good cup of coffee.
        </Typography>
        <Typography variant="body1">
          Feel free to explore my portfolio to see some of my projects and get in touch if you'd like to work together or simply say hello!
        </Typography>
      </Card>
    </>
  )
}

const Home = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={5}>
      <TextArea />
      </Grid>
      <Grid item xs={12} sm={4}>
      <MyCard />
      </Grid>
    </Grid>
    
  )
}

export default Home