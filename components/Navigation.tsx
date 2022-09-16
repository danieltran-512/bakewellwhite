import { Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { useSpring, animated } from 'react-spring'
import Logo from '../public/logo.svg'

import styles from '../styles/Navigation.module.css'

//Navigation bar component
export const Navigation = () => {
    //Use react-spring to animate the nav bar
    const props = useSpring({
        to: { opacity: 1, marginTop: 0 },
        from: { opacity: 0, marginTop: -50 },
        config: { duration: 1000 },
        delay: 2000,
    })

    return (
        <nav className={styles.nav}>
            <animated.div style={props}>
                <ul className={styles.navItems}>
                    <li>
                        <Button variant='text'
                        sx = {{color: 'white', letterSpacing:'0.2em', textTransform: 'uppercase', textAlign:'center'}}
                        >
                            Expertise
                        </Button>
                    </li>
                    <li>
                        <Button variant='text'
                        sx = {{color: 'white', letterSpacing:'0.2em', textTransform: 'uppercase', textAlign:'center'}}
                        >
                            Portfolio
                        </Button>
                    </li>
                    <li>
                        <Button variant='text'
                        sx = {{color: 'white', letterSpacing:'0.2em', textTransform: 'uppercase', textAlign:'center'}}
                        >
                            <Image
                            src={Logo}
                            alt='Bakewell-White Logo'
                            />
                        </Button>
                    </li>
                    <li>
                        <Button variant='text'
                        sx = {{color: 'white', letterSpacing:'0.2em', textTransform: 'uppercase', textAlign:'center'}}
                        >
                            Awards
                        </Button>
                    </li>
                    <li>
                        <Button variant='text'
                        sx = {{color: 'white', letterSpacing:'0.2em', textTransform: 'uppercase', textAlign:'center'}}
                        >
                            Contact Us
                        </Button>
                    </li>
                </ul>
            </animated.div>
        </nav>
  )
}
