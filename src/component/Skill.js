import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function BasicRating() {
 
  const containerStyle = {
    padding: '20px',  // Padding to create space inside the container
    display: 'flex',
    flexDirection: 'row',  // Arrange in a row layout
    justifyContent: 'space-around',  // Arrange in a column layoutm
    

  };

  return (
    <React.Fragment>
    <div style={containerStyle}>
      <Box
      sx={{
        '& > legend': { mt: 2 },
        display: '-ms-inline-flexbox',
        marginLeft: '100',
        color: '#008080'
        
      }}
    >
      <Typography variant='h5' sx={{textDecoration:'underline'}} component={'snap'}>Web DEVELOPMENT SKILL</Typography>
      <Typography component="legend">HTML</Typography>
      <Rating
        name="read-only"
        value={5}
        readOnly
        sx={{color: '#FF1493'}}
      />
      <Typography component="legend">CSS</Typography>
      <Rating sx={{color: '#FF1493'}} name="read-only" value={3} readOnly />
      <Typography component="legend">JAVASCRIPT</Typography>
      <Rating sx={{color: '#FF1493'}} name="disabled" value={4} readOnly />
      <Typography component="legend">React</Typography>
      <Rating sx={{color: '#FF1493'}} name="no-value" value={3.5}  readOnly/>
      <Typography component="legend">Material UI</Typography>
      <Rating sx={{color: '#FF1493'}} name="no-value" value={3.1}  readOnly/>
      <Typography component="legend">GIT</Typography>
      <Rating sx={{color: '#FF1493'}} name="no-value" value={3.1}  readOnly/>
    </Box>
    <Box
      sx={{
        '& > legend': { mt: 2 },
        display: '-ms-inline-flexbox',
        marginLeft: '100',
        color: '#008080'
      }}
    >
      <Typography variant='h5' sx={{textDecoration:'underline'}} component={'snap'}>Relevant Course-Work</Typography>
      <Typography component="legend">Data Structure & Algorithm</Typography>
      <Rating
        name="read-only"
        value={3}
        readOnly
        sx={{color: '#FF1493'}}
      />
      <Typography component="legend">DBMS</Typography>
      <Rating sx={{color: '#FF1493'}} name="read-only" value={4} readOnly />
      <Typography component="legend">CPP</Typography>
      <Rating sx={{color: '#FF1493'}} name="CPP" value={4} readOnly />
      <Typography component="legend">Operating System</Typography>
      <Rating sx={{color: '#FF1493'}} name="no-value" value={3.5}  readOnly/>
      <Typography component="legend">Problem Solving</Typography>
      <Rating sx={{color: '#FF1493'}} name="no-value" value={3.1}  readOnly/>
    </Box>
    </div>
    </React.Fragment>

  );
}

const Skill = () => {
  return (
    <>
      <h3 style={{color:'white', textAlign:'center', backgroundColor:'#008080', padding: '5px'}}>Welcome to My Skills Page :-</h3>
        <BasicRating />
    </>
  )
}

export default Skill