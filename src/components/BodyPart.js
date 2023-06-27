import React from 'react';
import { Stack, Typography } from '@mui/material';

import Icon from "../assets/icons/gym.png";


const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={{
          borderTop:   bodyPart === item ? '' : '8px solid #ff2625',
          backgroundColor: '#fff',
          borderBottomLeftRadius: '15px',
          borderBottomRightRadius: '15px',
          width: '200px',
          height: '200px',
          cursor: 'pointer',
          gap: '20px'      
        }}
        onClick={() => {
            setBodyPart(item);
            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth'})
        }}
    >
        <img src={Icon} alt="dumbbell" style={{ width: '50px', 
        height: '50px'}}/>  
        <Typography
            fontSize="24px"
            fontWeight="bold"
            color="#541690"
            textTransform="capitalize"
        >
            {item}
        </Typography>
    </Stack>
  )
}

export default BodyPart
