import React from 'react';
import { Typography, Stack, Button } from '@mui/material';
import { Height } from '@mui/icons-material';

import BodyPartImage from '../assets/icons/bodypart.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'


const Detail = ( { exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail; 

  const extraDetail = [
    {
        icon: BodyPartImage,
        name: bodyPart,
    },
    {
        icon: TargetImage,
        name: target,
    },
    {
        icon: EquipmentImage,
        name: equipment,
    }
  ]

  return (
    <Stack 
        gap="60px"
        sx={{
            flexDirection: { lg: 'row'},
            p: '20px',
            alignItems: 'center',
            justifyContent: 'center'
        }}
    >
        <img src={gifUrl} 
        alt={name} 
        loading="lazy" 
        className="detail-image"  
        style={{ 
            borderRadius: '40px',
            
        }} 
        />
        <Stack sx={{ gap: { lg: '35px', xs: '20px' } }} >
            <Typography variant='h3' fontWeight="700" textTransform="capitalize" sx={{
            background: "linear-gradient(to right, #ff4949, 30%, #541690 )",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            }} >
                {name}
            </Typography>
            <Typography variant='h6' textTransform="capitalize" color="#a020f0" >
                Exercises Keep You Strong. {name} is one of the Best 
                exercise <br /> to target your {target}. it will improve your mood 
                and gain energy
            </Typography>
            {extraDetail.map((item) =>(
                <Stack key={item.name} direction="row" gap="24px" alignItems="center" >
                    <Button
                        sx={{
                            background: '#000',
                            borderRadius: '50%',
                            width: '100px',
                            height: '100px'
                        }}
                    >
                        <img src={item.icon} alt={bodyPart}  
                        style={{ width: '80px', height: '80px'}} />
                    </Button>
                    <Typography variant='h5' textTransform="capitalize" color="#a020f0" >
                        {item.name}
                    </Typography>
                </Stack>
            ))}
        </Stack>
    </Stack>
  )
}

export default Detail