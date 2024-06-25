import React from 'react';
import { FormData } from '../types';
import { Box, Typography, Container } from '@mui/material';

interface Props {
  formData: FormData;
}

const Confirmation: React.FC<Props> = ({ formData }) => {
  return (
    <Container>
      <Box mt={5} textAlign="center">
        <Typography variant="h4" gutterBottom>
          Hi {formData.personalDetails?.username}
        </Typography>
        <Typography variant="body1">
          Your booking for {formData.bookingDetails?.appointmentDate} at {formData.bookingDetails?.appointmentTime} is confirmed.
        </Typography>
        <Typography variant="h6" mt={3}>
          Thank you.
        </Typography>
      </Box>
    </Container>
  );
};

export default Confirmation;
