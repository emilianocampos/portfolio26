import { useEffect, useRef } from 'react';
import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const statsRef = useRef<HTMLDivElement[]>([]);
    const graphicRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Text reveal
            gsap.fromTo(textRef.current,
                { opacity: 0, x: -50 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                    }
                }
            );

            // Stats stagger reveal
            gsap.fromTo(statsRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    stagger: 0.2,
                    duration: 0.8,
                    delay: 0.5,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                    }
                }
            );

            // Graphic reveal
            gsap.fromTo(graphicRef.current,
                { opacity: 0, scale: 0.8, rotate: -5 },
                {
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                    duration: 1.2,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                        toggleActions: 'restart reverse restart reverse'
                    }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <Box id="about" ref={sectionRef} sx={{ position: 'relative', py: { xs: 10, md: 20 } }}>
            <Container maxWidth="lg">
                <Grid container spacing={8} alignItems="center">
                    <Grid size={{ xs: 12 }}>
                        <Box ref={textRef} sx={{ textAlign: { xs: 'center', md: 'center' }, maxWidth: '900px', mx: 'auto' }}>
                            <Typography variant="overline" color="primary" sx={{ fontWeight: 700, letterSpacing: '0.2em' }}>
                                MI FILOSOFÍA
                            </Typography>
                            <Typography variant="h2" sx={{ mb: 3, mt: 1, fontWeight: 900, lineHeight: 1.2 }}>
                                No solo escribo código, <br />
                                <Box component="span" sx={{ color: 'primary.main' }}>diseño soluciones.</Box>
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, fontSize: '1.2rem', lineHeight: 1.7 }}>
                                Hola, soy <strong>Emiliano Campos</strong>. Ayudo a emprendedores y marcas a transformar su presencia online en una herramienta que realmente genera resultados.
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, fontSize: '1.2rem', lineHeight: 1.7 }}>
                                Mi formación técnica me dio las bases, pero trabajar con clientes reales —y actualmente formar parte de una empresa tecnológica del rubro IT— me enseñó algo clave: <strong>una página web no es un gasto, es una inversión cuando está bien pensada.</strong> Por eso creo sitios claros, atractivos y fáciles de usar, diseñados para captar la atención y guiar a las personas hacia el contacto o la compra.
                            </Typography>
                            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, fontSize: '1.1rem', lineHeight: 1.7 }}>
                                Combino diseño, contenido visual y desarrollo web para que tu negocio se vea profesional, transmita confianza y represente la calidad de lo que ofrecés desde el primer vistazo.
                            </Typography>

                            <Stack direction="row" spacing={6} sx={{ justifyContent: 'center', mt: 4 }}>
                                <Box ref={(el: any) => el && (statsRef.current[0] = el)}>
                                    <Typography variant="h3" sx={{ fontWeight: 900, color: 'primary.main', mb: 0.5 }}>5+</Typography>
                                    <Typography variant="overline" sx={{ color: 'text.secondary', fontWeight: 700 }}>Proyectos</Typography>
                                </Box>
                                <Box ref={(el: any) => el && (statsRef.current[1] = el)}>
                                    <Typography variant="h3" sx={{ fontWeight: 900, color: 'primary.main', mb: 0.5 }}>100%</Typography>
                                    <Typography variant="overline" sx={{ color: 'text.secondary', fontWeight: 700 }}>Compromiso</Typography>
                                </Box>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;
