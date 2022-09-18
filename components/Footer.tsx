import { Box, Grid, Typography } from '@mui/material'
import { ParallaxLayer } from '@react-spring/parallax'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <ParallaxLayer offset={4}>
    <footer>
      <Grid container>
        <Grid item xs={3.5}>
          <Typography variant='subtitle1' pb='14px'>
          info@bakewell-white.com
          </Typography>
          
          <Typography variant='subtitle1' pb='14px'>
          +64 9 480 6800
          </Typography>

          <Typography variant='subtitle1'>
          EST. 1994
          </Typography>
        </Grid>

        <Grid item xs={4.5} textAlign='center'>
          <Typography variant='h1' whiteSpace='nowrap' pb='14px'>
          Get in touch
          </Typography>
          
          <button className='main-btn' style={{marginLeft:'50px'}}>
            <Typography variant='button'>
            Contact Us
            </Typography>
          </button>

        </Grid>

        <Grid item xs={4} textAlign='right' >
          <Typography variant='subtitle1' pb='14px'>
            <Link href={'#'}>
            Privacy Policy
            </Link>
          </Typography>

          <Typography variant='subtitle1' pb='14px'>
            <Link href={'#'}>
            Facebook
            </Link>
          </Typography>

          <Typography variant='subtitle1'>
            <Link href={'#'}>
            Linkedin
            </Link>
          </Typography>
        </Grid>
      </Grid>


    </footer>

    </ParallaxLayer>
  )
}
