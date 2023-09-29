import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React,{useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
const PAGES = ['HOME','PROJECTS','SKILLS','EDUCATION','HOBBIES']
const DrawerCom = () => {
    const [openDrawer,setOpenDrawer] = useState(false);
  return (
    <React.Fragment>
        <Drawer open={openDrawer} onClick={()=>setOpenDrawer(false)}>
            <List>
                {
                    PAGES.map((page,value) => (
                        <ListItemButton onClick={()=>setOpenDrawer(false)} key={value}>
                            <ListItemIcon>
                                <ListItemText>{page}</ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                    ))
                }
                
            </List>
        </Drawer>
        <IconButton sx={{marginLeft: 'auto' , color: 'white'}} onClick={() => setOpenDrawer(!openDrawer)}>
            <MenuIcon />
        </IconButton>
    </React.Fragment>
  )
}

export default DrawerCom