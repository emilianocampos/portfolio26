import { Box } from '@mui/material';

const CodeAnimation = () => {

    const codeLines = Array.from({ length: 12 }, (_, i) => ({
        id: i,
        color: i % 3 === 0 ? '#6366f1' : i % 2 === 0 ? '#f43f5e' : '#10b981',
        indent: (i % 4 === 1 || i % 4 === 2) ? 16 : 0
    }));

    return (
        <Box

            sx={{
                width: '100%',
                height: '350px',
                background: 'rgba(15, 23, 42, 0.6)',
                backdropFilter: 'blur(12px)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                padding: '20px',
                position: 'relative',
                overflow: 'hidden',
                perspective: '1000px',
            }}
        >
            {/* Terminal Header */}
            <Box sx={{ display: 'flex', gap: '8px', mb: '20px' }}>
                <Box sx={{ width: '10px', height: '10px', borderRadius: '50%', bgcolor: '#ff5f56' }} />
                <Box sx={{ width: '10px', height: '10px', borderRadius: '50%', bgcolor: '#ffbd2e' }} />
                <Box sx={{ width: '10px', height: '10px', borderRadius: '50%', bgcolor: '#27c93f' }} />
            </Box>

            {/* Code Lines Container */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {codeLines.map((line) => (
                    <Box
                        key={line.id}
                        sx={{
                            height: '6px',
                            width: '40%',
                            bgcolor: line.color,
                            borderRadius: '3px',
                            ml: `${line.indent}px`,
                            opacity: 0.7,
                        }}
                    />
                ))}
            </Box>

            {/* Background Grid */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: -1,
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                }}
            />
        </Box>
    );
};

export default CodeAnimation;
