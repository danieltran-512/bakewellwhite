import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import { ParallaxLayer } from '@react-spring/parallax'
import Image from 'next/image'
import React from 'react'
import { useSpring, animated } from 'react-spring'
import LogoLarge from '../public/LogoLarge.svg'

import styles from '../styles/Hero.module.css'

//Hero section for the home page
export const Hero = () => {
    const props = useSpring({
        to: { opacity: 1, marginTop: 0 },
        from: { opacity: 0 , marginTop: -50},
        config: { duration: 1000 },
        delay: 1000,
    })

    return (
        <div className={styles.container}>
            <ParallaxLayer>
            <div className={styles.bottomText}>
                <animated.div style={props}>
                <Box>
                    <Image src={LogoLarge} alt='Bakewell-White Logo Large' />
                </Box>

                {/* Display the bottom info */}
                <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    p: 0,
                    m: 0,
                    mt: 4,
                    bgcolor: 'background.paper',
                    borderRadius: 1,
                }}>              
                    <Typography variant='subtitle1'>
                        +64 9 480 6800 <br />info@bakewell-white.com
                    </ Typography>
                    
                    <Typography variant='subtitle1' textAlign='center'>
                        Bakewell-white Yacht Design LTD <br />Pace with grace / © 2022
                    </ Typography>

                    <Typography variant='subtitle1' textAlign='right'>
                        Est. 1994 <br/>auckland / new zealand
                    </ Typography>
                </Box>
                </animated.div>
            </div>
            </ParallaxLayer>
        </div>
    )
}
