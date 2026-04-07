import { useRef, useEffect, useState } from 'react';
import { Box, Container, Typography, Stack, Paper, Button, Collapse } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import gsap from 'gsap';

interface ExperienceItemProps {
    role: string;
    company: string;
    period: string;
    highlights: string[];
    extra?: {
        title: string;
        items: string[];
    };
    index: number;
}

const experiences: Omit<ExperienceItemProps, 'index'>[] = [
    {
        role: 'Front-end Developer (+2 años de experiencia profesional)',
        company: 'Empresa Tech | GearthLogic',
        period: '2023 - 2026',
        highlights: [
            'Desarrollo de aplicaciones web y paneles administrativos utilizando React y TypeScript, integrados con backend mediante APIs REST',
            'Diseño e implementación de interfaces para dashboards administrativos, conectadas a sistemas backend',
            'Desarrollo de landing pages optimizadas para conversión para distintos clientes',
            'Creación de APIs personalizadas para integración de servicios y manejo de datos',
        ],
        extra: {
            title: 'Proyectos destacados dentro de la empresa:',
            items: [
                'Desarrollo de sitio web corporativo con formulario conectado a servidor backend',
                'Desarrollo de plugin personalizado en WordPress utilizando PHP, incluyendo lógica completa de negocio (e-commerce):',
                ' • Implementación completa de lógica de negocio en entorno productivo',
                ' • Desarrollo de carrito de compras y flujo de checkout optimizado',
                ' • Integración de sistema de pagos reales',
                ' • Gestión de usuarios con autenticación para vendedores',
                ' • Desarrollo de panel administrativo configurable',
                ' • Automatización de catálogo mediante tareas programadas (cron jobs)'
            ]
        }
    },
    {
        role: 'Creador de Contenido & Growth Digital',
        company: 'Marca personal - Redes Sociales',
        period: '2020 - Actualidad',
        highlights: [
            'Construcción de comunidad de +120.000 seguidores en Facebook',
            '+10.000 seguidores en Instagram y +23.000 en TikTok',
            'Monetización activa mediante estrategias de contenido en el nicho deportivo (fútbol)',
            'Análisis de métricas (engagement, retención, alcance) para optimización de crecimiento y conversión',
            'Aplicación de principios de psicología del comportamiento en entornos digitales',
        ]
    },
    {
        role: 'Frontend Developer (Freelance)',
        company: 'Proyectos para clientes reales',
        period: '2023 - Actualidad',
        highlights: [
            'Desarrollo de landing pages para negocios y emprendimientos',
            'Diseño y maquetación de interfaces modernas orientadas a conversión',
            'Implementación de formularios y conexión a servicios externos mediante APIs',
            'Trabajo directo con clientes, relevamiento de necesidades y entrega de soluciones personalizadas',
        ]
    }
];

const ExperienceCard = ({ role, company, period, highlights, extra, index }: ExperienceItemProps) => {
    const [expanded, setExpanded] = useState(false);

    //  A simplified heuristic for "more than 4 lines"
    //  Usually 4 lines of highlights/text is around the limit.
    const needsReadMore = highlights.length > 3 || (extra && extra.items.length > 0);

    return (
        <Box
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
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        transform: 'translateY(-5px)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                    }
                }}
            >
                <Typography variant="h6" sx={{ fontWeight: 700, lineHeight: 1.2, mb: 1 }}>
                    {role}
                </Typography>
                <Typography variant="subtitle2" color="primary" sx={{ mb: 2, fontWeight: 600 }}>
                    {company} | {period}
                </Typography>

                <Box sx={{ position: 'relative' }}>
                    <Collapse in={expanded} collapsedSize={needsReadMore ? 110 : 'auto'} sx={{ overflow: 'hidden' }}>
                        <Stack spacing={1}>
                            {highlights.map((point, i) => (
                                <Typography key={i} variant="body2" color="text.secondary" sx={{ display: 'flex', gap: 1 }}>
                                    <Box component="span" sx={{ color: 'primary.main' }}>•</Box>
                                    {point}
                                </Typography>
                            ))}

                            {extra && (
                                <Box sx={{ mt: 2 }}>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1, color: 'text.primary' }}>
                                        {extra.title}
                                    </Typography>
                                    <Stack spacing={0.5}>
                                        {extra.items.map((item, i) => (
                                            <Typography key={i} variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>
                                                {item}
                                            </Typography>
                                        ))}
                                    </Stack>
                                </Box>
                            )}
                        </Stack>
                    </Collapse>

                    {needsReadMore && (
                        <Button
                            size="small"
                            onClick={() => setExpanded(!expanded)}
                            startIcon={expanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                            sx={{
                                mt: 1,
                                textTransform: 'none',
                                fontWeight: 700,
                                color: 'primary.main',
                                '&:hover': { background: 'transparent', textDecoration: 'underline' }
                            }}
                        >
                            {expanded ? 'Ver menos' : 'Leer más'}
                        </Button>
                    )}
                </Box>
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
                    boxShadow: '0 0 15px rgba(99, 102, 241, 0.8)',
                    zIndex: 1,
                }}
            />
        </Box>
    );
};

const Experience = () => {
    const containerRef = useRef(null);
    const headerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(headerRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
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
                    toggleActions: 'play none none reverse'
                }
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <Box id="experience" ref={containerRef} sx={{ position: 'relative', py: { xs: 10, md: 15 } }}>
            <Container maxWidth="md">
                <Box ref={headerRef} sx={{ mb: 8, textAlign: 'center' }}>
                    <Typography variant="overline" color="primary" sx={{ fontWeight: 700, letterSpacing: '0.2em' }}>
                        TRAYECTORIA
                    </Typography>
                    <Typography variant="h2" sx={{ mt: 1, fontWeight: 900 }}>
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
                            background: 'linear-gradient(to bottom, transparent, rgba(99, 102, 241, 0.5) 10%, rgba(99, 102, 241, 0.5) 90%, transparent)',
                            transform: { md: 'translateX(-50%)' },
                        }}
                    />

                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} {...exp} index={index} />
                    ))}
                </Stack>
            </Container>
        </Box>
    );
};

export default Experience;

