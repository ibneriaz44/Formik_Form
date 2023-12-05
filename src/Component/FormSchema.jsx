import * as Yup from "yup";

export const FormSchema = Yup.object().shape({
    studentName: Yup.string().required("Name is required"),
    age: Yup.number().required("Age is required").positive("Age must be a positive number"),
    gender: Yup.string().required("Gender is required"),
    school: Yup.string().required("School is required"),
    city: Yup.string().required("City is required"),
})