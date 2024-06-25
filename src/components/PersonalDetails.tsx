import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { TextField, Button, Container, Typography } from '@mui/material';
import { DevTool } from '@hookform/devtools';
import { PersonalDetails as PersonalDetailsType, FormData } from '../types';

interface Props {
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  formData: FormData;
}

const validationSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Email is invalid').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  address: Yup.string().required('Address is required'),
});

const PersonalDetails: React.FC<Props> = ({ formData, setFormData }) => {
  const { register, handleSubmit, control, formState: { errors } } = useForm<PersonalDetailsType>({
    defaultValues: formData.personalDetails || {},
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<PersonalDetailsType> = (data) => {
    setFormData((prev) => ({ ...prev, personalDetails: data }));
    navigate('/services');
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Personal Details
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          label="Username"
          {...register('username')}
          error={!!errors.username}
          helperText={errors.username ? errors.username.message : ''}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          type="email"
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email ? errors.email.message : ''}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Phone"
          {...register('phone')}
          error={!!errors.phone}
          helperText={errors.phone ? errors.phone.message : ''}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Address"
          {...register('address')}
          error={!!errors.address}
          helperText={errors.address ? errors.address.message : ''}
          fullWidth
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit">
          Next
        </Button>
      </form>
      <DevTool control={control} />
    </Container>
  );
};

export default PersonalDetails;