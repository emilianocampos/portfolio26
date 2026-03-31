import { useEffect, useRef } from 'react';
import { Box, Container, Typography, Stack, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Twitter, Instagram } from '@mui/icons-material';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const footerRef = useRef(null);
    const iconsRef = useRef<HTMLButtonElement[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            if (iconsRef.current.length > 0) {
                gsap.from(iconsRef.current, {
                    scrollTrigger: {
                        trigger: footerRef.current,
                        start: 'top 95%',
                        toggleActions: 'play none none reverse'
                    },
                    opacity: 0,
                    scale: 0,
                    rotate: 360,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: 'back.out(1.7)',
                    force3D: true
                });
            }
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <Box ref={footerRef} sx={{ py: 6, borderTop: '1px solid rgba(255,255,255,0.05)', mt: 10 }}>
            <Container maxWidth="lg">
                <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center" spacing={4}>
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main' }}>EC.</Typography>
                        <Typography variant="body2" color="text.secondary">Emiliano Campos Campazzo</Typography>
                    </Box>

                    <Stack direction="row" spacing={2}>
                        <IconButton 
                            ref={(el: any) => el && (iconsRef.current[0] = el)} 
                            color="inherit" 
                            size="small"
                        >
                            <LinkedIn />
                        </IconButton>
                        <IconButton 
                            ref={(el: any) => el && (iconsRef.current[1] = el)} 
                            color="inherit" 
                            size="small"
                        >
                            <GitHub />
                        </IconButton>
                        <IconButton 
                            ref={(el: any) => el && (iconsRef.current[2] = el)} 
                            color="inherit" 
                            size="small"
                        >
                            <Twitter />
                        </IconButton>
                        <IconButton 
                            ref={(el: any) => el && (iconsRef.current[3] = el)} 
                            color="inherit" 
                            size="small"
                        >
                            <Instagram />
                        </IconButton>
                    </Stack>

                    <Typography variant="body2" color="text.secondary">
                        © {new Date().getFullYear()} - Diseño y Desarrollo: EC
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;

