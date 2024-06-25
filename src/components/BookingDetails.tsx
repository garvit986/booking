import React from 'react';
import { BookingDetails as BookingDetailsType, FormData } from '../types';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { DevTool } from '@hookform/devtools';
import { TextField, Button, Container, Typography } from '@mui/material';

interface Props {
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  formData: FormData;
}

const validationSchema = Yup.object().shape({
  appointmentDate: Yup.string().required('Appointment date is required'),
  appointmentTime: Yup.string().required('Appointment time is required'),
});

const BookingDetails: React.FC<Props> = ({ formData, setFormData }) => {
  const { register, handleSubmit, control, formState: { errors } } = useForm<BookingDetailsType>({
    defaultValues: formData.bookingDetails || {},
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<BookingDetailsType> = (data) => {
    setFormData((prev) => ({ ...prev, bookingDetails: data }));
    navigate('/confirmation');
  };

  return (
    <Container>
      <Typography variant="h4">Booking Details</Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          type="date"
          label="Appointment Date"
          {...register('appointmentDate')}
          error={!!errors.appointmentDate}
          helperText={errors.appointmentDate ? errors.appointmentDate.message : ''}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          type="time"
          label="Appointment Time"
          {...register('appointmentTime')}
          error={!!errors.appointmentTime}
          helperText={errors.appointmentTime ? errors.appointmentTime.message : ''}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
      <DevTool control={control} />
    </Container>
  );
};

export default BookingDetails;