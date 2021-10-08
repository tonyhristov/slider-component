import React from 'react'
import './App.css'
import SliderComponent from './components/slider'

function App() {
   return (
      // <RGB.Provider value={''}>
      //    <div className='App' style={{ backgroundColor: `${color.colorCode}` }}>
      //       <header className='App-header'>
      <SliderComponent />

      /* <Box sx={{ width: 500, color: 'white' }}>
               <Slider
                  aria-label='Temperature'
                  defaultValue={100}
                  valueLabelDisplay='auto'
                  step={1}
                  min={0}
                  max={255}
                  onChange={(e) => {
                     setRed(Math.round(e.target.value))
                  }}
                  marks={marks}
               />
               <input value={red} size='small' onChange={handleInputChange} />
            </Box>

            <Box sx={{ width: 500, color: 'white' }}>
               <Slider
                  aria-label='Temperature'
                  defaultValue={100}
                  valueLabelDisplay='auto'
                  step={1}
                  min={0}
                  max={255}
                  onChange={(e) => {
                     setGreen(Math.round(e.target.value))
                  }}
                  marks={marks}
               />
               <input value={green} size='small' onChange={handleInputChange} />
            </Box>

            <Box sx={{ width: 500, color: 'white' }}>
               <Slider
                  aria-label='Temperature'
                  defaultValue={100}
                  valueLabelDisplay='auto'
                  step={1}
                  min={0}
                  max={255}
                  onChange={(e) => {
                     setBlue(Math.round(e.target.value))
                  }}
                  marks={marks}
               />
               <input value={blue} size='small' onChange={handleInputChange} />
            </Box> */
      //       </header>
      //    </div>
      // </RGB.Provider>
   )
}

export default App
