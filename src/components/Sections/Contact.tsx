import { Box, Container, Typography, Grid, TextField, Button, Stack, Paper } from '@mui/material';
const Contact = () => {
    return (
        <Box id="contact" sx={{ py: { xs: 10, md: 15 }, position: 'relative' }}>
            {/* CTA Part */}
            <Container maxWidth="lg" sx={{ mb: 10 }}>
                <Box
                    className="hw-accel"
                    sx={{
                        textAlign: 'center',
                        bgcolor: 'primary.main',
                        p: { xs: 4, md: 8 },
                        borderRadius: 8,
                        color: 'white',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <Typography variant="h2" sx={{ fontWeight: 900, mb: 3 }}>
                        ¿Tenés una idea?<br />
                        <Box component="span" sx={{ opacity: 0.8 }}>La convertimos en realidad.</Box>
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 4, opacity: 0.9, maxWidth: '600px', mx: 'auto' }}>
                        Estoy listo para ayudarte a llevar tu proyecto al siguiente nivel con soluciones digitales modernas y funcionales.
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        href="#contact-form"
                        sx={{
                            bgcolor: 'white',
                            color: 'primary.main',
                            px: 6,
                            py: 2,
                            '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' }
                        }}
                    >
                        Empecemos hoy
                    </Button>

                    {/* Abstract circles */}
                    <Box sx={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.1)' }} />
                    <Box sx={{ position: 'absolute', bottom: -100, left: -50, width: 300, height: 300, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.05)' }} />
                </Box>
            </Container>

            {/* Form Part */}
            <Container maxWidth="md">
                <Typography id="contact-form" variant="h3" sx={{ textAlign: 'center', mb: 6 }}>Enviame un mensaje</Typography>
                <Paper sx={{ p: { xs: 3, md: 6 }, borderRadius: 4 }}>
                    <form action="https://formspree.io/f/mgopzwja" method="POST">
                        <Stack spacing={3}>
                            <Grid container spacing={3}>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField name="name" required fullWidth label="Nombre" variant="outlined" placeholder="Tu nombre" />
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6 }}>
                                    <TextField name="email" type="email" required fullWidth label="Email" variant="outlined" placeholder="tu@email.com" />
                                </Grid>
                            </Grid>
                            <TextField name="subject" fullWidth label="Asunto" variant="outlined" placeholder="¿En qué puedo ayudarte?" />
                            <TextField name="message" required fullWidth multiline rows={4} label="Mensaje" variant="outlined" placeholder="Escribe tu mensaje aquí..." />
                            <Button
                                type="submit"
                                variant="contained"
                                fullWidth
                                size="large"
                                sx={{ py: 2, mt: 2 }}
                            >
                                Enviar Mensaje
                            </Button>
                        </Stack>
                    </form>
                </Paper>
            </Container>
        </Box>
    );
};

export default Contact;
