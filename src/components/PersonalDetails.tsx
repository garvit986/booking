import React from 'react'
import {PersonalDetails as PersonalDetailsType, FormData} from '../types'
import { useNavigate } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'


interface Props{
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
  formData: FormData
}
// .....
const PersonalDetails:
React.FC<Props> = ({formData, setFormData})=>{
  const {register, handleSubmit, control} = useForm<PersonalDetailsType>({
    defaultValues: formData.personalDetails || {}
  })

const navigate = useNavigate()

const onSubmit:
SubmitHandler<PersonalDetailsType> = (data) =>{
  setFormData(prev=>({ ...prev, personalDetails:data}))
  navigate('/services')
}
return (
  <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <label htmlFor='Username'>Username</label>
          <input type='text' id = 'username' {...register("username",{required:{value: true,message:'username required'}})} />

          <label htmlFor='email'>Email</label>
          <input type='email' id='email' {...register("email",{required:{value: true,message:'email required'}})} />

          <label htmlFor='Phone'>Phone</label>
          <input type='text' id='phone' {...register("phone", {required:{value: true,message:'phone number required'}})} />

          <label htmlFor='Address'>Address</label>
          <input type='text' id='address' {...register("address", {required:{value: true,message:'Address required'}})} />

          <button>Next</button>
      </form>
      <DevTool control={control} />
  </div>
)
}
export default PersonalDetails