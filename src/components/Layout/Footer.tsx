import { Box, Container, Typography, Stack, IconButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
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
                        <IconButton
                            component="a"
                            href="https://www.linkedin.com/in/emiliano-campos/"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="inherit"
                            size="small"
                        >
                            <LinkedIn />
                        </IconButton>
                        <IconButton
                            component="a"
                            href="https://github.com/emilianocampos"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="inherit"
                            size="small"
                        >
                            <GitHub />
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

