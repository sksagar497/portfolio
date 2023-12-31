import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import danceImage from './dance.jpg';
import cricketImage from "./cricket.jpg";
import problemSolvingImage from "./problem solving.jpeg";
import readingImage from "./reading.jpg";

const Hobby = () => {
  const hobbies = [
    {
      genre: "Dance",
      link: danceImage,
      description: "Express yourself through dance.",
    },
    {
      genre: "Cricket",
      link: cricketImage,
      description: "Enjoy the thrill of the game.",
    },
    {
      genre: "Problem Solving",
      link: problemSolvingImage,
      description: "Solving problems is a passion.",
    },
    {
      genre: "Reading Books",
      link: readingImage,
      description: "Get lost in the world of books.",
    },
  ];

  return (
    <div >
  <h3 style={{color:'white',textAlign:'center', backgroundColor:'#008080', padding: '15px'}}>Welcome to My Skills Page :-</h3>
    <div  style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "16px" }}>
      {hobbies.map((hobi, index) => (
        <Card key={index} sx={{ width: 500, marginBottom: "16px",backgroundColor:'transparent',color:'white' }}>
          <CardMedia
            component="img"
            alt={hobi.genre}
            height="300"
            image={hobi.link}
          />
          <CardContent >
            <Typography gutterBottom variant="h5" component="div">
              {hobi.genre}
            </Typography>
            <Typography variant="body2" color="white">
              {hobi.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
    </div>
  );
};

export default Hobby;
