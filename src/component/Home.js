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
    <Card style={{ display: 'flex', flexDirection: 'column', height: '100%', alignItems:'center', justifyContent: 'center', boxShadow: 'none',
    border: 'none'}}>
      <CardMedia 
        component='img' alt="Image" 
        style={{ width: '15%', height: 'auto', borderRadius: '50%'}}
        image={require('./DSC_2408.JPG')}

      />
      <CardContent style={{textAlign: 'center', width: '50%'}}>
      
        <Typography variant="body1">
          Hello! I'm <span style={{color:'red'}}>Sagar Kumar</span>, a passionate and creative frontend developer with a keen eye for design and a love for clean, efficient code. My goal is to build user-friendly and visually stunning websites that leave a lasting impression.
        </Typography>
        
      </CardContent>
    </Card>
  )
}



const Home = () => {
  return (
    <>
      <h3 style={{color:'white', textAlign:'center', backgroundColor:'#008080', padding: '15px'}}>Welcome to My Skills Page :-</h3>
      <MyCard />
    </>

      
    
  )
}

export default Home