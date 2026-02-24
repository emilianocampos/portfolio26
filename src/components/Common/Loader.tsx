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
    const logoRef = useRef<SVGSVGElement>(null);
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

            // Logo Animations
            const logoPaths = logoRef.current?.querySelectorAll('path, rect');
            if (logoPaths) {
                gsap.set(logoPaths, { strokeDasharray: 100, strokeDashoffset: 100 });
                tl.to(logoPaths, {
                    strokeDashoffset: 0,
                    duration: 1.5,
                    stagger: 0.2,
                    ease: 'power2.inOut'
                }, 0);
            }

            // Continuous pulse for the logo
            gsap.to(logoRef.current, {
                scale: 1.1,
                opacity: 0.8,
                duration: 0.8,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });

            // Split text animation effect
            tl.fromTo(textRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
                0.5
            );

            // Progress bar animation
            tl.fromTo(barRef.current,
                { scaleX: 0 },
                { scaleX: 1, duration: 2, ease: 'power1.inOut' },
                0.2
            );

            // Fade out progress and text before sliding up
            tl.to([textRef.current, logoRef.current, progressRef.current], {
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
                <svg
                    ref={logoRef}
                    width="45"
                    height="45"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ filter: 'drop-shadow(0 0 8px rgba(99, 102, 241, 0.5))' }}
                >
                    <path d="M12 21L12 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="3" y="4" width="18" height="13" rx="1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M9 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
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
