import { useEffect, useRef } from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SEO from '../components/Common/SEO';
import geearthlogicImg from '../assets/Laptop mostrando Gearthlogic en oficina moderna.png';
import cukinailsImg from '../assets/Laptop con sitio web de Cuki Nails.png';
import estudioJuridicoImg from '../assets/Portátil de la firma con Lady Justicia.png';
import arquitecturaImg from '../assets/Tecnología y diseño arquitectónico en armonía.png';
import galenoImg from '../assets/Portátil mostrando el sitio de Galenos.png';
import psicologaImg from '../assets/Sitio web de terapia online de Dr. Alvarez.png';
import sermariImg from '../assets/Herramientas y tecnología en construcción.png';
import tattooImg from '../assets/Mockup de laptop en estudio de tatuajes (1).png';
import gsap from 'gsap';

const projects = [
  {
    title: 'Gearthlogic',
    url: 'https://www.gearthlogic.com',
    image: geearthlogicImg,
    description: 'Página web corporativa y tecnológica de la empresa donde trabajé desarrollando soluciones.',
  },
  {
    title: 'Galenos Consultorio',
    url: 'https://galenosconsultorio.vercel.app/',
    image: galenoImg,
    description: 'Sitio web moderno y profesional para consultorio de kinesiología y fisioterapia.',
  },
  {
    title: 'Cukinails',
    url: 'https://cukynails.vercel.app',
    image: cukinailsImg,
    description: 'Sitio web elegante para estudio de manicuría, enfocado en la estética y la reserva de turnos.',
  },
  {
    title: 'Estudio Jurídico',
    url: 'https://abogado-gamma.vercel.app/',
    image: estudioJuridicoImg,
    description: 'Plataforma profesional para servicios legales con un diseño sobrio y confiable.',
  },
  {
    title: 'Psicóloga Online',
    url: 'https://psicologa-one.vercel.app/',
    image: psicologaImg,
    description: 'Espacio digital dedicado a la salud mental, transmitiendo calma y profesionalismo.',
  },
  {
    title: 'Anibal Tattoo Art',
    url: 'https://anibaltattooart.netlify.app/',
    image: tattooImg,
    description: 'Portfolio artístico para estudio de tatuajes, resaltando trabajos detallados y galerías.',
  },
  {
    title: 'Vanguardia Arquitectura',
    url: 'https://vanguardia-five.vercel.app/',
    image: arquitecturaImg,
    description: 'Sitio corporativo para estudio de arquitectura con enfoque en diseño moderno y funcional.',
  },
  {
    title: 'SERMARI constructora',
    url: 'https://sermari.netlify.app/',
    image: sermariImg,
    description: 'Sitio web profesional y moderno para empresa constructora, mostrando servicios y proyectos.',
  }
];

const WebPages = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out'
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, minHeight: '100vh', bgcolor: 'background.default' }}>
      <SEO 
        title="Páginas Webs" 
        description="Explora mis proyectos de diseño y desarrollo de páginas web personalizadas."
      />
      <Container maxWidth="lg" ref={containerRef}>
        <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button 
            component={RouterLink} 
            to="/" 
            startIcon={<ArrowBackIcon />}
            sx={{ 
              color: 'text.primary',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' }
            }}
          >
            Volver al Inicio
          </Button>
        </Box>

        <Typography variant="h2" align="center" gutterBottom sx={{ mb: 8, fontWeight: 800 }}>
          Páginas Webs
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} className="project-card">
              <Card sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                bgcolor: 'background.paper',
                borderRadius: 4,
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  boxShadow: (theme) => `0 20px 40px ${theme.palette.primary.main}15`,
                  '& .card-media-overlay': { opacity: 1 }
                }
              }}>
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="240"
                    image={project.image}
                    alt={project.title}
                    sx={{ transition: 'transform 0.6s ease' }}
                  />
                  <Box className="card-media-overlay" sx={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    bgcolor: 'rgba(0,0,0,0.3)', opacity: 0, transition: '0.3s'
                  }} />
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography gutterBottom variant="h5" component="h2" sx={{ fontWeight: 700 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineBreak: 'anywhere' }}>
                    {project.description}
                  </Typography>
                  <Button 
                    component={Link} 
                    href={project.url} 
                    target="_blank" 
                    variant="outlined" 
                    fullWidth
                    sx={{ borderRadius: 2, py: 1 }}
                  >
                    Ver Proyecto
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WebPages;
