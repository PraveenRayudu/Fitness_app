import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const ExerciseVideos = ( { exerciseVideos, name }) => {

  if(!exerciseVideos.length) return 'Loading....';

  return (
    <Box
      sx={{
        marginTop: { lg: '200px', xs: '20px' }
      }}
      p="20px"
    >
      <Typography variant='h3' mb="33px" color="#fff" >
        Watch Videos related to 
        <span style={{ color: '#ff4949', textTransform: 'capitalize' }}  > {name} </span> Exercise
      </Typography>
      <Stack
        justifyContent={'flex-start'}
        flexWrap={'wrap'}
        alignItems={'center'}
        sx={{
          flexDirection: { lg: 'row' },
          gap: { lg: '110px', xs: '0'  }
        }}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Typography variant='h5' sx={{
            background: "linear-gradient(to right bottom, #ff8d29, 30%, #ffcd38 )",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            color: "transparent",
            }} >
              {item.video.title} <br />
              <span style={{ fontWeight: '700' }} > {item.video.channelName} </span>
            </Typography>
            
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos