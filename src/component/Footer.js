import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styled } from '@mui/material/styles';

const FooterContainer = styled('footer')(({ theme }) => ({
  backgroundColor: '#063970',
  padding: theme.spacing(3, 0),
  textAlign: 'center',
  position: 'fixed', // Stick to the bottom
  width: '100%', // Full width
  bottom: 0, // Stick to the bottom
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="md">
        <Box display="flex" justifyContent="center">
          <IconButton href="mailto:sksagar497@gmail.com" target="_blank" style={{ color: 'white' }}>
            <EmailIcon />
          </IconButton>
          <IconButton href="tel:+91 7643815954" target="_blank" style={{ color: 'white' }}>
            <PhoneIcon />
          </IconButton>
          <IconButton href="https://github.com/sksagar497" target="_blank" style={{ color: 'white' }}>
            <GitHubIcon />
          </IconButton>
          <IconButton href="https://www.linkedin.com/in/sksagar497/" target="_blank" style={{ color: 'white' }}>
            <LinkedInIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" color="white">
          &copy; {new Date().getFullYear()} Sagar Kumar
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
