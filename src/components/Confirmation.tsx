import React from 'react'
import { FormData } from '../types'

interface Props{
    formData: FormData
}

const Confirmation: React.FC<Props> = ({formData}) => {
  return (
    <div>
        <h1>Hi {formData.personalDetails?.username} </h1>
        <p> Your booking for {formData.bookingDetails?.appointmentDate} at {formData.bookingDetails?.appointmentTime} is confirmed. </p>
        <h1> Thank you. </h1>
    </div>
  )
}

export default Confirmation