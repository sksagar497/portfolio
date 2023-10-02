import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import pingPong from './pingpong.jpeg';
import weather from './weather.jpg';
import todo from './todo.png';
import portfolio from './portfolio.png'

const Project = () => {
  const hobbies = [
    {
      genre: "Ping Pong Game",
      link: pingPong,
      description: "Skills required :-",
      skill: [
          'javaScripts',
          'HTML',
          'cSS'
      ],
    },
    {
      genre: "To-Do List",
      link: todo,
      description: "skills required",
      skill: [
        'javaScripts',
        'React'
      ]
    },
    {
      genre: "Weather App",
      link: weather,
      description: "skills required",
      skill: [
        'javaScripts',
        'React',
        'cSS'
      ]
    }

    ,
    {
      genre: "Portfolio",
      link: portfolio,
      description: "skills required to make this page",
      skill: [
        'javaScripts',
        'React',
        'React-Router-Dom',
        'Material UI'
      ]
    },
  ];

  return (
    <>
  <h3 style={{color:'white', textAlign:'center', backgroundColor:'#008080', padding: '5px'}}>Welcome to My Project Page :-</h3>
    <div style={{ display: "flex"  , justifyContent: "center", flexWrap: "wrap", gap: "16px" }}>
      {hobbies.map((hobi, index) => (
        <Card key={index} sx={{ width: 470, marginBottom: "16px", background: '#FFF5EE' }}>
          <CardMedia
            component="img"
            alt={hobi.genre}
            height="250"
            image={hobi.link}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {hobi.genre}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {hobi.description}
            </Typography>
            <Typography variant="body" color='text.primary'>
              {
                hobi.skill.map((sk,index) => (
                  <li>{sk}</li>
                ))
              }
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
    </>
  );
};

export default Project;
