export interface PersonalDetails{
    username: string,
    email: string,
    phone: string,
    address: string
}

export interface ServiceDetails{
    vehicleType: string,
    modelNumber: string 
}

export interface BookingDetails{
    appointmentDate: string  
    appointmentTime: string
}

export interface FormData{
    personalDetails?: PersonalDetails
    serviceDetails?: ServiceDetails
    bookingDetails?: BookingDetails
}