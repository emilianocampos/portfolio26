import { useRef, useEffect } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent } from '@mui/material';
import gsap from 'gsap';
import {
    Code as CodeIcon,
    Settings as SettingsIcon,
    Storage as StorageIcon
} from '@mui/icons-material';

const skillCategories = [
    {
        title: 'Frontend',
        icon: <CodeIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
        skills: ['React', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI'],
    },
    {
        title: 'Backend & Data',
        icon: <StorageIcon sx={{ fontSize: 40, color: '#10b981' }} />,
        skills: ['Node.js', 'SQL', 'Desarrollo e integración de APIs REST'],
    },
    {
        title: 'Tools & Workflow',
        icon: <SettingsIcon sx={{ fontSize: 40, color: '#f59e0b' }} />,
        skills: ['Git & GitHub', 'AWS (básico)', 'SEO'],
    },
];

const Skills = () => {
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

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
                        trigger: sectionRef.current,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse'
                    },
                    force3D: true
                }
            );

            gsap.fromTo(cardsRef.current,
                { opacity: 0 },
                {
                    opacity: 1,
                    stagger: 0.15,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 70%',
                        toggleActions: 'play none none reverse'
                    },
                    force3D: true
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <Box id="skills" ref={sectionRef} sx={{ bgcolor: 'background.default', py: { xs: 10, md: 15 } }}>
            <Container maxWidth="lg">
                <Box ref={headerRef} sx={{ mb: 8, textAlign: 'center' }}>
                    <Typography variant="overline" color="primary" sx={{ fontWeight: 700 }}>
                        ESPECIALIDADES
                    </Typography>
                    <Typography variant="h2" sx={{ mt: 1 }}>
                        Stack Tecnológico
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {skillCategories.map((category, index) => (
                        <Grid size={{ xs: 12, sm: 12, md: 4 }} key={category.title}>
                            <Card
                                ref={(el: any) => el && (cardsRef.current[index] = el)}
                                className="hw-accel"
                                sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: '0.3s',
                                    willChange: 'transform, border-color, box-shadow',
                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                        borderColor: 'primary.main',
                                        boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
                                    }
                                }}
                            >
                                <CardContent sx={{ flexGrow: 1, textAlign: 'center', p: 4 }}>
                                    <Box sx={{ mb: 2 }}>{category.icon}</Box>
                                    <Typography variant="h5" sx={{ mb: 2, fontWeight: 700 }}>
                                        {category.title}
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
                                        {category.skills.map((skill) => (
                                            <Typography
                                                key={skill}
                                                variant="body2"
                                                sx={{
                                                    bgcolor: 'rgba(255,255,255,0.05)',
                                                    px: 1.5,
                                                    py: 0.5,
                                                    borderRadius: 2,
                                                    color: 'text.secondary',
                                                }}
                                            >
                                                {skill}
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

export default Skills;
