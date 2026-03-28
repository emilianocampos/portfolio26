import { Box, Container, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SEO from '../components/Common/SEO';

const WebApps = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, minHeight: '100vh', bgcolor: 'background.default' }}>
      <SEO 
        title="Aplicaciones Webs" 
        description="Desarrollo de aplicaciones web complejas con lógica de negocio y gestión de datos."
      />
      <Container maxWidth="lg">
        <Box sx={{ mb: 4 }}>
          <Button 
            component={RouterLink} 
            to="/" 
            startIcon={<ArrowBackIcon />}
            sx={{ 
              color: 'text.primary',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' }
            }}
          >
            Volver al Inicio
          </Button>
        </Box>
        <Typography variant="h2" align="center" gutterBottom sx={{ mb: 6, fontWeight: 800 }}>
          Aplicaciones Webs
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary">
          Sección en construcción. Próximamente verás mis aplicaciones web más avanzadas.
        </Typography>
      </Container>
    </Box>
  );
};

export default WebApps;
