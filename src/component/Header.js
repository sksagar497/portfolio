import React, {useState} from 'react'
import {AppBar, Tab, Tabs, Toolbar, Typography,useMediaQuery,useTheme} from '@mui/material'
import Person3Icon from '@mui/icons-material/Person3';
import DrawerCom from './DrawerCom';
const PAGES = ['PROFILE','PROJECTS','SKILLS','EDUCATION','HOBBIES']
const Header = () => {
    const [value,setValue] = useState('');
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <React.Fragment>
        <AppBar sx={{background: '#063970'}}>
        <Toolbar>
        {isMatch ? (
            <>
            <Typography>
                WELCOME TO MY PORTFOLIO
            </Typography>
            <DrawerCom />
            </>
        ):( <Tabs textColor='white' value={value} onChange={(e,value) => setValue(value)} indicatorColor='secondary'>
            {
                PAGES.map((page,index)=>(
                    <Tab key={index} label={page} />
                ))
            }
        
    </Tabs>
    )}        
        </Toolbar>
        
        </AppBar>
    </React.Fragment>
  )
}

export default Header