import React from "react";
import MuiTimeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Star as StarIcon } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import eduImage from './edu.jpg'

const TimeData = () => {
  const timelineData = [
    {
      year: "2013-2017",
      event: "High School",
      inst: "Gurukul",
      loc: "Gaya",
      grade: 9.2,
    },
    {
      year: "2017-2019",
      event: "Intermediate",
      inst: "British English School",
      loc: "Gaya",
      grade: 72.2,
    },
    {
      year: "2019-2023",
      event: "B.tech",
      inst: "Techno International Newtown",
      loc: "Kolkata",
      grade: 9.2,
    },
    // Add more timeline events
  ];
  return (
    <MuiTimeline align="left">
    {timelineData.map((item, index) => (
      <TimelineItem key={index}>
        <TimelineSeparator>
          <StarIcon color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="body2" >
            Year : {item.year}
          </Typography>
          <Typography variant='caption'> {item.event}</Typography>
          <Typography variant='body1'>Institute: {item.inst} ,{item.loc}</Typography>
          <Typography variant='overline'>Grade: {item.grade}</Typography>
        </TimelineContent>
      </TimelineItem>
    ))}
  </MuiTimeline>
  )
}
function Pic(){
  return (
    <div color="red">
      <img width={'75%'} marginTop='50px' src={eduImage} alt="edu pic" />
    </div>
  )
}

const Education = () => {
  return (
    <>
    <h3 style={{color:'white', textAlign:'center', backgroundColor:'#BDB76B', padding: '5px'}}>Welcome to my Education Page : -</h3>
      <Grid container spaacing = '2'>
        <Grid item alignItems={'left'} xs={12} md={7}><TimeData /> </Grid>
        <Grid item xs={12} md={5}> <Pic/></Grid>
      </Grid>
    </>
  );
};

export default Education;
