export interface PersonalDetails{
    username: string,
    email: string,
    phone: string,
    address: string
}

export interface ServiceDetails{
    vehicleType: string,
    modelNumber: string | number
}

export interface BookingDetails{
    appointmentDate: string | number,
    appointmentTime: string | number
}

export interface FormData{
    personalDetails?: PersonalDetails
    serviceDetails?: ServiceDetails
    bookingDetails?: BookingDetails
}