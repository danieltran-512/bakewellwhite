import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { ParallaxLayer } from '@react-spring/parallax'
import { caseStudies, CaseStudy } from '../data/mockCaseStudyData'
import React, { useState } from 'react'
import { PopIn } from './transitions/PopIn'
import {motion} from 'framer-motion'
import styles from '../styles/SelectedWork.module.css'

export const SelectedWork = () => {
  //Current case study being selected
  const [selectedCase, setSelectedCase] = useState(3);

  //Set the displayed case study to the one selected by the user
  const setPhoto = (index: number) => {
    setSelectedCase(index);
  }

  //Render case studies elements from mock data
  const renderCaseStudies = () => {
    return <>
    {caseStudies.map((caseStudy: CaseStudy) => (
      <Box key={caseStudy.id} m='2em 0'>
        <Box display={'flex'} alignItems='flex-start' gap='4px' 
        onClick={() => {
          setSelectedCase(caseStudy.id)
        }}
        sx={{cursor: 'pointer'}}
        >
          <Typography variant='subtitle1' display={'inline'}
          color={selectedCase === caseStudy.id ? '#FFF' : '#F7F7F7'}
          > 
            {caseStudy.id < 10 ? `[0${caseStudy.id}]` : `[${caseStudy.id}]`}
          </Typography>
          <motion.div
              whileHover={{
                scale: selectedCase === caseStudy.id ? 1 : 2,
                //Transform the effect to the right
                x: selectedCase === caseStudy.id ? 0 : "10vw",
                transition: { duration: 0.5 }
              }}
          >
          <Typography variant={selectedCase === caseStudy.id ? 'h2' : 'h3'} 
          display={'inline'}
          color={selectedCase === caseStudy.id ? '#FFF' : '#F7F7F7'}
          >
            {caseStudy.title}
          </Typography>
          </motion.div>
        </Box>
        
        {selectedCase === caseStudy.id &&
        <PopIn>
        <Typography variant='body1'  
        width='34vw'         
        pl='2.5em'>
          {caseStudies[selectedCase-1].description}
        </Typography>
        </PopIn>
        }

      </Box>
    ))}
    </>
  }

  return (
    <>
        <div className={styles.background}>
        </div>
        <div className={styles.container}>
          <Box display='flex'
            flexDirection={'column'}
            justifyContent='sppace-between'
            height={'100vh'}
            >
            <Typography variant='h1' pt={{lg:'0', xl:'4rem'}}>
            Selected <br></br>Works
            </Typography>
            <Box zIndex={'200'} m={{xl: '15vh 0', lg:'5vh 0'}}>
              {renderCaseStudies()}
            </Box>

            <button className='main-btn' style={{zIndex:'200'}}>
              <Typography variant='button'>
                  See all designs
              </Typography>
            </button>
          </Box>

        
          <ParallaxLayer offset={0.9} speed={0.45} style={{zIndex:"100"}}>
          <div id={styles.slider}>
              <input
                type="radio"
                name="slider"
                id={styles.s1}
                checked={selectedCase === 1}
                onClick={() => setPhoto(1)}
              />
              <input 
                type="radio" 
                name="slider" 
                id={styles.s2}
                checked={selectedCase === 2}
                onClick={() => setPhoto(2)}
              />
              <input
                type="radio"
                name="slider"
                id={styles.s3}
                checked={selectedCase === 3}
                onClick={() => setPhoto(3)}
              />
              <label htmlFor="s1" id={styles.slide1}>
                {
                  selectedCase === 1 &&
                  <Box m='30px'>
                  <Typography variant='button'>
                    View Project
                  </Typography>
                  </Box>
                }
              </label>
              <label htmlFor="s2" id={styles.slide2}>
                {
                  selectedCase === 2 &&
                  <Box m='30px'>
                  <Typography variant='button' color={'black'}>
                    View Project
                  </Typography>
                  </Box>
                }
              </label>
              <label htmlFor="s3" id={styles.slide3}>
                {
                  selectedCase === 3 &&
                  <Box m='30px'>
                  <Typography variant='button'>
                    View Project
                  </Typography>
                  </Box>
                }
              </label>
          </div>
          </ParallaxLayer>
        </div>

    </>
  )
}
