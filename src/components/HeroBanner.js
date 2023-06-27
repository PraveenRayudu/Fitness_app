import React from 'react';
import { Box, Stack, Typography, Button} from '@mui/material';

import HeroBannerImage from "../assets/images/HeroBannerImage.png"

const HeroBanner = () => {
  return (
    <Box sx={{
        mt: {lg: '212px',  xs: '70px'},
        ml: { sm: '50px' }
    }} position="relative" p="20px"
    
    >
        <Typography  
        fontWeight="900" 
        sx={{
          background: "linear-gradient(to right, #ff4949, 15%, #541690 )",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          fontSize: { lg: '64px', xs: '32px'}
          }}
        >
            Furious Fitness
        </Typography>
        <Typography color="#541690"
        fontWeight={700}          
          sx={{
            background: "linear-gradient(to right bottom, #541690, 15%, #ff4949)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            fontSize: { lg: '80px', xs: '40px'}
            }}
          mb="23px" mt="30px"
        >
            Why Normal, <br /> Be A BEAST
        </Typography>
        <Typography 
          color="#a020f0"
          fontSize="22px"
          lineHeight="35px" mb={4}
          
        >
            Explore This Fitness World
        </Typography>
        <Button variant="contained"  href="#exercises"
          sx={{ backgroundColor: '#ff4949', padding: '10px', color: '#fff',
          fontWeight: '700' }}
        
        >
            Explore
        </Button>
        <Typography 
          fontWeight={600}
          color="#ffcd38"
          sx={{ 
            opacity: 0.2,
            display: { lg: 'block', xs: 'none'}
          }}
          fontSize="200px"
        >
            Exercises
        </Typography>
        <img src={HeroBannerImage} alt="banner" 
        className="hero-banner-img" />
    </Box>
  )
}

export default HeroBanner