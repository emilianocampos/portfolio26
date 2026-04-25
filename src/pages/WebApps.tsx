import { useEffect, useRef, useState } from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button, Link, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SEO from '../components/Common/SEO';
import gsap from 'gsap';
import imcImg from '../assets/Calculadora IMC en laptop moderna.png';
import appImg from '../assets/app.png';
import app2Img from '../assets/app2.png';

const projects = [
  {
    title: 'Gestor de Tareas',
    url: '#',
    image: appImg,
    description: 'Aplicación web con autenticación y CRUD completo (agregar, editar, actualizar y eliminar tareas) utilizando Supabase.',
    underConstruction: true,
  },
  {
    title: 'Calculadora de Regla de Tres Simples',
    url: 'https://regladetressimples.netlify.app/',
    image: app2Img,
    description: 'Aplicación para calcular regla de tres simples de forma rápida y sencilla.',
  },
  {
    title: 'Calculadora IMC',
    url: 'https://imccalculater.netlify.app/',
    image: imcImg,
    description: 'Aplicación web interactiva para calcular el Índice de Masa Corporal con retroalimentación inmediata y diseño moderno.',
  }
];

const WebApps = () => {
  const containerRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);

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
                  {(project as any).underConstruction ? (
                    <Button
                      variant="outlined"
                      fullWidth
                      sx={{ borderRadius: 2, py: 1 }}
                      onClick={() => setOpenModal(true)}
                    >
                      Ver Aplicación
                    </Button>
                  ) : (
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
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 10, p: { xs: 4, md: 6 }, bgcolor: 'background.paper', borderRadius: 4, textAlign: 'center', border: '1px solid rgba(255,255,255,0.05)' }}>
          <Typography variant="h5" sx={{ mb: 4, fontWeight: 600, color: 'text.primary' }}>
            Para ver mis proyectos realizados con la empresa ir a mi GitHub o solicitar referencia a través de Federico Penin.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              component={Link}
              href="https://github.com/emilianocampos"
              target="_blank"
              variant="contained"
              size="large"
              sx={{ px: 4, py: 1.5 }}
            >
              Ir a mi GitHub
            </Button>
            <Button
              component={Link}
              href="https://wa.me/542235606801?text=Hola%20Federico,%20quisiera%20pedir%20referencias%20sobre%20el%20trabajo%20de%20Emiliano%20Campos."
              target="_blank"
              variant="outlined"
              size="large"
              sx={{ px: 4, py: 1.5 }}
            >
              Contactar a Federico Penin
            </Button>
          </Box>
        </Box>
      </Container>

      {/* Modal En Construcción */}
      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        PaperProps={{ sx: { bgcolor: 'background.paper', backgroundImage: 'none', borderRadius: 3 } }}
      >
        <DialogTitle sx={{ fontWeight: 700 }}>En Construcción 🚧</DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ color: 'text.secondary' }}>
            Esta aplicación (Gestor de Tareas) se encuentra actualmente en desarrollo y pronto estará disponible para su uso público. ¡Gracias por tu paciencia!
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ p: 2, pt: 0 }}>
          <Button variant="contained" onClick={() => setOpenModal(false)} sx={{ borderRadius: 2 }}>
            Entendido
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default WebApps;
