import { useEffect, useRef } from 'react';
import { Box, Typography, Button, Container, Stack, Grid } from '@mui/material';
import gsap from 'gsap';
import {
    FaReact,
    FaNodeJs,
    FaJs,
    FaHtml5,
    FaCss3Alt,
    FaGithub,
    FaVideo,
    FaSass
} from 'react-icons/fa';
import {
    SiGreensock,
    SiPostgresql,
    SiUnity,
    SiAdobephotoshop
} from 'react-icons/si';

import CodeAnimation from './CodeAnimation';

const technologies = [
    { name: 'HTML', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'SASS', icon: <FaSass />, color: '#CC6699' },
    { name: 'JAVASCRIPT', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'REACT.JS', icon: <FaReact />, color: '#61DAFB' },
    { name: 'GIT/GITHUB', icon: <FaGithub />, color: '#F05032' },
    { name: 'GSAP', icon: <SiGreensock />, color: '#88CE02' },
    { name: 'NODE.JS', icon: <FaNodeJs />, color: '#339933' },
    { name: 'SQL', icon: <SiPostgresql />, color: '#4169E1' },
    { name: 'UNITY', icon: <SiUnity />, color: '#FFFFFF' },
    { name: 'CAPCUT', icon: <FaVideo />, color: '#000000' },
    { name: 'PHOTOSHOP', icon: <SiAdobephotoshop />, color: '#31A8FF' },
];

const Hero = () => {
    const rootRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const ctaRef = useRef(null);
    const imageRef = useRef(null);
    const bgElementsRef = useRef<HTMLDivElement[]>([]);
    const carouselRef = useRef(null);
    const carouselTrackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Entrance animations
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.fromTo(imageRef.current,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1.2, ease: 'back.out(1.7)' }
            )
                .fromTo(titleRef.current,
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1 },
                    '-=0.8'
                )
                .fromTo(subtitleRef.current,
                    { y: 30, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                    '-=0.6'
                )
                .fromTo(ctaRef.current,
                    { y: 20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.6 },
                    '-=0.4'
                );

            // Floating background elements
            bgElementsRef.current.forEach((el, i) => {
                if (el) {
                    gsap.to(el, {
                        y: 'random(-20, 20)',
                        x: 'random(-20, 20)',
                        rotation: 'random(-15, 15)',
                        duration: 'random(3, 5)',
                        repeat: -1,
                        yoyo: true,
                        ease: 'sine.inOut',
                        delay: i * 0.2
                    });
                }
            });

            // Carousel infinite scroll
            if (carouselTrackRef.current) {
                const track = carouselTrackRef.current;
                const scrollWidth = track.scrollWidth / 2;

                gsap.to(track, {
                    x: -scrollWidth,
                    duration: 30,
                    ease: 'none',
                    repeat: -1,
                    onRepeat: () => {
                        gsap.set(track, { x: 0 });
                    }
                });

                // Carousel entrance
                gsap.fromTo(carouselRef.current,
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 1, delay: 1.5 }
                );
            }
        }, rootRef);

        return () => ctx.revert();
    }, []);

    return (
        <Box
            id="hero"
            ref={rootRef}
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                pt: { xs: 15, md: 0 },
                pb: { xs: 8, md: 0 },
                mt: 13
            }}
        >
            {/* Background Orbs */}
            <Box
                ref={(el: any) => el && (bgElementsRef.current[0] = el)}
                sx={{
                    position: 'absolute',
                    top: '20%',
                    right: '10%',
                    width: { xs: 200, md: 400 },
                    height: { xs: 200, md: 400 },
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
                    filter: 'blur(40px)',
                    zIndex: -1,
                }}
            />

            <Container maxWidth="lg">
                <Grid container spacing={6} alignItems="center">
                    {/* Left Side: Text & Actions */}
                    <Grid size={{ xs: 12, md: 7 }} order={{ xs: 2, md: 1 }}>
                        <Stack spacing={4}>
                            <Box ref={titleRef}>
                                <Typography
                                    variant="h1"
                                    sx={{
                                        fontSize: { xs: '3rem', md: '4rem' },
                                        lineHeight: 1.1,
                                        mb: 2,
                                        textAlign: { xs: 'center', md: 'left' }
                                    }}
                                >
                                    Hola, soy <br />
                                    <Box
                                        component="span"
                                        sx={{
                                            background: (theme) => `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            display: 'inline-block',
                                            fontWeight: 900
                                        }}
                                    >
                                        Emiliano
                                    </Box>
                                </Typography>
                            </Box>

                            <Box ref={subtitleRef}>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        color: 'text.secondary',
                                        fontWeight: 400,
                                        maxWidth: '600px',
                                        mb: 4,
                                        textAlign: { xs: 'center', md: 'left' },
                                        mx: { xs: 'auto', md: 0 }
                                    }}
                                >
                                    Transformo ideas en experiencias digitales profesionales, optimizadas y listas para convertir visitas en clientes.
                                </Typography>
                            </Box>

                            <Stack
                                direction={{ xs: 'column', sm: 'row' }}
                                spacing={2}
                                ref={ctaRef}
                                sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}
                            >
                                <Button
                                    variant="contained"
                                    size="large"
                                    href="#projects"
                                    sx={{ px: 4, py: 1.5 }}
                                >
                                    Ver mis proyectos
                                </Button>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    href="#contact"
                                    sx={{ px: 4, py: 1.5, borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}
                                >
                                    Contactar ahora
                                </Button>
                            </Stack>
                        </Stack>
                    </Grid>

                    {/* Right Side: Code Animation */}
                    <Grid size={{ xs: 12, md: 5 }} order={{ xs: 1, md: 2 }}>
                        <Box
                            ref={imageRef}
                            sx={{
                                position: 'relative',
                                width: '100%',
                                maxWidth: '500px',
                                mx: 'auto',
                            }}
                        >
                            {/* Background Glow */}
                            <Box
                                ref={(el: any) => el && (bgElementsRef.current[1] = el)}
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    width: '120%',
                                    height: '120%',
                                    borderRadius: '50%',
                                    background: (theme) => `radial-gradient(circle, ${theme.palette.primary.main}33 0%, transparent 70%)`,
                                    filter: 'blur(60px)',
                                    zIndex: -1,
                                }}
                            />

                            <CodeAnimation />
                        </Box>
                    </Grid>
                </Grid>

                {/* Tech Carousel Area */}
                <Box
                    ref={carouselRef}
                    sx={{
                        mt: { xs: 8, md: 10 },
                        pt: 4,
                        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                        overflow: 'hidden',
                        width: '100%',
                    }}
                >
                    <Typography
                        variant="overline"
                        sx={{
                            color: 'text.secondary',
                            display: 'block',
                            mb: 3,
                            textAlign: { xs: 'center', md: 'left' }
                        }}
                    >
                        TECNOLOGÍAS QUE UTILIZO
                    </Typography>
                    <Box
                        ref={carouselTrackRef}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 6,
                            width: 'max-content',
                            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                        }}
                    >
                        {[...technologies, ...technologies].map((tech, index) => (
                            <Box
                                key={`${tech.name}-${index}`}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 1.5,
                                    color: 'text.secondary',
                                    transition: 'all 0.3s ease',
                                    cursor: 'default',
                                    '&:hover': {
                                        color: tech.color,
                                        transform: 'scale(1.1)',
                                    },
                                }}
                            >
                                <Box
                                    component="span"
                                    sx={{
                                        fontSize: '1.8rem',
                                        filter: 'grayscale(1)',
                                        transition: 'all 0.3s ease',
                                        '.MuiBox-root:hover &': {
                                            filter: 'grayscale(0)',
                                        }
                                    }}
                                >
                                    {tech.icon}
                                </Box>
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        fontWeight: 600,
                                        letterSpacing: '0.05em',
                                        whiteSpace: 'nowrap'
                                    }}
                                >
                                    {tech.name}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Hero;
