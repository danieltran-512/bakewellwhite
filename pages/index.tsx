import type { NextPage } from 'next'
import Head from 'next/head'
import { Design } from '../components/Design'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { Info } from '../components/Info'
import { Navigation } from '../components/Navigation'
import theme from '../components/MUITheme/theme'
import { ThemeProvider } from '@emotion/react'
import { useSpring, animated } from 'react-spring'
import { Parallax } from '@react-spring/parallax'

const Home: NextPage = () => {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { duration: 1500 },
  })

  return (
    <animated.div style={props}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Bakewell White</title>
          <meta name="description" content="Bakewell-White Award Wining Boutique Design Studio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navigation />
        <Parallax pages={4.35}>
        <Hero />
        <Info />
        <Design />
        <Footer />
        </Parallax>
      </ThemeProvider>
    </animated.div>
  )
}

export default Home
