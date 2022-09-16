import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { ParallaxLayer } from '@react-spring/parallax'
import { caseStudies, CaseStudy } from '../data/mockCaseStudyData'
import React, { useEffect, useState } from 'react'
import styles from '../styles/SelectedWork.module.css'
import Image from 'next/image'

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
        onClick={() => setSelectedCase(caseStudy.id)}
        sx={{cursor: 'pointer'}}
        >
          <Typography variant='subtitle1' display={'inline'}
          color={selectedCase === caseStudy.id ? '#FFF' : '#F7F7F7'}

          > 
            {caseStudy.id < 10 ? `[0${caseStudy.id}]` : `[${caseStudy.id}]`}
          </Typography>
          <Typography variant={selectedCase === caseStudy.id ? 'h2' : 'h3'} 
          display={'inline'}
          color={selectedCase === caseStudy.id ? '#FFF' : '#F7F7F7'}
          >
            {caseStudy.title}
          </Typography>
        </Box>
        {selectedCase === caseStudy.id &&
        <Typography variant='body1'  
        width='34vw'         
        pl='2.5em'>
          {caseStudy.description}
        </Typography>
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
            flexDirection={'column'}>
            <Typography variant='h1'>
            Selected <br></br>Works
            </Typography>
            <Box zIndex={'200'} mb='3em'>
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