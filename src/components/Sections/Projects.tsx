import { useRef, useEffect } from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import gsap from 'gsap';

const categories = [
    {
        title: 'Páginas Webs',
        description: 'Sitios web institucionales, landing pages y portfolios optimizados para SEO y conversión.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
        path: '/proyectos/paginas-webs',
    },
    {
        title: 'Aplicaciones Webs',
        description: 'Sistemas complejos, dashboards y plataformas interactivas con lógica de negocio avanzada.',
        image: 'https://images.unsplash.com/photo-1551288049-041440ef415b?auto=format&fit=crop&q=80&w=800',
        path: '/proyectos/aplicaciones-webs',
    }
];

const Projects = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const gridRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(headerRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );

            gsap.from('.category-card', {
                opacity: 0,
                y: 50,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: 'top 75%',
                    toggleActions: 'play none none reverse'
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <Box id="projects" ref={sectionRef} sx={{ py: { xs: 10, md: 15 }, bgcolor: 'background.default' }}>
            <Container maxWidth="lg">
                <Box ref={headerRef} sx={{ mb: 8, textAlign: 'center' }}>
                    <Typography variant="overline" color="primary" sx={{ fontWeight: 700 }}>
                        PORTFOLIO
                    </Typography>
                    <Typography variant="h2" sx={{ mt: 1 }}>
                        Mis Proyectos
                    </Typography>
                </Box>

                <Grid container spacing={6} ref={gridRef} justifyContent="center">
                    {categories.map((category, index) => (
                        <Grid size={{ xs: 12, md: 6 }} key={index} className="category-card">
                            <Card
                                component={RouterLink}
                                to={category.path}
                                sx={{
                                    textDecoration: 'none',
                                    bgcolor: 'background.paper',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'all 0.3s ease-in-out',
                                    willChange: 'transform, box-shadow',
                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                        boxShadow: (theme) => `0 20px 40px ${theme.palette.primary.main}20`,
                                        '& .category-image': {
                                            transform: 'scale(1.05)',
                                        }
                                    }
                                }}
                            >
                                <Box sx={{ overflow: 'hidden', height: 300 }}>
                                    <CardMedia
                                        component="img"
                                        image={category.image}
                                        alt={category.title}
                                        className="category-image"
                                        sx={{ 
                                            height: '100%',
                                            transition: 'transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)'
                                        }}
                                    />
                                </Box>
                                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                                    <Typography variant="h4" gutterBottom sx={{ fontWeight: 800 }}>
                                        {category.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                                        {category.description}
                                    </Typography>
                                    <Button variant="outlined" color="primary" size="large" fullWidth sx={{ mt: 'auto' }}>
                                        Explorar
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

export default Projects;
