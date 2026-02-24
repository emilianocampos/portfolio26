import { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import gsap from 'gsap';
import './Loader.css';

import pcIcon from '../../assets/pc.svg';

interface LoaderProps {
    onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const progressRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    gsap.to(containerRef.current, {
                        yPercent: -100,
                        duration: 0.8,
                        ease: 'power4.inOut',
                        onComplete
                    });
                }
            });

            // Split text animation effect
            tl.fromTo(textRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
            );

            // Progress bar animation
            tl.fromTo(barRef.current,
                { scaleX: 0 },
                { scaleX: 1, duration: 1.5, ease: 'power1.inOut' },
                '-=0.5'
            );

            // Fade out progress and text before sliding up
            tl.to([textRef.current, progressRef.current], {
                opacity: 0,
                y: -20,
                duration: 0.4,
                ease: 'power2.in',
                delay: 0.2
            });

        }, containerRef);

        return () => ctx.revert();
    }, [onComplete]);

    return (
        <Box
            ref={containerRef}
            className="loader-container"
            sx={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                bgcolor: '#0f172a',
                zIndex: 9999,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
            }}
        >
            <Box
                ref={textRef}
                sx={{
                    mb: 4,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 800,
                        letterSpacing: '0.1em',
                        background: (theme) => `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        textTransform: 'uppercase'
                    }}
                >
                    EC
                </Typography>
                <Box
                    component="img"
                    src={pcIcon}
                    alt="PC Logo"
                    sx={{
                        width: 40,
                        height: 40,
                        filter: 'brightness(0) invert(1) sepia(1) saturate(5) hue-rotate(220deg)' // Primary hue filter
                    }}
                />
            </Box>

            <Box
                ref={progressRef}
                className="loader-progress-wrapper"
                sx={{
                    width: '200px',
                    height: '2px',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '1px'
                }}
            >
                <Box
                    ref={barRef}
                    className="loader-progress-bar"
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: (theme) => `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        transformOrigin: 'left'
                    }}
                />
            </Box>

            {/* Decorative Orbs */}
            <Box className="loader-orb orb-1" />
            <Box className="loader-orb orb-2" />
        </Box>
    );
};

export default Loader;
