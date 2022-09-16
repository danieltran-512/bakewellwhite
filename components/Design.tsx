import { Button, Grid, Typography } from '@mui/material'
import { ParallaxLayer } from '@react-spring/parallax'
import React from 'react'
import Mesh2 from '../public/Mesh2.svg'
import { Box } from '@mui/system'
import Image from 'next/image'
import { designs, DesignContent } from '../data/mockDesignData'

import styles from '../styles/Design.module.css'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'

export const Design = () => {
  //Keep track of the current viewport
  const [ref, inView] = useInView();

  //Render the design contents
  const renderDesignContents = (design: DesignContent, index:number) => (
    <motion.div
    initial={{opacity:0, x: -100}}
    animate={inView ? {opacity:1, x: 0}: {opacity:0, x: -100}}
    transition={{type:'spring', delay: 0.05*index}}
    >

    <Box ref={ref}
    display='flex'
    alignItems='flex-start'
    justifyContent='space-between'
    p="0.5em"
    sx={{
      borderTop:'2px solid #0E1219'
    }}
    >
        <Box display='flex' alignItems='flex-start' gap='10px'>
        <Typography variant='subtitle1' display='inline'>
          {design.id < 10 ? `[0${design.id}]` : `[${design.id}]`}
        </Typography>
        <Link href={`/design/${design.id}`}>
          <Typography  className={styles.designLink} variant='h3' display='inline'>
            {design.name}
          </Typography>
        </Link>
        </Box>

        <Typography variant='body1' textAlign='right'>
          {design.description}
        </Typography>
    </Box>

    </motion.div>

  )

  return (
    <div className={styles.container}>
      <Grid container p='4em 3em 4em 3em' mb='4em' height='fit-content'>
        <Grid item md={7}>
            <Typography variant='h1'>
            Award-Winning <br></br> Designs  
            </Typography>
            <ParallaxLayer offset={1.5} speed={0.5}>
            <Box
            display={{xs:'none', md:'block'}}
            sx = {{
              position: 'relative',
              left: '-5%',
              bottom: '0',
              zIndex: '20'
            }}
            >
              <Image
              src={Mesh2}
              alt='Mesh2'
              width={600}
              height={600}
              />
            </Box>
            </ParallaxLayer>
        </Grid>
        <Grid item md={5}
        zIndex={200}
        style={{
          overflowY: "scroll",
          maxHeight: "90vh"
        }}>
          {designs.map((design, index) => (
            renderDesignContents(design, index)
          ))}
          <motion.div
          initial={{opacity:0, x: -100}}
          animate={inView ? {opacity:1, x: 0}: {opacity:0, x: -100}}
          transition={{delay: 0.05*10}}
          >
            <Box
            p='1em 0em 1em 1em'
            textAlign='right'
            sx={{
              borderTop:'2px solid #0E1219',
              borderBottom:'2px solid #0E1219'
            }}>
            <Button sx={{color:'#0E1219'}} variant='text'>
              <Link href={'/design'}>
              View More
              </Link>
            </Button>
            </Box>
          </motion.div>
        </Grid>
      </Grid>

      <ParallaxLayer offset={5} speed={1} style={{backgroundColor:'red'}}>
      </ParallaxLayer>
    </div>
  )
}
