import React, { useContext} from 'react';
import { Box, Typography } from '@mui/material';
import {ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

import BodyPart from './BodyPart';
import ExerciseCard from './ExerciseCard';


import RightArrowIcon from '../assets/icons/right_arrow.png';
import LeftArrowIcon from '../assets/icons/left_arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="left-arrow">
      <img src={RightArrowIcon} alt="left-arrow" style={{ width: '40px', 
        height: '40px'}}  />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" style={{ width: '40px', 
        height: '40px'}}/>
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
            <Box
              key = {item.id || item}    
              itemID={item.id || item}
              title={item.id || item}
              m="0 40px"
            >
              { isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} 
              setBodyPart={setBodyPart} /> : <ExerciseCard exercise={item} />  }                                                    
            </Box>
          )
        )}
    </ScrollMenu>    
  )
}

export default HorizontalScrollbar