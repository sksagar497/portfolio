import React, { useState } from "react";
import FitbitIcon from '@mui/icons-material/Fitbit';
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  Box, TextField, Slider,
  Modal,
} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';

import DrawerCom from "./DrawerCom";
import { Link, useLocation, matchPath } from "react-router-dom";
import Hobby from "./Hobby";
import Home from "./Home";
const PAGES = ["HOME", "PROJECTS", "SKILLS", "EDUCATION", "HOBBIES"];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const RatingSlider = () => {
  const [rating, setRating] = useState(0);

  const handleSliderChange = (event, newValue) => {
    setRating(newValue);
  };

  return (
    <div>
      <Typography gutterBottom>Rating</Typography>
      <Slider
        value={rating}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
        color="primary"
        aria-labelledby="rating-slider"
        max={10} // Adjust the maximum value for the rating (e.g., 5 for a 5-star rating)
      />
    </div>
  );
};

const Header = () => {
  const [value, setValue] = useState("");
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
      <AppBar sx={{ background: "#063970", position: "fixed", top: "0%" }}>
        <Toolbar>
          <FitbitIcon />
          {isMatch ? (
            <>
              <Typography>  WELCOME TO MY PORTFOLIO</Typography>
              <DrawerCom />
            </>
          ) : (
            <Tabs
              value={value}
              textColor="white"
              onChange={(e, value) => setValue(value)}
              indicatorColor="secondary"
            >
              
              <Tab icon={<HomeIcon />} label="HOME" component={Link} to="/" /> 
              <Tab icon={<AccountTreeIcon />} label="PROJECTS" component={Link} to="/projects" />
              <Tab icon={<RocketLaunchIcon />} label="SKILLS" component={Link} to="/skills" />
              <Tab icon={<HistoryEduIcon />} label="EDUCATION" component={Link} to="/educations" />
              <Tab icon={<SportsCricketIcon />} label="HOBBIES" component={Link} to="/hobbies" />
              <Tab icon={<ModeStandbyIcon />} sx={{ marginLeft: 'auto' }} onClick={handleOpen} label="Open Modal" />
              <Modal
                
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={style}>
                  <h4>Thanks For Visiting the Page</h4>
                  <TextField
                    id="standard-basic"
                    label="Suggetion for my Portfolio"
                    variant="standard"
                  />
                  <br /><br />
                  <RatingSlider />
                </Box>
              </Modal>
            </Tabs>
          )}
        </Toolbar>
        <div></div>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
