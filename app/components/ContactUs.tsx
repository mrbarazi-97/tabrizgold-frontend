import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  IconButton,
  Snackbar,
  useTheme,
  alpha,
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon,
  Instagram as InstagramIcon,
  Telegram as TelegramIcon,
  WhatsApp as WhatsAppIcon,
  Send as SendIcon,
} from '@mui/icons-material';

export default function ContactUs() {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOpenSnackbar(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Common styles for input fields
  const inputStyles = {
    '& .MuiInputBase-root': {
      fontSize: '1.4rem',
      backgroundColor: alpha(theme.palette.background.paper, 0.8),
      backdropFilter: 'blur(8px)',
      borderRadius: '20px',
      transition: 'all 0.3s ease',
      minHeight: '80px',
      '&:hover': {
        backgroundColor: alpha(theme.palette.background.paper, 0.95),
      },
      '&.Mui-focused': {
        backgroundColor: theme.palette.background.paper,
        boxShadow: `0 4px 20px ${alpha(theme.palette.primary.main, 0.2)}`,
      },
    },
    '& .MuiInputBase-input': {
      padding: '28px 32px',
      direction: 'rtl',
      '&::placeholder': {
        fontSize: '1.4rem',
      },
    },
    '& .MuiInputLabel-root': {
      fontSize: '1.3rem',
      direction: 'rtl',
      right: 25,
      top: 8,
      left: 'auto',
      transformOrigin: 'right',
      color: theme.palette.text.secondary,
      '&.Mui-focused': {
        color: theme.palette.primary.main,
      },
      '&.MuiInputLabel-shrink': {
        transform: 'translate(0, -12px) scale(0.85)',
      },
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderWidth: 2,
      borderColor: alpha(theme.palette.primary.main, 0.2),
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: alpha(theme.palette.primary.main, 0.5),
    },
    marginBottom: 3,
  };

  const contactInfoStyles = {
    display: 'flex',
    alignItems: 'center',
    mb: 6,
    justifyContent: 'flex-end',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'translateX(-8px)',
    },
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(
          theme.palette.primary.dark,
          0.05
        )} 100%)`,
        py: { xs: 6, md: 12 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 10 }}>
          <Typography
            variant="h1"
            component="h1"
            fontWeight="bold"
            sx={{
              mb: 3,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            تماس با ما
          </Typography>
          <Typography 
            variant="h5" 
            color="text.secondary" 
            sx={{ 
              maxWidth: '800px', 
              mx: 'auto',
              fontSize: { xs: '1.2rem', md: '1.4rem' },
              lineHeight: 1.8
            }}
          >
            ما همیشه آماده پاسخگویی به سوالات شما هستیم. لطفاً با ما در تماس باشید.
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 8 }}>
          {/* Contact Form Section */}
          <Box sx={{ flex: { md: '0 0 60%' } }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 8 },
                borderRadius: 6,
                backgroundColor: alpha(theme.palette.background.paper, 0.8),
                backdropFilter: 'blur(12px)',
                boxShadow: `0 8px 32px ${alpha(theme.palette.primary.main, 0.1)}`,
              }}
            >
              <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                  <TextField
                    fullWidth
                    label="نام و نام خانوادگی"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
                    required
                    sx={inputStyles}
                  />
                  <Box sx={{ display: 'flex', gap: 4, flexDirection: { xs: 'column', sm: 'row' } }}>
                    <TextField
                      fullWidth
                      label="ایمیل"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined"
                      required
                      sx={inputStyles}
                    />
                    <TextField
                      fullWidth
                      label="شماره تماس"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      variant="outlined"
                      required
                      sx={inputStyles}
                    />
                  </Box>
                  <TextField
                    fullWidth
                    label="پیام شما"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    variant="outlined"
                    multiline
                    rows={8}
                    required
                    sx={{
                      ...inputStyles,
                      '& .MuiInputBase-root': {
                        ...inputStyles['& .MuiInputBase-root'],
                        minHeight: '200px',
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<SendIcon sx={{ transform: 'rotate(180deg)', ml: 1, fontSize: '2rem' }} />}
                    sx={{
                      py: 3.5,
                      px: 8,
                      fontSize: '1.4rem',
                      borderRadius: '16px',
                      alignSelf: 'flex-start',
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: `0 8px 20px ${alpha(theme.palette.primary.main, 0.3)}`,
                      },
                    }}
                  >
                    ارسال پیام
                  </Button>
                </Box>
              </form>
            </Paper>
          </Box>

          {/* Contact Information Section */}
          <Box sx={{ flex: { md: '0 0 40%' } }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 8 },
                borderRadius: 6,
                height: '100%',
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                color: 'white',
                boxShadow: `0 8px 32px ${alpha(theme.palette.primary.main, 0.2)}`,
              }}
            >
              <Typography 
                variant="h3" 
                gutterBottom 
                align="right" 
                fontWeight="bold" 
                sx={{ 
                  mb: 8,
                  fontSize: { xs: '2rem', md: '2.5rem' }
                }}
              >
                اطلاعات تماس
              </Typography>
              
              <Box sx={{ mt: 6 }}>
                <Box sx={contactInfoStyles}>
                  <Typography sx={{ mr: 3, fontSize: '1.3rem' }} align="right">
                    تهران، خیابان ولیعصر، بالاتر از میدان ونک
                  </Typography>
                  <LocationIcon sx={{ fontSize: '2.8rem' }} />
                </Box>
                
                <Box sx={contactInfoStyles}>
                  <Typography sx={{ mr: 3, fontSize: '1.3rem', direction: 'ltr' }} align="right">
                    ۰۲۱-۸۸۸۸۸۸۸۸
                  </Typography>
                  <PhoneIcon sx={{ fontSize: '2.8rem' }} />
                </Box>
                
                <Box sx={contactInfoStyles}>
                  <Typography sx={{ mr: 3, fontSize: '1.3rem' }} align="right">
                    info@tabrizgold.com
                  </Typography>
                  <EmailIcon sx={{ fontSize: '2.8rem' }} />
                </Box>

                <Typography 
                  variant="h4" 
                  gutterBottom 
                  align="right" 
                  sx={{ 
                    mt: 10, 
                    mb: 6,
                    fontSize: { xs: '1.8rem', md: '2.2rem' }
                  }}
                >
                  ما را در شبکه‌های اجتماعی دنبال کنید
                </Typography>
                
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 4, gap: 3 }}>
                  <IconButton
                    color="inherit"
                    sx={{
                      fontSize: '3rem',
                      p: 2.5,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <InstagramIcon sx={{ fontSize: '3rem' }} />
                  </IconButton>
                  <IconButton
                    color="inherit"
                    sx={{
                      fontSize: '3rem',
                      p: 2.5,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <TelegramIcon sx={{ fontSize: '3rem' }} />
                  </IconButton>
                  <IconButton
                    color="inherit"
                    sx={{
                      fontSize: '3rem',
                      p: 2.5,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        transform: 'translateY(-4px)',
                      },
                    }}
                  >
                    <WhatsAppIcon sx={{ fontSize: '3rem' }} />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Container>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        message="پیام شما با موفقیت ارسال شد"
        sx={{
          '& .MuiSnackbarContent-root': {
            fontSize: '1.2rem',
            borderRadius: '16px',
            padding: '16px 24px',
            backgroundColor: theme.palette.primary.main,
          },
        }}
      />
    </Box>
  );
} 