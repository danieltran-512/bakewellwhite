import { Button, IconButton } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import { useSpring, animated } from 'react-spring'
import Logo from '../public/Logo.svg'
import { MobileDrawer } from './MobileDrawer'
import MenuIcon from '@mui/icons-material/Menu';
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

    const [open, setOpen] = React.useState(false);
    const toggleMobileMenu = () => setOpen(!open);

    return (
        <nav className={styles.nav}>
            <animated.div style={props}>
            <Box display={{xs:'none', sm:'block'}}>
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
            </Box>

            <Box display={{xs:'flex', sm:'none'}}
            justifyContent='space-between'
            >
            <Button variant='text'
            sx = {{color: 'white', letterSpacing:'0.2em', textTransform: 'uppercase', textAlign:'center'}}
            >
                <Image
                src={Logo}
                alt='Bakewell-White Logo'
                />
            </Button>
            <IconButton onClick={toggleMobileMenu}>
                <MenuIcon sx={{color: 'white'}}/>
            </IconButton>

            <MobileDrawer
            open = {open}
            onClose = {toggleMobileMenu}
            />
            </Box>
            </animated.div>

        </nav>
  )
}
