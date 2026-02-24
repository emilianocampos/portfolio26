import { useRef, useEffect } from 'react';
import { Box, Container, Typography, Stack, Paper } from '@mui/material';
import gsap from 'gsap';

const experiences = [
    {
        role: 'Desarrollador Front-End Freelance',
        company: 'Independiente',
        period: '2023 - Presente',
        description: 'Desarrollo de landing pages y aplicaciones web personalizadas para clientes locales. Enfoque en optimización de performance y diseño centrado en el usuario.',
    },
    {
        role: 'Formación Intensiva Front-End',
        company: 'Coderhouse',
        period: '2022 - 2023',
        description: 'Especialización en React, JavaScript y diseño de interfaces interactivas. Desarrollo de múltiples proyectos prácticos durante la cursada.',
    },
    {
        role: 'Proyectos de Diseño y Multimedia',
        company: 'Freelance',
        period: '2021 - Presente',
        description: 'Edición de video y fotografía aplicada a contenido digital. Integración de elementos multimedia en interfaces web para mejorar el engagement.',
    }
];

const Experience = () => {
    const containerRef = useRef(null);
    const headerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header animation
            gsap.fromTo(headerRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 85%',
                        toggleActions: 'restart reverse restart reverse'
                    }
                }
            );

            gsap.from('.exp-item', {
                opacity: 0,
                y: 50,
                stagger: 0.2,
                duration: 1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 75%',
                    toggleActions: 'restart reverse restart reverse'
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <Box id="experience" ref={containerRef} sx={{ position: 'relative', py: { xs: 10, md: 15 } }}>
            <Container maxWidth="md">
                <Box ref={headerRef} sx={{ mb: 8, textAlign: 'center' }}>
                    <Typography variant="overline" color="primary" sx={{ fontWeight: 700 }}>
                        TRAYECTORIA
                    </Typography>
                    <Typography variant="h2" sx={{ mt: 1 }}>
                        Experiencia Laboral
                    </Typography>
                </Box>

                <Stack spacing={4} sx={{ position: 'relative' }}>
                    {/* Vertical Line */}
                    <Box
                        sx={{
                            position: 'absolute',
                            left: { xs: 16, md: '50%' },
                            top: 0,
                            bottom: 0,
                            width: '2px',
                            bgcolor: 'rgba(255,255,255,0.1)',
                            transform: { md: 'translateX(-50%)' },
                        }}
                    />

                    {experiences.map((exp, index) => (
                        <Box
                            key={index}
                            className="exp-item"
                            sx={{
                                width: { xs: '100%', md: '45%' },
                                alignSelf: { xs: 'flex-start', md: index % 2 === 0 ? 'flex-start' : 'flex-end' },
                                textAlign: 'left',
                                pl: { xs: 5, md: 0 },
                                pr: { md: index % 2 === 0 ? 4 : 0 },
                                position: 'relative',
                            }}
                        >
                            <Paper
                                sx={{
                                    p: 3,
                                    bgcolor: 'background.paper',
                                    borderLeft: { xs: '4px solid', md: index % 2 !== 0 ? '4px solid' : 'none' },
                                    borderRight: { md: index % 2 === 0 ? '4px solid' : 'none', xs: 'none' },
                                    borderColor: 'primary.main',
                                }}
                            >
                                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                    {exp.role}
                                </Typography>
                                <Typography variant="subtitle2" color="primary" sx={{ mb: 1 }}>
                                    {exp.company} | {exp.period}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {exp.description}
                                </Typography>
                            </Paper>

                            {/* Dot on timeline */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 24,
                                    left: { xs: 8, md: index % 2 !== 0 ? '-13.5%' : 'auto' },
                                    right: { md: index % 2 === 0 ? '-13.5%' : 'auto' },
                                    width: 16,
                                    height: 16,
                                    borderRadius: '50%',
                                    bgcolor: 'primary.main',
                                    boxShadow: '0 0 10px rgba(99, 102, 241, 0.8)',
                                    zIndex: 1,
                                }}
                            />
                        </Box>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
};

export default Experience;
