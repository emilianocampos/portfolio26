import { useRef, useEffect } from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import gsap from 'gsap';

const education = [
    {
        school: 'Coderhouse',
        degree: 'Carrera de Programación Front-End',
        year: '2022 - 2023',
        description: 'Formación profunda en HTML, CSS, JavaScript, React y desarrollo de interfaces modernas.',
    },
    {
        school: 'Autodidacta / Cursos Online',
        degree: 'Especialización en UX/UI & Multimedia',
        year: '2021 - Presente',
        description: 'Estudios enfocados en principios de diseño, edición de video con Premiere Pro y fotografía digital.',
    }
];

const Education = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.from('.edu-item', {
            opacity: 0,
            y: 30,
            stagger: 0.3,
            duration: 1,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
            }
        });
    }, []);

    return (
        <Box id="education" ref={sectionRef} sx={{ py: 10, bgcolor: 'background.default' }}>
            <Container maxWidth="md">
                <Box sx={{ mb: 6, textAlign: 'center' }}>
                    <Typography variant="overline" color="primary" sx={{ fontWeight: 700 }}>
                        FORMACIÓN
                    </Typography>
                    <Typography variant="h2" sx={{ mt: 1 }}>
                        Educación & Certificaciones
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    {education.map((item, index) => (
                        <Grid size={{ xs: 12 }} key={index} className="edu-item">
                            <Paper
                                sx={{
                                    p: 4,
                                    bgcolor: 'rgba(255,255,255,0.02)',
                                    border: '1px solid rgba(255,255,255,0.05)',
                                    transition: '0.3s',
                                    '&:hover': {
                                        bgcolor: 'rgba(255,255,255,0.04)',
                                        borderColor: 'primary.main',
                                    }
                                }}
                            >
                                <Grid container justifyContent="space-between" alignItems="center">
                                    <Grid size={{ xs: 12, sm: 8 }}>
                                        <Typography variant="h5" sx={{ fontWeight: 700 }}>{item.degree}</Typography>
                                        <Typography variant="subtitle1" color="primary">{item.school}</Typography>
                                    </Grid>
                                    <Grid size={{ xs: 12, sm: 4 }} sx={{ textAlign: { sm: 'right' }, mt: { xs: 1, sm: 0 } }}>
                                        <Typography variant="body2" color="text.secondary">{item.year}</Typography>
                                    </Grid>
                                </Grid>
                                <Typography variant="body1" sx={{ mt: 2, color: 'text.secondary' }}>
                                    {item.description}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Education;
