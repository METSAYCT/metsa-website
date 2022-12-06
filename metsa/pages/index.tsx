import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image';
import Footer from '../components/footer/Footer';
import HeroSection from '../components/HeroSection';
import AboutUs from '../components/HomeComponents/AboutUs';
import Executives from '../components/HomeComponents/executives/Executives';
import Header from '../components/HomeComponents/Header'
import Lecturers from '../components/HomeComponents/lecturers/Lecturers';
import Projects from '../components/HomeComponents/Projects';



const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <HeroSection />
        <Box>
          <Lecturers />
          <Executives />
          <AboutUs />
          <Projects />

        </Box>
        <Footer />
      </main>
    </div>
  )
}

export default Home
