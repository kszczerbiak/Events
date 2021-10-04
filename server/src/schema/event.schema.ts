import { object, string, date } from "yup";


export const createEventSchema = object({
    body:object({
        firstName: string().required('First Name is required').matches(/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/, 'First name must be valid'),
        lastName: string().required('Last Name is required').matches(/\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/, 'Last name must be valid'),
        email:string().required('Email is required').matches(/(.+)@(.+){2,}\.(.+){2,}/, "Email must be a valid email address"),
        date:date().required('Date is required')
    })
});