import { useEffect, useRef } from 'react';
import { Box, Container, Typography, Grid, Paper, Stack } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(textRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        end: 'top 50%',
                        scrub: false,
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <Box id="about" ref={sectionRef} sx={{ position: 'relative' }}>
            <Container maxWidth="lg">
                <Grid container spacing={8} alignItems="center">
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box ref={textRef} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                            <Typography variant="overline" color="primary" sx={{ fontWeight: 700 }}>
                                SOBRE MÍ
                            </Typography>
                            <Typography variant="h2" sx={{ mb: 3, mt: 1 }}>
                                Diseño con propósito,<br /> desarrollo con pasión.
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, fontSize: '1.1rem' }}>
                                Con una sólida formación en <strong>Coderhouse</strong>, me especializo en crear interfaces web que no solo son estéticamente atractivas, sino también altamente funcionales y accesibles.
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, fontSize: '1.1rem' }}>
                                Mi enfoque como freelancer es transformar ideas complejas en productos digitales fluidos e intuitivos. Creo firmemente que la tecnología debe estar al servicio de las personas, por eso cuido cada detalle de la experiencia de usuario (UX).
                            </Typography>

                            <Stack direction="row" spacing={4} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                <Box>
                                    <Typography variant="h4" sx={{ fontWeight: 800, color: 'primary.main' }}>5+</Typography>
                                    <Typography variant="body2" color="text.secondary">Proyectos Completados</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h4" sx={{ fontWeight: 800, color: 'primary.main' }}>100%</Typography>
                                    <Typography variant="body2" color="text.secondary">Compromiso Freelance</Typography>
                                </Box>
                            </Stack>
                        </Box>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: { xs: 0.5, md: 1 },
                                bgcolor: 'rgba(255,255,255,0.03)',
                                borderRadius: 4,
                                overflow: 'hidden',
                                position: 'relative',
                                '&::before': {
                                    content: '""',
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: 4,
                                    pointerEvents: 'none',
                                }
                            }}
                        >
                            <Box
                                sx={{
                                    width: '100%',
                                    aspectRatio: { xs: '16/9', md: '4/5' },
                                    bgcolor: 'background.paper',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative',
                                }}
                            >
                                {/* Placeholder for Photo or Abstract Graphic */}
                                <Typography variant="h3" sx={{ opacity: 0.1, fontWeight: 900 }}>UI/UX</Typography>
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: '10%',
                                        right: '10%',
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        background: theme => theme.palette.primary.main,
                                        filter: 'blur(10px)',
                                    }}
                                />
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;
