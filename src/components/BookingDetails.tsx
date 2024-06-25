import React, {  } from 'react'
import {BookingDetails as BookingDetailsType, FormData} from '../types'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler , useForm} from 'react-hook-form'
import { DevTool } from '@hookform/devtools'

interface Props{
    setFormData: React.Dispatch<React.SetStateAction<FormData>>
    formData: FormData
}

const BookingDetails: React.FC<Props> = ({formData,setFormData}) => {
    const {register, handleSubmit, control} = useForm<BookingDetailsType>({
        defaultValues: formData.bookingDetails|| {}
    })
    const navigate = useNavigate()

    const onSubmit : SubmitHandler<BookingDetailsType> = (data)=>{
        setFormData(prev=>({...prev, bookingDetails: data}))
        navigate('/confirmation')
    }
    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <label htmlFor='appointment'>Appointment Date</label>
                <input type='date' id = 'appointment' {...register("appointmentDate",{required:{value: true,message:'username required'}})} />
      
                <label htmlFor='time'>Appointment Time</label>
                <input type='time' id='time' {...register("appointmentTime",{required:{value: true,message:'email required'}})} />
      
                <button>Submit</button>
            </form>
            <DevTool control={control} />
        </div>
        )
}

export default BookingDetails