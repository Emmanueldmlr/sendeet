import { passwordRegEx } from '@/app/Data/RegexData';
import * as Yup from 'yup';

export const registrationFormValidationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email Address is required"),
    password: Yup.string()
      .matches(
        passwordRegEx,
        "Password must be at least 8 characters, contain one uppercase letter, and one special character."
      )
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });