import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom'; // Import Link from React Router
import pingPong from './pingpong.jpeg';
import weather from './weather.jpg';
import todo from './todo.png';
import portfolio from './portfolio.png';

const Project = () => {
  const hobbies = [
    {
      genre: "Ping Pong Game",
      url: "",
      link: pingPong,
      description: "Skills required :-",
      skill: [
          'JavaScripts',
          'HTML',
          'Css'
      ],
    },
    {
      genre: "To-Do List",
      url: "https://sksagar497.github.io/todo_list/",
      link: todo,
      description: "skills required",
      skill: [
        'JavaScripts',
        'React'
      ]
    },
    {
      genre: "Weather App",
      url: "",
      link: weather,
      description: "skills required",
      skill: [
        'JavaScripts',
        'React',
        'Css'
      ]
    }

    ,
    {
      genre: "Portfolio",
      url: "https://sksagar497.github.io/weather/",
      link: portfolio,
      description: "skills required to make this page",
      skill: [
        'JavaScripts',
        'React',
        'React-Router-Dom',
        'Material UI'
      ]
    },
  ];

  return (
    <>
  <h3 style={{color:'white', textAlign:'center', backgroundColor:'#008080', padding: '15px'}}>Welcome to My Project Page :-</h3>
    <div width='75%' style={{ display: "flex"  , justifyContent: "center", flexWrap: "wrap", gap: "40px" }}>
      {hobbies.map((hobi, index) => (
        <Link sx={{width: '75%'}} key={index} to={hobi.url} style={{ textDecoration: "none" }}>
        <Card key={index} href='hobi.url' sx={{ marginBottom: "16px", background: 'transparent', border: "dotted white 0.5px",boxShadow:"none" }}>
          <CardMedia
            component="img"
            alt={hobi.genre}
            height="200"
            image={hobi.link}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" color={"white"}>
              {hobi.genre}
            </Typography>
            <Typography variant="body2" color="white">
              {hobi.description}
            </Typography>
            <Typography variant="body" color='white'>
              {
                hobi.skill.map((sk,index) => (
                  <li>{sk}</li>
                ))
              }
            </Typography>
          </CardContent>
        </Card>
        </Link>
      ))}
    </div>
    </>
  );
};

export default Project;
