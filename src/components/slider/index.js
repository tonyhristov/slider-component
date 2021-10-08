import React, { useState } from 'react'
import Slider from '@mui/material/Slider'
import Box from '@mui/material/Box'
import { styled } from '@mui/system'
import marks from '../../utils/marks'

const Wrapper = styled('div')`
   min-height: 100vh;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   font-size: calc(10px + 2vmin);
   color: white;
`

const Input = styled('input')`
   border: 0;
   background-color: greenyellow;
   font-size: 20px;
`
const SliderComponent = () => {
   const [red, setRed] = useState(100)
   const [green, setGreen] = useState(100)
   const [blue, setBlue] = useState(100)

   const colorCodes = `rgb(${red},${green},${blue})`

   return (
      <Wrapper style={{ backgroundColor: `${colorCodes}` }}>
         <Box sx={{ width: 500, color: 'white' }}>
            <Slider
               aria-label='Temperature'
               defaultValue={100}
               valueLabelDisplay='{auto}'
               step={1}
               min={0}
               max={255}
               value={red}
               onChange={(e) => {
                  setRed(Math.round(e.target.value))
               }}
               marks={marks}
            />
            <Input
               value={red}
               size='small'
               maxLength='3'
               onChange={(event) => {
                  setRed(Number(event.target.value))
               }}
            />
         </Box>

         <Box sx={{ width: 500, color: 'white' }}>
            <Slider
               aria-label='Temperature'
               defaultValue={100}
               valueLabelDisplay='auto'
               step={1}
               min={0}
               max={255}
               value={green}
               onChange={(e) => {
                  setGreen(Math.round(e.target.value))
               }}
               marks={marks}
            />
            <Input
               value={green}
               size='small'
               maxLength='3'
               onChange={(event) => {
                  console.log(event.target)
                  setGreen(Number(event.target.value))
               }}
            />
         </Box>

         <Box sx={{ width: 500, color: 'white' }}>
            <Slider
               aria-label='Temperature'
               defaultValue={100}
               valueLabelDisplay='auto'
               step={1}
               min={0}
               max={255}
               value={blue}
               onChange={(e) => {
                  setBlue(Math.round(e.target.value))
               }}
               marks={marks}
            />
            <Input
               value={blue}
               size='small'
               maxLength='3'
               onChange={(event) => {
                  console.log(event.target)
                  setBlue(Number(event.target.value))
               }}
            />
         </Box>
      </Wrapper>
   )
}

export default SliderComponent
