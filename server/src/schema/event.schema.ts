import { object, string, date } from "yup";


export const createEventSchema = object({
    body:object({
        firstName: string().required('First Name is required'),
        lastName: string().required('Last Name is required'),
        email:string().required('Email is required').matches(/(.+)@(.+){2,}\.(.+){2,}/, "Email must be a valid email address"),
        date:date().required('Date is required')
    })
});