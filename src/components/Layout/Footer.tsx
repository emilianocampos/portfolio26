import { Box, Container, Typography, Stack, IconButton, Divider } from '@mui/material';
import { GitHub, LinkedIn, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box sx={{ py: 6, borderTop: '1px solid rgba(255,255,255,0.05)', mt: 10 }}>
            <Container maxWidth="lg">
                <Stack direction={{ xs: 'column', md: 'row' }} justifyContent="space-between" alignItems="center" spacing={4}>
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 800, color: 'primary.main' }}>EC.</Typography>
                        <Typography variant="body2" color="text.secondary">Emiliano Campos Campazzo</Typography>
                    </Box>

                    <Stack direction="row" spacing={2}>
                        <IconButton color="inherit" size="small"><LinkedIn /></IconButton>
                        <IconButton color="inherit" size="small"><GitHub /></IconButton>
                        <IconButton color="inherit" size="small"><Twitter /></IconButton>
                        <IconButton color="inherit" size="small"><Instagram /></IconButton>
                    </Stack>

                    <Typography variant="body2" color="text.secondary">
                        © {new Date().getFullYear()} - Hecho con React, MUI y GSAP
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;
