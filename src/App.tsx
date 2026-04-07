import { useState } from 'react';
import { Box } from '@mui/material';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Layout/Navbar';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Experience from './components/Sections/Experience';
import Projects from './components/Sections/Projects';

import Contact from './components/Sections/Contact';
import Footer from './components/Layout/Footer';
import Loader from './components/Common/Loader';
import WebPages from './pages/WebPages';
import WebApps from './pages/WebApps';
import SEO from './components/Common/SEO';
import FAQ from './components/Sections/FAQ';

gsap.registerPlugin(ScrollTrigger);

const Home = () => (
  <>
    <SEO 
      title="Inicio" 
      description="Portfolio profesional de desarrollo web y aplicaciones. Especialista en React, TypeScript y experiencias interactivas."
      keywords="desarrollo web, react, typescript, portfolio, frontend, aplicaciones web"
    />
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Projects />
    <FAQ />

    <Contact />
  </>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      <Box sx={{
        bgcolor: 'background.default',
        color: 'text.primary',
        opacity: isLoading ? 0 : 1,
        visibility: isLoading ? 'hidden' : 'visible',
        transition: 'opacity 0.5s ease-in-out',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        {pathname === '/' && <Navbar />}
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/proyectos/paginas-webs" element={<WebPages />} />
            <Route path="/proyectos/aplicaciones-webs" element={<WebApps />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </>
  );
}

export default App;
