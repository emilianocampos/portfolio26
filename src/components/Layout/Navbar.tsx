import { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import pcIcon from '../../assets/pc.svg';

const navItems = [
    { label: 'Sobre mí', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experiencia', id: 'experience' },
    { label: 'Proyectos', id: 'projects' },
    { label: 'Contacto', id: 'contact' },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const theme = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMobileOpen(false);
    };

    return (
        <>
            <AppBar
                position="fixed"
                sx={{
                    background: isScrolled ? 'rgba(15, 23, 42, 0.8)' : 'transparent',
                    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                    boxShadow: isScrolled ? theme.shadows[4] : 'none',
                    transition: 'all 0.3s ease-in-out',
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                        <Box
                            sx={{ display: 'flex', alignItems: 'center', gap: 1, cursor: 'pointer' }}
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 800,
                                    background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                EC
                            </Typography>
                            <Box
                                component="img"
                                src={pcIcon}
                                alt="PC Logo"
                                sx={{
                                    width: 24,
                                    height: 24,
                                    filter: theme.palette.mode === 'dark' ? 'invert(1)' : 'none',
                                    opacity: 0.9
                                }}
                            />
                        </Box>

                        {/* Desktop Menu */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                            {navItems.map((item) => (
                                <Button
                                    key={item.id}
                                    onClick={() => scrollToSection(item.id)}
                                    sx={{ color: 'text.primary', fontWeight: 500 }}
                                >
                                    {item.label}
                                </Button>
                            ))}
                            <Button
                                variant="contained"
                                onClick={() => scrollToSection('contact')}
                                sx={{ ml: 2 }}
                            >
                                Hablemos
                            </Button>
                        </Box>

                        {/* Mobile Menu Icon */}
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ display: { md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>

            <Drawer
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                PaperProps={{
                    sx: {
                        width: '100%',
                        maxWidth: 300,
                        bgcolor: 'background.paper',
                        backgroundImage: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    },
                }}
            >
                <IconButton
                    onClick={handleDrawerToggle}
                    sx={{ position: 'absolute', top: 16, right: 16 }}
                >
                    <MenuIcon />
                </IconButton>
                <Box sx={{ p: 4 }}>
                    <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        {navItems.map((item) => (
                            <ListItem
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                sx={{
                                    textAlign: 'center',
                                    borderRadius: 2,
                                    '&:hover': { bgcolor: 'rgba(255,255,255,0.05)' }
                                }}
                            >
                                <ListItemText
                                    primary={item.label}
                                    primaryTypographyProps={{
                                        variant: 'h5',
                                        fontWeight: 600,
                                        textAlign: 'center'
                                    }}
                                />
                            </ListItem>
                        ))}
                    </List>
                    <Button
                        variant="contained"
                        fullWidth
                        size="large"
                        onClick={() => scrollToSection('contact')}
                        sx={{ mt: 4 }}
                    >
                        Hablemos
                    </Button>
                </Box>
            </Drawer>
        </>
    );
};

export default Navbar;
