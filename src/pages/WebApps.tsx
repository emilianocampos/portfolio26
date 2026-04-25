import { useEffect, useRef } from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SEO from '../components/Common/SEO';
import gsap from 'gsap';
import imcImg from '../assets/Calculadora IMC en laptop moderna.png';

const projects = [
  {
    title: 'Calculadora IMC',
    url: '#',
    image: imcImg,
    description: 'Aplicación web interactiva para calcular el Índice de Masa Corporal con retroalimentación inmediata y diseño moderno.',
  }
];

const WebApps = () => {
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
        title="Aplicaciones Webs"
        description="Explora mis aplicaciones web interactivas y herramientas digitales."
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
          Aplicaciones Webs
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
                    Ver Aplicación
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

export default WebApps;
