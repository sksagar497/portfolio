import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from '@mui/icons-material/Home';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';

const PAGES = [
  { label: "HOME", link: "/", icon: <HomeIcon /> },
  { label: "PROJECTS", link: "/projects", icon: <AccountTreeIcon /> },
  { label: "SKILLS", link: "/skills", icon: <RocketLaunchIcon /> },
  { label: "EDUCATION", link: "/educations", icon: <HistoryEduIcon /> },
  { label: "HOBBIES", link: "/hobbies", icon: <SportsCricketIcon /> },
];

const DrawerCom = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  return (
    <React.Fragment>
      <Drawer open={openDrawer} onClick={handleDrawerClose}>
        <List>
          {PAGES.map((page, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton component={Link} to={page.link}>
                <ListItemIcon>
                  {page.icon}
                </ListItemIcon>
                <ListItemText primary={page.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ marginLeft: "auto", color: "white" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerCom;
