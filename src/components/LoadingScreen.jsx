import React, { useState, useEffect } from 'react';
import { Box, Typography, Fade, Zoom } from '@mui/material';

export default function LoadingScreen({ onLoadingComplete }) {
  const [showLogo, setShowLogo] = useState(false);
  const [showText, setShowText] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show logo after a short delay
    const logoTimer = setTimeout(() => setShowLogo(true), 300);
    
    // Show text after logo appears
    const textTimer = setTimeout(() => setShowText(true), 800);
    
    // Start fade out after showing content
    const fadeTimer = setTimeout(() => setFadeOut(true), 2500);
    
    // Complete loading and hide screen
    const completeTimer = setTimeout(() => {
      onLoadingComplete();
    }, 3000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(textTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  if (fadeOut) {
    return null;
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        bgcolor: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        transition: 'opacity 0.5s ease-out',
        opacity: fadeOut ? 0 : 1,
      }}
    >
      {/* Logo */}
      <Fade in={showLogo} timeout={1000}>
        <Box sx={{ mb: 3 }}>
          <Zoom in={showLogo} timeout={800}>
            <Box
              component="img"
              src="/logo.png"
              alt="Genesis Press"
              sx={{
                height: { xs: 120, md: 160 },
                width: 'auto',
                filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
              }}
            />
          </Zoom>
        </Box>
      </Fade>

      {/* Company Name */}
      <Fade in={showText} timeout={1000}>
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h3"
            component="h1"
            fontWeight={800}
            color="primary"
            sx={{
              mb: 1,
              fontSize: { xs: '2rem', md: '3rem' },
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            Genesis Press
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{
              fontSize: { xs: '1rem', md: '1.25rem' },
              fontWeight: 500,
            }}
          >
            Printers & Publishers Pvt. Ltd.
          </Typography>
        </Box>
      </Fade>

      {/* Loading Dots */}
      <Fade in={showText} timeout={1000}>
        <Box sx={{ mt: 4, display: 'flex', gap: 1 }}>
          {[0, 1, 2].map((index) => (
            <Box
              key={index}
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: 'primary.main',
                animation: 'pulse 1.5s ease-in-out infinite',
                animationDelay: `${index * 0.2}s`,
                '@keyframes pulse': {
                  '0%, 100%': {
                    opacity: 0.3,
                    transform: 'scale(0.8)',
                  },
                  '50%': {
                    opacity: 1,
                    transform: 'scale(1.2)',
                  },
                },
              }}
            />
          ))}
        </Box>
      </Fade>
    </Box>
  );
} 
