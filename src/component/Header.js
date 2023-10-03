import React, { useState } from "react";
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Person3Icon from "@mui/icons-material/Person3";
import DrawerCom from "./DrawerCom";
import { Link,useLocation,matchPath } from "react-router-dom";
import Hobby from "./Hobby";
import Home from "./Home";
const PAGES = ["HOME", "PROJECTS", "SKILLS", "EDUCATION", "HOBBIES"];

const Header = () => {
  
  const [value, setValue] = useState("");
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <React.Fragment>
      <AppBar  sx={{ background: "#063970" , position: 'fixed', top: '0%'}}>
        <Toolbar>
          {isMatch ? (
            <>
              <Typography>WELCOME TO MY PORTFOLIO</Typography>
              <DrawerCom />
            </>
          ) : (
            
            <Tabs 
            value={value}
              textColor="white"
              onChange={(e, value) => setValue(value)}
              indicatorColor="secondary"
            > 
                          
                <Tab label='HOME' component={Link} to='/' />
                <Tab label='PROJECTS' component={Link} to='/projects' />
                <Tab label='SKILLS' component={Link} to='/skills' />
                <Tab label='EDUCATION' component={Link} to='/educations' />
                <Tab label='HOBBIES' component={Link} to='/hobbies' />
            </Tabs>
          )}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default Header;
