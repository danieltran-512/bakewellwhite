import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { ParallaxLayer } from '@react-spring/parallax'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Mesh from '../public/Mesh.svg'
import {useAnimation, motion} from 'framer-motion'
import styles from '../styles/AboutUS.module.css'

export const AboutUs = () => {
  //Keep track of whether the component is in view
  const {ref, inView} = useInView();

  //Animate components using framer-motion
  const animation2 = useAnimation();
  const buttonAnimation = useAnimation();

  useEffect(() => {
    console.log("In view?", inView);
    if(inView){

      animation2.start({
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring', duration: 2, bounce: 0.3,
          delay: 0.3

        }
      })

      buttonAnimation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: 'spring', duration: 0.5, bounce: 0.3,
          delay: 1
        }
      })
    } else {

      animation2.start({
        y: "-10vh",
        opacity: 0,
        transition: {
          type: 'spring', duration: 2, bounce: 0.3,
          delay: 0.3
        }
      })


      buttonAnimation.start({
        x: '10vw',
        opacity: 0,
        transition: {
          type: 'spring', duration: 0.5, bounce: 0.3, 
          delay: 1
        }
      })
    }

  }, [inView]);

  return (
    <>
    <ParallaxLayer offset={0.5} speed={0.44} style={{zIndex:"100"}}>
    <Typography variant='h1' color={"#FFF"}
    position='absolute'
    top={{xl: '105vh', lg: "98vh", md: "95vh", sm: "95vh", xs: "105vh"}}
    left="3.5rem"
    zIndex={6}
    >
      We are an <br></br> award-wining
    </Typography>
    </ParallaxLayer>
    
    <ParallaxLayer offset={0.5} speed={0.55} style={{zIndex:"100"}}>
    <Typography variant='h1' color={"#FFF"}
    position='absolute'
    bottom="-95vh"
    right="3.5rem"
    zIndex={6}
    textAlign='right'
    >
      Boutique Design <br></br> Studio
    </Typography>

    </ParallaxLayer>

    <Box
    sx={{
      position:'absolute',
      top: {md: '150vh', sm: '190vh', xs: '190vh', lg: '150vh', xl: '150vh'},
      right: {md:'3vw', sm:'50vw', xs:'50vw', lg:'9vw', xl:'9vw'},
      zIndex: 90,
    }}
    >
      <motion.button animate={buttonAnimation} className="main-btn"> 
        <Typography variant='button'>
          See expertise
        </Typography>
      </motion.button>
    </Box>

    {/* About Us Text */}
    <Box
    overflow='scroll'
    sx={{zIndex:5, position:'absolute', 
    top:'120vh', left:{xs:'5vw',sm:'20vw'},
    width:{xs:'90vw', sm: '60vw'}, height:'60vh',
    color:'white',
    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))'}}
    > 
      <Grid container spacing={2} height='100%'> 
        
        <Grid  item xs = {12} textAlign='center' mb="10px" 
        m = {{xs:'5vh 10vw 0 10vw',sm: '7vh 2vw 0 2vw',lg: '0 9vw', xl: '0 10vw'}}
        display={'flex'}
        alignItems={'flex-end'}
        justifyContent={'center'}
        >
            <Typography variant='subtitle2'>
            We can offer a complete design service to all vessels, power and sail. 
            Whether it is conceptual design work or full naval architecture and engineering, no job is too big or too small for our team.
            </Typography>
        </Grid>

        <Grid item xs = {6} pl="0">
          <motion.div
          animate={animation2}>
            <Typography variant='body1' textAlign='right' pl={{ xs: '5vw',lg: '9vw', xl:'10vw'}} >
            We believe that success is to a large part a matter of design process, 
            and a good designer will have a design process that will produce a successful outcome whether it be a yacht, 
            a powerboat, an aeroplane, or a ballpoint pen.
            </Typography>
        </motion.div>

        </Grid>
        <Grid item xs = {6} pr="0">
          <motion.div
          animate={animation2}>
            <Typography variant='body1' textAlign='left' pr={{ xs: '5vw ',lg: '9vw', xl:'10vw'}} >
            We undertake a wide variety of craft from radio yachts, to racing yachts, offshore powerboats, 
            to 90m motoryachts, pilotboats, kayaks, Arabian dhows, cargo barges and fishing boats. 
            As a result we are exposed to a wide variety of conditions, design problems and novel solutions, 
            and if we were restricted to designing only one type of craft then we would not see this rich variety of thinking.
            </Typography>
          </motion.div>
        </Grid>
      </Grid>
    </Box>

    {/* About background */}
    <Box
    sx={{zIndex:4, position:'absolute', top:'120vh', left:{xs:'5vw',sm:'20vw'},
    width:{xs:'90vw', sm: '60vw'}, height:'60vh', backgroundImage:'url("/2.png")',
    backgroundSize:'cover'
    }}
    > 
    </Box>
    {/* Mesh Background */}
    <div ref={ref} className={styles.meshContainer}>
      <Image
      src={Mesh}
      alt="mesh"
      />
    </div>

    {/* Background styling */}
    <div className={styles.rectangle}></div>

    <div className={styles.aboutContainer}></div>
    </>
  )
}
