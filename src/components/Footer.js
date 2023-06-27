import React from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom'


import Logo from '../assets/images/Logo.png';

import insta from '../assets/icons/instagram.png';
import fb from '../assets/icons/facebook.png';
import link from '../assets/icons/linkedin-logo.png';
import mail from '../assets/icons/email.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#000" >
    <Stack 
      gap="40px" 
      sx={{
        flexDirection: { lg: 'row', md: 'row' },
        p: '20px',
        alignItems: 'center',
        justifyContent: 'space-evenly'
      }} 
      flexWrap="wrap" 
      px="40px" 
      pt="24px"
      style={{ boxShadow: '1px 1px 15px #ff4949' }}
    >
      <img src={Logo} alt="logo" style={{ width: '200px', height: '200px' }} />

      <Stack>
        <Typography variant='h5' fontWeight="500" textTransform="capitalize" color="#ff4949"
        borderBottom="1px solid #ff4949"  >
          Partners
        </Typography>
        <Button href="" variant="text" sx={{ color: '#fff', fontWeight: '200' }} >
          Praveen
        </Button>
        <Button href="" variant="text" sx={{ color: '#fff', fontWeight: '200' }} >
          Gowtham
        </Button>
        <Button href="" variant="text" sx={{ color: '#fff', fontWeight: '200' }} >
          Bhuvan
        </Button>
        <Button href="" variant="text" sx={{ color: '#fff', fontWeight: '200' }} >
          Madhu
        </Button>
        <Button href="" variant="text" sx={{ color: '#fff', fontWeight: '200' }} >
          Santosh
        </Button>        
      </Stack>
      <Stack sx={{ paddingBottom: '95px' }} >
      <Typography variant='h5' fontWeight="500" textTransform="capitalize" color="#ff4949"
        borderBottom="1px solid #ff4949"  >
          Thank You
        </Typography>
        <Button href="" variant="text" sx={{ color: '#fff', fontWeight: '200' }} >
          All This Works Was Done <br /> By Learning From 
          JS Mastery, <br /> Thankyou sir!
        </Button> 
      </Stack>
      <Stack>
        <Button
        sx={{
          background: '#000',
          borderRadius: '50%',
          width: '50px',
          height: '50px'
        }}
        >
          <img src={insta} alt={insta}  
          style={{ width: '30px', height: '30px'}} />
        </Button>
        <Button
        sx={{
          background: '#000',
          borderRadius: '50%',
          width: '50px',
          height: '50px'
        }}
        >
          <img src={fb} alt={fb}  
          style={{ width: '30px', height: '30px'}} />
        </Button>
        <Button
        sx={{
          background: '#000',
          borderRadius: '50%',
          width: '50px',
          height: '50px'
        }}
        >
          <img src={link} alt={link}  
          style={{ width: '30px', height: '30px'}} />
        </Button>
        <Button
        sx={{
          background: '#000',
          borderRadius: '50%',
          width: '50px',
          height: '50px'
        }}
        >
          <img src={mail} alt={mail}  
          style={{ width: '30px', height: '30px'}} />
        </Button>
        
      </Stack>

    </Stack>
    <Stack alignItems="center" 
      style={{ boxShadow: '1px 1px 1px #ff4949' }} color="#fff" 
      padding="40px"
      >
        All Rights Reserved @The_Rayudu
    </Stack>
  </Box>
);

export default Footer;