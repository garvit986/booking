import React from 'react'
import { ServiceDetails as ServiceDetailsType, FormData} from '../types'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'


interface Props{
    setFormData: React.Dispatch<React.SetStateAction<FormData>>
    formData: FormData
}
const ServiceDetails: React.FC<Props>=({formData,setFormData})=>{
    const {register, handleSubmit, control} = useForm<ServiceDetailsType>({
        defaultValues: formData.serviceDetails || {}
    })
    const navigate = useNavigate()

    const onSubmit:
    SubmitHandler<ServiceDetailsType> = (data) =>{
        setFormData(prev=>({...prev, serviceDetails:data}))
        navigate('/bookingdetails')
    }
    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <label htmlFor='vehicle'>Vehicle Type</label>
                <input type='text' id = 'username' {...register("vehicleType",{required:{value: true,message:'username required'}})} />
      
                <label htmlFor='model'>Model Number</label>
                <input type='text' id='model' {...register("modelNumber",{required:{value: true,message:'email required'}})} />
      
                <button>Next</button>
            </form>
            <DevTool control={control} />
        </div>
        )
}

export default ServiceDetails