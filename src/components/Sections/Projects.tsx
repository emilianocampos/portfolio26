import { useRef, useEffect } from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button, Stack } from '@mui/material';
import gsap from 'gsap';

const projects = [
    {
        title: 'Landing Page Corporativa',
        category: 'Desarrollo Web / UI / UX',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        description: 'Optimización de conversión y diseño responsive para startup financiera.',
        tech: ['React', 'MUI', 'GSAP'],
    },
    {
        title: 'E-commerce Dashboard',
        category: 'Web App / Dashboard',
        image: 'https://images.unsplash.com/photo-1551288049-041440ef415b?auto=format&fit=crop&q=80&w=800',
        description: 'Interface administrativa con visualización de datos en tiempo real.',
        tech: ['React', 'Redux', 'Chart.js'],
    },
    {
        title: 'Portfolio Creativo',
        category: 'Interactive Web',
        image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800',
        description: 'Sitio personal con animaciones avanzadas y ScrollTrigger.',
        tech: ['JavaScript', 'GSAP', 'CSS Grid'],
    }
];

const Projects = () => {
    const gridRef = useRef(null);

    useEffect(() => {
        gsap.from('.project-card', {
            opacity: 0,
            scale: 0.9,
            stagger: 0.2,
            duration: 0.8,
            scrollTrigger: {
                trigger: gridRef.current,
                start: 'top 80%',
            }
        });
    }, []);

    return (
        <Box id="projects" sx={{ py: 10 }}>
            <Container maxWidth="lg">
                <Box sx={{ mb: 8, textAlign: 'center' }}>
                    <Typography variant="overline" color="primary" sx={{ fontWeight: 700 }}>
                        PORTFOLIO
                    </Typography>
                    <Typography variant="h2" sx={{ mt: 1 }}>
                        Proyectos Destacados
                    </Typography>
                </Box>

                <Grid container spacing={4} ref={gridRef}>
                    {projects.map((project, index) => (
                        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index} className="project-card">
                            <Card
                                sx={{
                                    bgcolor: 'background.paper',
                                    overflow: 'hidden',
                                    '&:hover .card-media': {
                                        transform: 'scale(1.1)',
                                    },
                                    '&:hover .card-overlay': {
                                        opacity: 1,
                                    }
                                }}
                            >
                                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                                    <CardMedia
                                        component="img"
                                        height="240"
                                        image={project.image}
                                        alt={project.title}
                                        className="card-media"
                                        sx={{ transition: 'transform 0.5s ease' }}
                                    />
                                    <Box
                                        className="card-overlay"
                                        sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            bgcolor: 'rgba(15, 23, 42, 0.8)',
                                            opacity: 0,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            transition: 'opacity 0.3s ease',
                                        }}
                                    >
                                        <Stack direction="row" spacing={2}>
                                            <Button variant="contained" size="small">Demo</Button>
                                            <Button variant="outlined" size="small" sx={{ color: 'white', borderColor: 'white' }}>Repo</Button>
                                        </Stack>
                                    </Box>
                                </Box>
                                <CardContent>
                                    <Typography variant="caption" color="primary" sx={{ fontWeight: 700 }}>
                                        {project.category}
                                    </Typography>
                                    <Typography variant="h6" sx={{ fontWeight: 700, my: 1 }}>
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                        {project.description}
                                    </Typography>
                                    <Box sx={{ display: 'flex', gap: 1 }}>
                                        {project.tech.map(t => (
                                            <Typography key={t} variant="caption" sx={{ bgcolor: 'rgba(255,255,255,0.05)', px: 1, py: 0.2, borderRadius: 1 }}>
                                                {t}
                                            </Typography>
                                        ))}
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Projects;
