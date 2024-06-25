import React from 'react';
import { ServiceDetails as ServiceDetailsType, FormData } from '../types';
import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { DevTool } from '@hookform/devtools';
import { TextField, Button, Container, Typography, MenuItem, Select, InputLabel, FormControl } from '@mui/material';

interface Props {
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  formData: FormData;
}

const validationSchema = Yup.object().shape({
  vehicleType: Yup.string().required('Vehicle type is required'),
  modelNumber: Yup.string().required('Model number is required'),
});

const vehicleTypes = ['car', 'taxi', 'truck', 'bus', 'train', 'airplane'];

const ServiceDetails: React.FC<Props> = ({ formData, setFormData }) => {
  const { register, handleSubmit, control, formState: { errors } } = useForm<ServiceDetailsType>({
    defaultValues: formData.serviceDetails || {},
    resolver: yupResolver(validationSchema),
  });

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ServiceDetailsType> = (data) => {
    setFormData((prev) => ({ ...prev, serviceDetails: data }));
    navigate('/bookingdetails');
  };

  return (
    <Container>
      <Typography variant="h4">Service Details</Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <FormControl fullWidth margin="normal" error={!!errors.vehicleType}>
          <InputLabel id="vehicleType-label">Vehicle Type</InputLabel>
          <Select
            labelId="vehicleType-label"
            id="vehicleType"
            {...register('vehicleType')}
            label="Vehicle Type"
            defaultValue=""
          >
            {vehicleTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </Select>
          {errors.vehicleType && <Typography color="error">{errors.vehicleType.message}</Typography>}
        </FormControl>
        <TextField
          label="Model Number"
          id="modelNumber"
          {...register('modelNumber')}
          error={!!errors.modelNumber}
          helperText={errors.modelNumber ? errors.modelNumber.message : ''}
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

export default ServiceDetails;
