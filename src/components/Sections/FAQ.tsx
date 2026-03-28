import { useRef, useLayoutEffect } from 'react';
import { 
    Box, 
    Container, 
    Typography, 
    Accordion, 
    AccordionSummary, 
    AccordionDetails,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
    {
        question: '¿Por qué mi negocio necesita una página web en 2026?',
        answer: (
            <>
                <Typography variant="body1" sx={{ mb: 2 }}>
                    Porque hoy si no estás en internet, no existís para muchos clientes.
                </Typography>
                <List dense>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: 36 }}><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary="La gente busca TODO en Google antes de comprar" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: 36 }}><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary="Tener web te da credibilidad inmediata" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: 36 }}><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary="Podés mostrar tus servicios 24/7" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: 36 }}><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary="No dependés solo de redes sociales" />
                    </ListItem>
                </List>
                <Typography variant="body2" color="primary" sx={{ mt: 2, fontWeight: 700 }}>
                    👉 Una web no es gasto, es una herramienta para generar clientes.
                </Typography>
            </>
        )
    },
    {
        question: '¿No alcanza con Instagram o Facebook?',
        answer: (
            <>
                <Typography variant="body1" sx={{ mb: 1, fontWeight: 700 }}>No.</Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>Las redes sociales (como Facebook o Instagram):</Typography>
                <List dense sx={{ mb: 2 }}>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: 36 }}><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary="Dependen del algoritmo" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: 36 }}><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary="Pueden bajar tu alcance cuando quieran" />
                    </ListItem>
                </List>
                <Typography variant="body2" sx={{ mb: 1 }}>Una web es tuya:</Typography>
                <List>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: 36 }}><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary="Nadie te la puede cerrar" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: 36 }}><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary="Podés vender sin depender de terceros" />
                    </ListItem>
                </List>
            </>
        )
    },
    {
        question: '¿Cuánto tarda en estar lista mi página?',
        answer: (
            <>
                <Typography variant="body1" sx={{ mb: 1 }}>Depende del tipo de web, pero en general:</Typography>
                <List>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: 36 }}><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary="Landing simple: 3 a 7 días" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: 36 }}><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary="Web completa: 7 a 15 días" />
                    </ListItem>
                </List>
            </>
        )
    },
    {
        question: '¿Cuánto cuesta una página web?',
        answer: (
            <>
                <Typography variant="body1" sx={{ mb: 1 }}>El precio depende de lo que necesites:</Typography>
                <List dense sx={{ mb: 2 }}>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: 36 }}><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary="Landing page: Consultar según proyecto" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: 36 }}><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary="Web completa: Consultar según proyecto" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: 36 }}><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary="Ecommerce: Consultar según proyecto" />
                    </ListItem>
                </List>
                <Typography variant="body2" color="primary" sx={{ fontWeight: 700 }}>
                    👉 Te paso un presupuesto claro según tu negocio.
                </Typography>
            </>
        )
    },
    {
        question: '¿Las páginas funcionan en celular?',
        answer: (
            <>
                <Typography variant="body1" sx={{ mb: 1 }}>Sí, todas las webs son:</Typography>
                <List dense sx={{ mb: 2 }}>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: 36 }}><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary="Responsive" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: 36 }}><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary="Rápidas" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: 36 }}><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary="Optimizadas para móvil" />
                    </ListItem>
                </List>
                <Typography variant="body2" color="primary" sx={{ fontWeight: 700 }}>
                    👉 Más del 80% de las visitas vienen desde el celular.
                </Typography>
            </>
        )
    },
    {
        question: '¿Después quién administra la página?',
        answer: (
            <>
                <Typography variant="body1" sx={{ mb: 1 }}>Tenés dos opciones:</Typography>
                <List>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: 36 }}><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary="Te enseño a usarla" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: 36 }}><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary="O me encargo yo (mantenimiento mensual)" />
                    </ListItem>
                </List>
            </>
        )
    },
    {
        question: '¿Me ayuda a conseguir clientes?',
        answer: (
            <>
                <Typography variant="body1" sx={{ mb: 1 }}>Sí, ese es el objetivo principal.</Typography>
                <Typography variant="body2" sx={{ mb: 1 }}>La web está pensada para:</Typography>
                <List>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: 36 }}><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary="Atraer visitas" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: 36 }}><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary="Generar confianza" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: 36 }}><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary="Convertir en clientes" />
                    </ListItem>
                </List>
            </>
        )
    },
    {
        question: '¿Puedo vender online con mi página?',
        answer: (
            <>
                <Typography variant="body1" sx={{ mb: 1 }}>Sí, podés:</Typography>
                <List>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: 36 }}><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary="Vender productos" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: 36 }}><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary="Recibir pagos" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: 36 }}><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary="Automatizar pedidos" />
                    </ListItem>
                </List>
            </>
        )
    },
    {
        question: '¿Incluye dominio y hosting?',
        answer: (
            <>
                <Typography variant="body1" sx={{ mb: 1 }}>Te asesoro y configuro todo:</Typography>
                <List>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: 36 }}><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary="Dominio (.com / .com.ar)" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: 36 }}><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary="Hosting" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: 36 }}><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary="Puesta online" />
                    </ListItem>
                </List>
            </>
        )
    },
    {
        question: '¿Qué necesitás de mí para empezar?',
        answer: (
            <>
                <Typography variant="body1" sx={{ mb: 1 }}>Solo:</Typography>
                <List dense sx={{ mb: 2 }}>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: 36 }}><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary="Info de tu negocio" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: 36 }}><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary="Logo (si tenés)" />
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemIcon sx={{ minWidth: 36 }}><CheckCircleIcon color="primary" fontSize="small" /></ListItemIcon>
                        <ListItemText primary="Fotos o contenido" />
                    </ListItem>
                </List>
                <Typography variant="body2" color="primary" sx={{ fontWeight: 700 }}>
                    👉 Yo me encargo del resto.
                </Typography>
            </>
        )
    }
];

const FAQ = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!sectionRef.current) return;

        const ctx = gsap.context(() => {
            if (headerRef.current) {
                gsap.fromTo(headerRef.current,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 85%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            }

            const items = gsap.utils.toArray('.faq-item');
            if (items.length > 0) {
                gsap.fromTo(items, 
                    { opacity: 0, x: -20 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        stagger: 0.1,
                        scrollTrigger: {
                            trigger: sectionRef.current,
                            start: 'top 75%',
                            toggleActions: 'play none none reverse'
                        }
                    }
                );
            }
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <Box id="faq" ref={sectionRef} sx={{ py: { xs: 10, md: 15 }, bgcolor: 'background.default' }}>
            <Container maxWidth="md">
                <Box ref={headerRef} sx={{ mb: 8, textAlign: 'center' }}>
                    <Typography variant="overline" color="primary" sx={{ fontWeight: 700 }}>
                        RESPUESTAS
                    </Typography>
                    <Typography variant="h2" sx={{ mt: 1 }}>
                        Preguntas Frecuentes
                    </Typography>
                </Box>

                <Box>
                    {faqs.map((faq, index) => (
                        <Accordion 
                            key={index} 
                            className="faq-item"
                            sx={{ 
                                bgcolor: 'background.paper',
                                mb: 2,
                                borderRadius: '12px !important',
                                '&:before': { display: 'none' },
                                border: '1px solid rgba(255,255,255,0.05)',
                                transition: 'all 0.3s ease',
                                willChange: 'transform, border-color',
                                '&:hover': {
                                    borderColor: 'primary.main',
                                    transform: 'translateX(5px)'
                                }
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon color="primary" />}
                                sx={{ px: 3, py: 1 }}
                            >
                                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                    {faq.question}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                                {faq.answer}
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default FAQ;
