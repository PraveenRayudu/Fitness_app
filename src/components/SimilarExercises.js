import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
    <Typography variant='h3' color="#fff" mb={5} >
      Similar <span style={{ color: '#ff4949' }} > Target Muscle </span> Exercises
    </Typography>
    <Stack direction="row" sx={{ p: '2', position: 'relative' }} >
      {targetMuscleExercises.length ? 
       <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader /> }
      
    </Stack>
    <Typography variant='h3' color="#fff" mb={5} >
      Exercises With Similar <span style={{ color: '#ff4949' }} > Equipment </span> 
    </Typography>
    <Stack direction="row" sx={{ p: '2', position: 'relative' }} >
      {equipmentExercises.length ? 
       <HorizontalScrollbar data={equipmentExercises} /> : <Loader /> }
      
    </Stack>
    
  </Box>
);

export default SimilarExercises;